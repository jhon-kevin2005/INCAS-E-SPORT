// Efecto de luz que sigue el cursor en el fondo
const cursorLight = document.getElementById("cursor-light");

document.addEventListener("mousemove", (e) => {
  cursorLight.style.background = `
    radial-gradient(circle at ${e.clientX}px ${e.clientY}px,
    rgba(255,127,42,0.2), transparent 50%)`;
});

// Menú hamburguesa
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
  menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
});
