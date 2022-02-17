// PRIMERO EJERCICIO // //funciona

function par(x) {
    if (x % 2 === 0) {
        return "Par";
    } else {
        return "Impar";
    }
}
//probamos la función
respuesta = par(23);
console.log(respuesta);



// SEGUNDO EJERCICIO ////funciona

function mayor(a, b) {
    if (a >= b) {
        return a;
    }

    return b;

}
// probamos la funcion
respuesta = mayor(2, 4);
console.log(respuesta);



// TERCERO EJERCICIO ////funciona

function datos(x) {
    let result;
    let isPar = (x % 2 === 0) ? 'Es par' : 'Es impar';
    let isDiv3 = (x % 3 === 0) ? 'Es divisible entre 3' : 'No es divisible entre 3';
    let isDiv5 = (x % 5 === 0) ? 'Es divisible entre 5' : 'No es divisible entre 5';
    let isDiv7 = (x % 7 === 0) ? 'Es divisible entre 7' : 'No es divisible entre 7';
    result = {
        x,
        isPar,
        isDiv3,
        isDiv5, isDiv7
    }
    return result;
}
// probamos la funcion
respuesta = datos(5);
console.log(`${respuesta.x} ${respuesta.isPar}`);
console.log(`${respuesta.isDiv3}`);
console.log(`${respuesta.isDiv5}`);
console.log(`${respuesta.isDiv7}`);


// CUARTO EJERCICIO ////funciona

function sumaValores(arr) {


    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;

}
// probamos la funcion

let resultado = sumaValores([1, 3, 9, 2, 3]);
console.log(resultado);


// QUINTO EJERCICIO ////funciona

function factorial(x) {
    if (x == 0) {
        return 1;
    } else {
        return x * factorial(--x);
    }
}
// probamos la funcion
const fact = factorial(10);
console.log(fact);



// SEXTO EJERCICIO ////funciona

function primo(numero) {
    if (numero == 0 || numero == 1 || numero == 4) return numero + " NO ES PRIMO";
    for (let x = 2; x < numero / 2; x++) {
        if (numero % x == 0) return numero + " NO ES PRIMO";
    }
    // Si no se pudo dividir por ninguno de los de arriba, sí es primo
    return numero + " ES PRIMO";
}
// probamos la funcion

console.log(primo(13));



// SEPTIMO EJERCICIO ////funciona

function fibonacci(x) {
    var limit = x;
    var fibo = [0, 1];
    let fiboString;

    for (i = 2; i <= limit; i++) {
        fibo.push(fibo[i - 1] + fibo[i - 2]);
        fiboString = fibo.toString();

    }
    return fiboString;
}
// probamos la funcion
let resultFibo = fibonacci(8);
console.log(resultFibo);


// OCTAVO EJERCICIO ////NO funciona
function primoCifras(x) {

}


// NOVENO EJERCICIO ////funciona

function capitaliza(letter) {
    return letter.split(' ').map(prhase => prhase.split('').map((letter, index) => index === 0 ? letter.toUpperCase() : letter.toLowerCase()).join('')).join(' ').trim();

}

// probamos la funcion
console.log(capitaliza('barcelona PARIS'));


// DECIMO EJERCICIO ////funciona


function palabra(letra = '') {

    let letrasTotales = 0;
    let numVocales = 0;
    let numConsonantes = 0;
    let isPar;

    for (i = 0; i < letra.length; i++) {



        if (letra.charAt(i).toLocaleLowerCase() === 'a'
            || letra.charAt(i).toLocaleLowerCase() === 'e'
            || letra.charAt(i).toLocaleLowerCase() === 'i'
            || letra.charAt(i).toLocaleLowerCase() === 'o'
            || letra.charAt(i).toLocaleLowerCase() === 'u') {
            numVocales++;

        } else {
            numConsonantes++;
        }
        letrasTotales++;
    }
    isPar = letrasTotales % 2 === 0;

    console.log(`"${letra}" tiene ${letra.length} letras.`);
    console.log(`Vocales ${numVocales}`);
    console.log(`Consonantes ${numConsonantes}`);
    if (isPar) console.log('Es un número par');
    else console.log('Es un número impar');
}
// probamos la funcion //
palabra('Barcelona');



// ONCEAVO EJERCICIO ////funciona

function hoy() {
    let numberOfTheDay = new Date().getDay();
    let days = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
    let hoy = days[numberOfTheDay - 1];
    return (`Hoy es ${hoy}`);
}
let fecha = hoy();
console.log(fecha);


// DOCEAVO EJERCICIO //// funciona

function navidad() {
    let hoy = new Date();

    let anioNavidad = hoy.getFullYear();

    if (hoy.getMonth() == 11 &&
        hoy.getDate() > 25) {

        anioNavidad = anioNavidad + 1;
    }

    let diaNavidad =
        new Date(anioNavidad, 11, 25);

    let dayMilliseconds =
        1000 * 60 * 60 * 24;

    let calcularDia = Math.ceil(
        (diaNavidad.getTime() - hoy.getTime()) /
        (dayMilliseconds)
    );
    return ("Faltan " + calcularDia +
        " dias para navidad");
}
let fechaNavidad = navidad();
console.log(fechaNavidad);




// TRECEAVO EJERCICIO ////NO funciona

function analiza(array) {
    let sum = 0;
    let mayor = array[3];
    let menor = array[0];
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
        if (mayor > array[i]) {
            (" el numero mayor es " + mayor);
        }
        if (menor > array[0]) {
            (" el numero menor es " + menor);
        }

    }
    return ("la suma de los " + " numeros es " + sum + " El numero mayor es " + mayor + " El numero menor es " + menor);
}
let resultados = analiza([3,2,4,5,8,1]);
console.log(resultados);



// Ejercicio final////funciona


function prompExercise() {

    let number = Math.round(Math.random() * 100);
    console.log('number ', number);
    let response = Number(prompt("Dime un número"));
    let numeroDeVeces = 0;

    while (response != number) {
        response = Number(prompt("Dime un número"));
        console.log('response ', response);
        if (response === number) {
            console.log('Has acertado');
            numeroDeVeces++;
            console.log(`Has necesitado ${numeroDeVeces} veces`);
            break;
        }
        else if (response > number) {
            console.log('Demasiado alto');
            numeroDeVeces++;
        }
        else if (response < number) {
            console.log('Demasiado bajo');
            numeroDeVeces++;
        }
        else console.log('Caracter incorrecto');
    }



}
//prompExercise(); // Quitar las barras para que funcione la función final

