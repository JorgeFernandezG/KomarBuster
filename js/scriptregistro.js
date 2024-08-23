function validarFormRegistro() {
    // Obtener todos los elementos del formulario al inicio para evitar múltiples accesos al DOM
    var nombrecompleto = document.getElementById('nombrecompleto').value.trim();
    var user = document.getElementById('user').value.trim();
    var correo = document.getElementById('correo').value.trim();
    var password = document.getElementById('password').value.trim();
    var passwordrpt = document.getElementById('passwordrpt').value.trim();
    var fechanac = document.getElementById('fechanac').value;
    var direccion = document.getElementById('direccion').value.trim();
    var regiones = document.getElementById('regiones').value;
    var comunas = document.getElementById('comunas').value;
    var checkboxterminos = document.getElementById('checkboxterminos');

    // Validar que los campos no estén vacíos
    if (!nombrecompleto) return alertify.error('Debes ingresar tu nombre completo'), false;
    if (!user) return alertify.error('Debes ingresar un nombre de usuario'), false;
    if (!correo) return alertify.error('Debes ingresar un correo'), false;
    if (!fechanac) return alertify.error('Debes ingresar tu fecha de nacimiento'), false;
    if (!password) return alertify.error('Debes ingresar una contraseña'), false;
    if (!passwordrpt) return alertify.error('Debes repetir la contraseña'), false;

    // Validar formato de email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo)) return alertify.error('Debes ingresar un correo válido'), false;

    // Validar mayoría de 13 años
    var fechanacObj = new Date(fechanac);
    var age = new Date().getFullYear() - fechanacObj.getFullYear();
    var monthDiff = new Date().getMonth() - fechanacObj.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && new Date().getDate() < fechanacObj.getDate())) age--;
    if (age < 13) return alertify.error('Debes tener al menos 13 años para registrarte'), false;

    // Validar longitud de contraseña
    if (password.length < 6 || password.length > 18) return alertify.error('La contraseña debe tener entre 6 a 18 caracteres'), false;

    // Validar requisitos de contraseña
    if (!/[A-Z]/.test(password) || !/\d/.test(password)) return alertify.error('La contraseña debe tener al menos una letra mayúscula y un número'), false;

    // Validar coincidencia de contraseñas
    if (password !== passwordrpt) return alertify.error('Las contraseñas no coinciden'), false;

    // Validar que el usuario acepte términos y condiciones
    if (!checkboxterminos.checked) return alertify.error('Debes aceptar nuestros términos y condiciones'), false;

    // Registro exitoso
    alertify.success('Has sido registrado con éxito');
    return true;
}

// Función que limpia todos los campos del formulario
function limpiarFormulario() {
    document.getElementById('formregister').reset();
}
