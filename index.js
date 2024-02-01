let tiempoRestante;
let intervaloDeTiempo;

function comenzarCuentaRegresiva() {
    tiempoRestante = 30;
    intervaloDeTiempo = setInterval(ticTac, 1000);

    document.getElementById("textoCuenta").textContent = tiempoRestante;

    setTimeout(tiempoTerminado, 30000);
}

function ticTac() {
    tiempoRestante -= 1;
    document.getElementById("textoCuenta").textContent = tiempoRestante;

    if (tiempoRestante === 0) {
        tiempoTerminado();
    }
}

function tiempoTerminado() {
    clearInterval(intervaloDeTiempo);
    document.getElementById("audioGameOver").play();
    alert("GAME OVER!");
}

function finalizado() {
    clearInterval(intervaloDeTiempo);

    let fecha = new Date();
    alert("En el día de la fecha " + fecha + " se ha llenado con el siguiente formulario " + " Respuestas: " + document.getElementById("preguntaUno").value + "-" + document.getElementById("preguntaDos").value + "-" + document.getElementById("preguntaTres").value + "-" + document.getElementById("preguntaCuatro").value + "-" + document.getElementById("preguntaCinco").value);
}

function volverAIntentar() {
    location.reload();
}