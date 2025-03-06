document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Formulario enviado con éxito!');
        // Aquí puedes agregar código para enviar el formulario a un servidor
    });

    // Si deseas agregar un carrusel de imágenes, puedes hacerlo aquí
    // Ejemplo de carrusel simple
    const images = document.querySelectorAll('.gallery img');
    let currentIndex = 0;

    function showNextImage() {
        images[currentIndex].style.display = 'none';
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].style.display = 'block';
    }

    setInterval(showNextImage, 3000); // Cambia de imagen cada 3 segundos

    // Mostrar la primera imagen
    images.forEach((img, index) => {
        if (index !== currentIndex) {
            img.style.display = 'none';
        }
    });
});
