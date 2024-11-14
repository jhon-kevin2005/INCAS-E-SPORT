// script.js
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const menuToggle = document.createElement("span");
  menuToggle.classList.add("menu-toggle");
  menuToggle.textContent = "☰";
  header.appendChild(menuToggle);

  menuToggle.addEventListener("click", () => {
    header.classList.toggle("menu-open");
  });
});
