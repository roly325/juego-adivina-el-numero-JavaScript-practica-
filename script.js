//definimos el numero al azar
let numeroAzar = Math.floor(Math.random() * 100) + 1;
//numero del usuario
let numeroEntrada = document.getElementById("numeroEntrada");
//seleccionamos el parrafo del gtml para poder mostrar mensajes
let mensaje = document.getElementById("mensaje");
let intento = document.getElementById("intento");
let intentos= 0;

///accion que se realizara cuando el boton click sea precionado


function clic() {
    intentos ++
    intento.textContent="intentos : "+ intentos;
    let numeroIngresado = parseInt(numeroEntrada.value);

    

    if (numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)) {
        mensaje.textContent = "por favor ingrese un numero valido entre 1 y 100"
        mensaje.style.color="black"
        return;
    }

    if (numeroIngresado === numeroAzar){
        mensaje.textContent="Felicidades Ganaste"
        mensaje.style.color = "green";
       
        numeroEntrada.disabled = true; // esto lo quqe hace es si acierta que no puedaa ingresar otro valor

    }else if ( numeroIngresado>numeroAzar){
        mensaje.textContent = "ingrese un numero mas bajo"
        mensaje.style.color = "red";

    }else{
        mensaje.textContent ="ingrese un numero mas Alto"
        mensaje.style.color = "red";
    }
    ;

}