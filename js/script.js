var psswrd = document.querySelector('#contraseña').value;
var confirmPsswrd = document.querySelector('#confirmar-contraseña').value;
var boton = document.querySelector('button')


function checkPsswrd() {
    if ( psswrd != confirmPsswrd) {
        confirmPsswrd.setCustomValidity('las contraseñas no coinciden');
        boton.disabled = true;
    } else {
        confirmPsswrd.setCustomValidity('');
        boton.disabled = false;
    }
}

psswrd.onchange = checkPsswrd();
confirmPsswrd.onkeyup = checkPsswrd();