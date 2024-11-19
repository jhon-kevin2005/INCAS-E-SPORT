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

// Alternar menú hamburguesa
menuToggle.addEventListener('click', () => {
  navList.classList.toggle('show');
});

// Inicializar el tamaño y actualizar al redimensionar
window.addEventListener('resize', handleResize);
document.addEventListener('DOMContentLoaded', handleResize);
