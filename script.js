document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Formulario enviado con éxito!');
        // Aquí puedes agregar código para enviar el formulario a un servidor
    });
});
