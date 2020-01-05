// Uso de const

export function card() {
    let card = document.querySelector('.card-title');
    // funcion de flecha
    var sumar = (num1, num2) => num1 + num2;
    card.innerHTML = sumar(15, 20)
        // Template String
    console.log("Sumar " + sumar(10, 20));
}