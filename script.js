// Seleccionamos el botón de hamburguesa y el menú
const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('nav ul');

// Función para alternar la visibilidad del menú
menuToggle.addEventListener('click', () => {
  navList.classList.toggle('show');
});

// Efecto de deslizamiento suave para el header al hacer scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
