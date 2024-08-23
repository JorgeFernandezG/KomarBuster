document.getElementById('formregister').addEventListener('submit', function(event) {
    event.preventDefault();

    // Limpia las clases de validación
    let form = event.target;
    let inputs = form.querySelectorAll('input');
    inputs.forEach(input => input.classList.remove('is-invalid'));

    // Variables del formulario
    let nombreCompleto = document.getElementById('nombrecompleto').value.trim();
    let user = document.getElementById('user').value.trim();
    let correo = document.getElementById('correo').value.trim();
    let fechanac = document.getElementById('fechanac').value.trim();
    let password = document.getElementById('password').value.trim();
    let confirmarPassword = document.getElementById('confirmarpassword').value.trim();
    let checkboxTerminos = document.getElementById('checkboxterminos');

    let isValid = true;

    // Validación de nombre completo (No vacío)
    if (nombreCompleto === '') {
        document.getElementById('nombrecompleto').classList.add('is-invalid');
        document.getElementById('nombreError').textContent = 'Debes ingresar tu nombre completo';
        isValid = false;
    }

    // Validación de nombre de usuario (No vacío)
    if (user === '') {
        document.getElementById('user').classList.add('is-invalid');
        document.getElementById('userError').textContent = 'Debes ingresar un nombre de usuario';
        isValid = false;
    }

    // Validación de correo electrónico
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(correo)) {
        document.getElementById('correo').classList.add('is-invalid');
        document.getElementById('correoError').textContent = 'Debes ingresar un correo válido';
        isValid = false;
    }

    // Validación de fecha de nacimiento (Mayor de 13 años)
    if (fechanac) {
        let fechanacObj = new Date(fechanac);
        let age = new Date().getFullYear() - fechanacObj.getFullYear();
        let monthDiff = new Date().getMonth() - fechanacObj.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && new Date().getDate() < fechanacObj.getDate())) age--;
        if (age < 13) {
            document.getElementById('fechanac').classList.add('is-invalid');
            document.getElementById('fechanacError').textContent = 'Debes tener al menos 13 años para registrarte';
            isValid = false;
        }
    } else {
        document.getElementById('fechanac').classList.add('is-invalid');
        document.getElementById('fechanacError').textContent = 'Debes ingresar tu fecha de nacimiento';
        isValid = false;
    }

    // Validación de contraseña (6-18 caracteres, al menos un número y una mayúscula)
    let passwordPattern = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,18}$/;
    if (!passwordPattern.test(password)) {
        document.getElementById('password').classList.add('is-invalid');
        document.getElementById('passwordError').textContent = 'La contraseña debe tener entre 6 a 18 caracteres, al menos una letra mayúscula y un número';
        isValid = false;
    }

    // Validación de confirmación de contraseña (Debe coincidir con la contraseña)
    if (password !== confirmarPassword) {
        document.getElementById('confirmarpassword').classList.add('is-invalid');
        document.getElementById('confirmarpasswordError').textContent = 'Las contraseñas no coinciden';
        isValid = false;
    }

    // Validación de términos y condiciones (Debe estar marcado)
    if (!checkboxTerminos.checked) {
        document.getElementById('checkboxterminos').classList.add('is-invalid');
        document.getElementById('checkboxterminosError').textContent = 'Debes aceptar nuestros términos y condiciones';
        isValid = false;
    }

    // Si todas las validaciones pasan, enviar el formulario (simulado aquí con un alert)
    if (isValid) {
        alert('Registro exitoso');
        form.reset(); // Limpia el formulario después del envío exitoso
    }
});
