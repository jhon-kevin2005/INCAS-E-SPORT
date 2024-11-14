// Seleccionamos el botón de hamburguesa y el menú
const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('nav ul');

// Detectamos el tamaño de la pantalla para aplicar solo en dispositivos móviles
window.addEventListener('resize', () => {
  if (window.innerWidth <= 768) {
    // Si el tamaño es menor o igual a 768px, habilitamos el menú de hamburguesa
    menuToggle.style.display = 'block';
  } else {
    // Si el tamaño es mayor, lo ocultamos (ya que el menú se muestra en línea)
    menuToggle.style.display = 'none';
    navList.classList.remove('show'); // Aseguramos que el menú no esté abierto en pantallas grandes
  }
});

// Iniciamos la visibilidad del menú de hamburguesa al cargar la página
if (window.innerWidth <= 768) {
  menuToggle.style.display = 'block';
} else {
  menuToggle.style.display = 'none';
}

// Función para alternar la visibilidad del menú en móvil
menuToggle.addEventListener('click', () => {
  navList.classList.toggle('show');
});
