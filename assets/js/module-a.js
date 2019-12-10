// Usu de const
const btn = document.querySelector('#btn');
btn.addEventListener('click', function() {
    // uso de let
    let card = document.querySelector('.card-title');
    // funcion de flecha
    var sumar = (num1, num2) => num1 + num2;
    card.innerHTML = sumar(10, 20)
        // Template String
    console.log("Sumar " + sumar(10, 20));
});