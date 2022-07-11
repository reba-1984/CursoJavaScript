let numero1;
let numero2;
let texto;

numero1 = parseInt(prompt('Ingresa un numero: '));

if (numero1 > 1000) {
    alert('tu numero es mayor a 1000');
}

texto = prompt('Ingresa un texto: ');

if (texto == 'Hola') {
    console.log('tu texto es hola');
}

numero2 = parseInt(prompt('Ingresa un numero: '));
if (numero2 > 10 && numero2 < 50) {
    alert('tu numero es correcto')
}


