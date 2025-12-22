// Cursor light
const cursorLight = document.getElementById("cursor-light");
document.addEventListener("mousemove", (e) => {
  cursorLight.style.background =
    `radial-gradient(circle at ${e.clientX}px ${e.clientY}px,
    rgba(255,127,42,0.2), transparent 45%)`;
});

// Menú responsive
const toggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
toggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});
