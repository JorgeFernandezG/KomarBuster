

function validarFormRegistro() {
    var nombrecompleto = document.getElementById('nombrecompleto').value;
    var user = document.getElementById('user').value;
    var correo = document.getElementById('correo').value;
    var password = document.getElementById('password').value;
    var passwordrpt = document.getElementById('passwordrpt').value;
    var fechanac = document.getElementById('fechanac').value;
    var direccion = document.getElementById('direccion').value;
    var regiones = document.getElementById('regiones').value;
    var comunas = document.getElementById('comunas').value;
    var checkboxterminos = document.getElementById('checkboxterminos');

    // Validar que los campos no esten vacios
    if (nombrecompleto === '' ) {
        alertify.error('Debes ingresar tu nombre completo');
        return false;
    }

    if (user === '' ) {
        alertify.error('Debes ingresar un nombre de usuario');
        return false;
    }

    if (correo === '' ) {
        alertify.error('Debes ingresar un correo');
        return false;
    }

    
    if (fechanac === '' ) {
        alertify.error('Debes ingresar tu fecha de nacimiento');
        return false;
    }

    if (password === '' ) {
        alertify.error('Debes ingresar una password');
        return false;
    }

    if (passwordrpt === '' ) {
        alertify.error('Debes repetir la password');
        return false;
    }


    // Validar formato de email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(correo)) {
        alertify.error('Debes ingresar un correo valido');
        return false;
    }

    //  Validar mayoria de 13 años
    var fechanacObj = new Date(fechanac);
    var today = new Date();
    var age = today.getFullYear() - fechanacObj.getFullYear();
    var monthDiff = today.getMonth() - fechanacObj.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < fechanacObj.getDate())) {
        age--;
    }
    if (age < 13) {
        alertify.error('Debes tener almenos 13 años para registrarte');
        return false;
    }

    // Validar longitud de contraseña
    if (password.length < 6 || password.length > 18) {
        alertify.error('La contraseña debe tener entre 6 a 18 caracteres');
        return false;
    }

    // Validar requisitos de contraseña
    if (!/[A-Z]/.test(password) || !/\d/.test(password)) {
        alertify.error('La contraseña debe tener almenos una letra mayuscula y un numero');
        return false;
    }

    // Validar coincidencia de contraseñas
    if (password !== passwordrpt) {
        alertify.error('Las contraseñas no coinciden');
        return false;
    }





    //validar que el usuario acepte terminos y condiciones

    if (!checkboxterminos.checked) {
        alertify.error('Debes aceptar nuestros terminos y condiciones');
        return false;
    }

    // Registro exitoso
    alertify.success('Has sido registrado con exito');
    return true;
}


//Funcion que limpia todos los campos del formulario
function limpiarFormulario() {
    document.getElementById('formregister').reset();
}
