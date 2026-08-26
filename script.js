const cursorLight = document.getElementById("cursor-light");

if (cursorLight && window.matchMedia("(pointer: fine)").matches) {
  document.addEventListener("mousemove", function(e) {
    cursorLight.style.background =
      "radial-gradient(500px circle at " +
      e.clientX + "px " +
      e.clientY + "px, rgba(255,122,0,0.12), transparent 40%)";
  });
}

const header = document.getElementById("header");

window.addEventListener("scroll", function() {
  if (!header) return;

  if (window.scrollY > 30) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", function() {
    navMenu.classList.toggle("show");
  });

  const links = document.querySelectorAll("#navMenu a");

  links.forEach(function(link) {
    link.addEventListener("click", function() {
      navMenu.classList.remove("show");
    });
  });
}

const divisions = {
  freefire: {
    name: "FREE FIRE",
    description: "El roster oficial de INDARK para Free Fire.",
    players: [
      {
        nickname: "DARK REX",
        name: "Jugador 01",
        role: "CAPITAN - IGL",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80"
      },
      {
        nickname: "DARK ZERO",
        name: "Jugador 02",
        role: "RUSHER",
        image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=800&q=80"
      },
      {
        nickname: "DARK GHOST",
        name: "Jugador 03",
        role: "SUPPORT",
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80"
      },
      {
        nickname: "DARK X",
        name: "Jugador 04",
        role: "FRAGGER",
        image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },

  cod: {
    name: "CALL OF DUTY",
    description: "La division tactica de INDARK.",
    players: [
      {
        nickname: "INDARK WAR",
        name: "Jugador 01",
        role: "CAPITAN",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80"
      },
      {
        nickname: "INDARK ACE",
        name: "Jugador 02",
        role: "SLAYER",
        image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=800&q=80"
      },
      {
        nickname: "INDARK VEX",
        name: "Jugador 03",
        role: "SUPPORT",
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },

  mlbb: {
    name: "MOBILE LEGENDS",
    description: "La division MOBA de INDARK.",
    players: [
      {
        nickname: "DARK MID",
        name: "Jugador 01",
        role: "MID LANE",
        image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=800&q=80"
      },
      {
        nickname: "DARK JUNGLE",
        name: "Jugador 02",
        role: "JUNGLER",
        image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=800&q=80"
      },
      {
        nickname: "DARK GOLD",
        name: "Jugador 03",
        role: "GOLD LANE",
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80"
      }
    ]
  }
};

const playersGrid = document.getElementById("playersGrid");
const divisionName = document.getElementById("divisionName");
const divisionDescription = document.getElementById("divisionDescription");
const gameTabs = document.querySelectorAll(".game-tab");

function renderPlayers(game) {
  if (!playersGrid || !divisions[game]) return;

  const division = divisions[game];

  if (divisionName) {
    divisionName.textContent = division.name;
  }

  if (divisionDescription) {
    divisionDescription.textContent = division.description;
  }

  playersGrid.innerHTML = "";

  division.players.forEach(function(player, index) {
    const card = document.createElement("article");

    card.className = "player-card";
    card.style.animationDelay = (index * 0.1) + "s";

    card.innerHTML =
      '<div class="player-image">' +
        '<img src="' + player.image + '" alt="' + player.nickname + '">' +
      '</div>' +
      '<div class="player-number">' +
        String(index + 1).padStart(2, "0") +
      '</div>' +
      '<div class="player-info">' +
        '<span class="player-role">' + player.role + '</span>' +
        '<h4 class="player-name">' + player.nickname + '</h4>' +
        '<p class="player-realname">' + player.name + '</p>' +
      '</div>';

    playersGrid.appendChild(card);
  });
}

gameTabs.forEach(function(tab) {
  tab.addEventListener("click", function() {
    const game = tab.getAttribute("data-game");

    if (!divisions[game]) return;

    gameTabs.forEach(function(item) {
      item.classList.remove("active");
    });

    tab.classList.add("active");

    renderPlayers(game);
  });
});

renderPlayers("freefire");

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  revealElements.forEach(function(element) {
    observer.observe(element);
  });
} else {
  revealElements.forEach(function(element) {
    element.classList.add("active");
  });
}

const contactForm = document.querySelector("#contacto form");

if (contactForm) {
  contactForm.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Gracias por contactar con INDARK!");
    contactForm.reset();
  });
}
