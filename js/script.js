//variables
var pestanaIniciarSesion = document.querySelector('.pestana-iniciar-sesion');
var pestanaCrearCuenta = document.querySelector('.pestana-crear-cuenta');
var formularioIniciarSesion = document.querySelector('#iniciar-sesion');
var formularioCrearCuenta = document.querySelector('#crear-cuenta')

console.log(pestanaIniciarSesion)
console.log(formularioIniciarSesion)
console.log(formularioCrearCuenta)

//event listeners
pestanaIniciarSesion.addEventListener('click', cambiarPestana)
pestanaCrearCuenta.addEventListener('click', cambiarPestana)


//funciones

function cambiarPestana()  {
    if (this === pestanaIniciarSesion && this.classList.contains('pestana-inactiva')){
        this.classList.remove('pestana-inactiva');
        pestanaCrearCuenta.classList.add('pestana-inactiva')
        formularioIniciarSesion.classList.remove('hidden');
        formularioCrearCuenta.classList.add('hidden');
    } else if (this === pestanaCrearCuenta && this.classList.contains('pestana-inactiva')) {
        this.classList.remove('pestana-inactiva');
        pestanaIniciarSesion.classList.add('pestana-inactiva')
        formularioCrearCuenta.classList.remove('hidden');
        formularioIniciarSesion.classList.add('hidden');
    } else {
        return;
    }
}