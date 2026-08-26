/* =========================================
   INDARK - SCRIPT PRINCIPAL
========================================= */


/* LUZ DEL CURSOR */

const cursorLight = document.getElementById("cursor-light");

if (cursorLight && window.matchMedia("(pointer: fine)").matches) {

  document.addEventListener("mousemove", function (e) {

    cursorLight.style.background =
      "radial-gradient(500px circle at " +
      e.clientX +
      "px " +
      e.clientY +
      "px, rgba(255,122,0,0.12), transparent 40%)";

  });

}


/* HEADER AL HACER SCROLL */

const header = document.getElementById("header");

window.addEventListener("scroll", function () {

  if (!header) return;

  if (window.scrollY > 30) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

});


/* MENU RESPONSIVE */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

  menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("show");
  });

  const navLinks = document.querySelectorAll("#navMenu a");

  navLinks.forEach(function (link) {

    link.addEventListener("click", function () {
      navMenu.classList.remove("show");
    });

  });

}


/* =========================================
   DIVISIONES Y JUGADORES
========================================= */

const divisions = {

  freefire: {

    name: "FREE FIRE",

    description:
      "El roster oficial de INDARK para Free Fire.",

    players: [

      {
        nickname: "DARK REX",
        name: "Jugador 01",
        role: "CAPITÁN - IGL",

        image:
          "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80"
      },

      {
        nickname: "DARK ZERO",
        name: "Jugador 02",
        role: "RUSHER",

        image:
          "https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=800&q=80"
      },

      {
        nickname: "DARK GHOST",
        name: "Jugador 03",
        role: "SUPPORT",

        image:
          "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80"
      },

      {
        nickname: "DARK X",
        name: "Jugador 04",
        role: "FRAGGER",

        image:
          "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=800&q=80"
      }

    ]

  },


  freefire_female: {

    name: "FREE FIRE FEMENINO",

    description:
      "La división femenina oficial de INDARK.",

    players: [

      {
        nickname: "INC.Suarez",
        name: "Jugadora INDARK",
        role: "SUPORT",

        image:
          "https://uploads.onecompiler.io/42wjfjacc/43abvxugp/ChatGPT%20Image%2026%20ago%202026,%2012_18_03.png"
      },

      {
        nickname: "INC. XIME",
        name: "Jugadora INDARK",
        role: "RUSHER",

        image:
          "https://uploads.onecompiler.io/42wjfjacc/43abvxugp/ChatGPT%20Image%2026%20ago%202026,%2012_28_35.png"
      },

      {
        nickname: "INC. NICOL J",
        name: "Jugadora INDARK",
        role: "RUSHER",

        image:
          "https://uploads.onecompiler.io/42wjfjacc/43abvxugp/ChatGPT%20Image%2026%20ago%202026,%2012_33_33.png"
      },

      {
        nickname: "INC. NANDA7",
        name: "Jugadora INDARK",
        role: "RUSHER",

        image:
          "https://uploads.onecompiler.io/42wjfjacc/43abvxugp/ChatGPT%20Image%2026%20ago%202026,%2012_21_34.png"
      }

    ]

  },


  cod: {

    name: "CALL OF DUTY",

    description:
      "La división táctica oficial de INDARK.",

    players: [

      {
        nickname: "INDARK WAR",
        name: "Jugador 01",
        role: "CAPITÁN",

        image:
          "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80"
      },

      {
        nickname: "INDARK ACE",
        name: "Jugador 02",
        role: "SLAYER",

        image:
          "https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=800&q=80"
      },

      {
        nickname: "INDARK VEX",
        name: "Jugador 03",
        role: "SUPPORT",

        image:
          "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80"
      }

    ]

  },


  mlbb: {

    name: "MOBILE LEGENDS",

    description:
      "La división MOBA oficial de INDARK.",

    players: [

      {
        nickname: "DARK MID",
        name: "Jugador 01",
        role: "MID LANE",

        image:
          "https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=800&q=80"
      },

      {
        nickname: "DARK JUNGLE",
        name: "Jugador 02",
        role: "JUNGLER",

        image:
          "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=800&q=80"
      },

      {
        nickname: "DARK GOLD",
        name: "Jugador 03",
        role: "GOLD LANE",

        image:
          "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80"
      },

      {
        nickname: "DARK ROAM",
        name: "Jugador 04",
        role: "ROAMER",

        image:
          "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80"
      }

    ]

  }

};


/* ELEMENTOS DEL ROSTER */

const playersGrid =
  document.getElementById("playersGrid");

const divisionName =
  document.getElementById("divisionName");

const divisionDescription =
  document.getElementById("divisionDescription");

const gameTabs =
  document.querySelectorAll(".game-tab");


/* MOSTRAR JUGADORES */

function renderPlayers(game) {

  if (!playersGrid) return;

  if (!divisions[game]) return;

  const division = divisions[game];


  if (divisionName) {
    divisionName.textContent = division.name;
  }


  if (divisionDescription) {
    divisionDescription.textContent =
      division.description;
  }


  playersGrid.innerHTML = "";


  division.players.forEach(function (player, index) {

    const card =
      document.createElement("article");

    card.className = "player-card";

    card.style.animationDelay =
      (index * 0.12) + "s";


    card.innerHTML =
      '<div class="player-image">' +

        '<img src="' +
        player.image +
        '" alt="' +
        player.nickname +
        '" loading="lazy">' +

      '</div>' +

      '<div class="player-number">' +

        String(index + 1).padStart(2, "0") +

      '</div>' +

      '<div class="player-info">' +

        '<span class="player-role">' +
          player.role +
        '</span>' +

        '<h4 class="player-name">' +
          player.nickname +
        '</h4>' +

        '<p class="player-realname">' +
          player.name +
        '</p>' +

      '</div>';


    playersGrid.appendChild(card);

  });

}


/* CAMBIAR DIVISION */

gameTabs.forEach(function (tab) {

  tab.addEventListener("click", function () {

    const game =
      tab.getAttribute("data-game");

    if (!divisions[game]) return;


    gameTabs.forEach(function (item) {
      item.classList.remove("active");
    });


    tab.classList.add("active");


    if (playersGrid) {

      playersGrid.style.opacity = "0";

      playersGrid.style.transform =
        "translateY(20px)";


      setTimeout(function () {

        renderPlayers(game);

        playersGrid.style.opacity = "1";

        playersGrid.style.transform =
          "translateY(0)";

      }, 200);

    }

  });

});


/* CARGAR FREE FIRE AL INICIO */

renderPlayers("freefire");


/* ANIMACIONES AL HACER SCROLL */

const revealElements =
  document.querySelectorAll(".reveal");


if ("IntersectionObserver" in window) {

  const observer =
    new IntersectionObserver(
      function (entries) {

        entries.forEach(function (entry) {

          if (entry.isIntersecting) {

            entry.target.classList.add("active");

            observer.unobserve(entry.target);

          }

        });

      },
      {
        threshold: 0.1
      }
    );


  revealElements.forEach(function (element) {
    observer.observe(element);
  });

} else {

  revealElements.forEach(function (element) {
    element.classList.add("active");
  });

}


/* FORMULARIO */

const contactForm =
  document.getElementById("contactForm");


if (contactForm) {

  contactForm.addEventListener(
    "submit",
    function (event) {

      event.preventDefault();

      alert("¡Gracias por contactar con INDARK!");

      contactForm.reset();

    }
  );

}
