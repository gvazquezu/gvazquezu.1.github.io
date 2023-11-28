function validarTarjeta() {
    // Generamos nuestra funcion y sus variables para obtener los valores de los campos que declaramos en el HTML
    var numeroTarjeta = document.getElementById('numeroTarjeta').value.replace(/-/g, ''); // Aqui indicamos que considere los guiones aún q no se coloquen
    var vencimiento = document.getElementById('vencimiento').value;
    var codigoSeguridad = document.getElementById('codigoSeguridad').value;
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var direccion = document.getElementById('direccion').value;

    // if para la validación del número de tarjeta al digitarlo (16 dígitos y solo números)
    if (!/^\d{16}$/.test(numeroTarjeta)) {
        mensaje('Por favor, ingrese un número de tarjeta válido (16 dígitos).');
        return false;
    }

    // if para la validación de la fecha de vencimiento al digitarlo (formato MM/AA y fecha válida)
    if (!/^\d{2}\/\d{2}$/.test(vencimiento)) {
        mensaje('Por favor, ingrese una fecha de vencimiento válida (MM/AA).');
        return false;
    }

    var hoy = new Date();
    var venci = new Date('20' + fechaVenci.slice(3) + '-' + fechaVenci.slice(0, 2) + '-01');

    if (venci < hoy) {
        mensaje('La tarjeta ha vencido. Por favor, ingrese una fecha de vencimiento válida.');
        return false;
    }

    // if para la validación del código de seguridad al digitarse (3 dígitos y solo números)
    if (!/^\d{3}$/.test(codigoSeguridad)) {
        mensaje('Por favor, ingrese un código de seguridad válido (3 dígitos).');
        return false;
    }

    // if para la validación de los campos de dirección al digitarse (nombre, apellidos y domicilio)
    if (nombre.trim() === '' || apellido.trim() === '' || direccion.trim() === '') {
        mensaje('Por favor, complete todos los campos de la dirección.');
        return false;
    }

    // Si todas las validaciones anteriores son correctas, se muestra un mensaje de éxito
    mensaje('¡Pago exitoso!', 'success');
    return false;
}

// Aqui hacemos uso de una función para que al detectar que es una validación correcta se muestre en color verde, de lo contrario en color rojo
function mensaje(mensaje, type = 'error') {
    var mensajeElement = document.getElementById('mensaje');
    mensajeElement.textContent = mensaje;

    if (type === 'success') {
        mensajeElement.style.color = 'green';
    } else {
        mensajeElement.style.color = 'red';
    }
}