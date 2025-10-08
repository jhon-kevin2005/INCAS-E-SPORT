// Luz que sigue el cursor
const cursorLight = document.getElementById("cursor-light");
document.addEventListener("mousemove", (e) => {
  cursorLight.style.background = `
    radial-gradient(circle at ${e.clientX}px ${e.clientY}px,
    rgba(255,127,42,0.2), transparent 50%)
  `;
});

// Menú responsive
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav ul");
toggle.addEventListener("click", () => {
  nav.classList.toggle("show");
});
