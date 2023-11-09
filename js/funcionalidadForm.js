document.addEventListener('DOMContentLoaded', function () {
    var forma = document.getElementById('forma');
    var nombre = document.getElementById('nombre');
    var direccion = document.getElementById('direccion');
    var telefono = document.getElementById('telefono');
    var email = document.getElementById('email');
    var ciudad = document.getElementById('ciudad');
    var edad = document.getElementById('edad');

    forma.addEventListener('submit', function (event) {
        if (nombre.value.trim() === '' ||
            direccion.value.trim() === '' ||
            email.value.trim() === '' ||
            ciudad.value.trim() === '' ||
            edad.value.trim() === '') {
            alert('Por favor, rellena todos los campos.');
            event.preventDefault();
        } 
        else {
            var telefonoValue = telefono.value.trim();
            if (telefonoValue === '' || isNaN(telefonoValue)) {
                alert('Teléfono debe contener un número telefónico real.');
                event.preventDefault();
            }
            else {
                var edadValue = parseInt(edad.value, 10);
                if (edadValue < 10) {
                    alert('Lo sentimos debes ser mayor de 10 años.');
                    event.preventDefault();
                }
                else{
                    if(edadValue > 100){
                        alert('¿Acaso eres inmortal?\nDebes colocar tu Edad real');
                    event.preventDefault();
                    }
                }
            }
        }
    });
});