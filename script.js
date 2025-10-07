// Luz del cursor
const cursorLight = document.getElementById("cursor-light");
document.addEventListener("mousemove", (e) => {
  cursorLight.style.background = `
    radial-gradient(circle at ${e.clientX}px ${e.clientY}px,
    rgba(255,127,42,0.2), transparent 50%)`;
});

// Menú móvil
const menuToggle = document.querySelector(".menu-toggle");
const navUl = document.querySelector("header nav ul");
menuToggle.addEventListener("click", () => {
  navUl.classList.toggle("show");
});
