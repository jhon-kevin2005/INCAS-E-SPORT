
// Selección de elementos
const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('nav ul');

// Manejar el tamaño de pantalla
const handleResize = () => {
  if (window.innerWidth <= 768) {
    menuToggle.style.display = 'flex';
  } else {
    menuToggle.style.display = 'none';
    navList.classList.remove('show');
  }
};
