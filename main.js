// Función para generar un número aleatorio entre 1 y 10
function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 10) + 1;
}

// Función principal del juego
function iniciarJuego() {
    const numeroAleatorio = generarNumeroAleatorio();
    let intentos = 0;

    while (true) {
        const intento = parseInt(prompt("Intenta adivinar el número (entre 1 y 10):"));

        if (isNaN(intento)) {
            alert("Ingresa un número válido.");
        } else {
            intentos++;

            if (intento === numeroAleatorio) {
                alert(`¡Felicitaciones! Adivinaste el número en ${intentos} intentos.`);
                break; // Termina el juego
            } else if (intento < numeroAleatorio) {
                alert("El número es mayor. Sigue intentando.");
            } else {
                alert("El número es menor. Sigue intentando.");
            }
        }
    }
}