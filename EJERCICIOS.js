
// PRIMERO EJERCICIO //

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



// SEGUNDO EJERCICIO //

function mayor(a, b) {
    if (a >= b) {
        return a;
    }

    return b;

}
// probamos la funcion
respuesta = mayor(2, 4);
console.log(respuesta);



// TERCERO EJERCICIO //

function datos(x) {
    if (x % 2 === 0) {
        console.log(x + " Es PAR");
    } else {
        console.log(x + " NO ES PAR");
    } if (x % 3 === 0) {
        console.log(x + " ES DIVISIBLE ENTRE 3");
    } else {
        console.log(x + " NO ES DIVISIBLE ENTRE 3");
    } if (x % 5 === 0) {
        console.log(x + " ES DIVISIBLE ENTRE 5");
    } else {
        console.log(x + " NO ES DIVISIBLE ENTRE 5");
    } if (x % 7 === 0) {
        console.log(x + " ES DIVISIBLE ENTRE 7");
    } else {
        console.log(x + " NO ES DIVISIBLE ENTRE 7");
    }

}
// probamos la funcion
datos(5);



// CUARTO EJERCICIO //

function SumaValores() {

    const arr = [1, 3, 9, 2, 3];
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    console.log(sum);
}
// probamos la funcion
SumaValores();



// QUINTO EJERCICIO //

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



// SEXTO EJERCICIO //

function primo(numero) {
    if (numero == 0 || numero == 1 || numero == 4) return numero + " NO ES PRIMO";
    for (let x = 2; x < numero / 2; x++) {
        if (numero % x == 0) return numero + " NO ES PRIMO";
    }
    // Si no se pudo dividir por ninguno de los de arriba, sí es primo
    return numero + " ES PRIMO";
}
// probamos la funcion
const prim = primo(13);
console.log(prim);



// SEPTIMO EJERCICIO //

function fibonacci(x) {
    var limit = 10;
    var fibo = [0, 1];

    for (i = 2; i <= limit; i++) {
        fibo.push(fibo[i - 1] + fibo[i - 2]);
        console.log(fibo[i]);

    }
}
// probamos la funcion
fibonacci(5);



// OCTAVO EJERCICIO //

function primoCifras(x) {



}



// NOVENO EJERCICIO //

function capitaliza(letter) {
    return letter.split(' ').map(prhase => prhase.split('').map((letter, index) => index === 0 ? letter.toUpperCase() : letter.toLowerCase()).join('')).join(' ').trim();

}

// probamos la funcion
console.log(capitaliza('barcelona lsU'));


// DECIMO EJERCICIO //


function palabra(x) {
    const vowels = ["a", "e", "i", "o", "u"]
    let count = 0;
    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }for (i = 0; i < palabra.length(); i++); {
        if (palabra.charAt(i) != "") {
            numeroLetra++;
        }
    }
}
// probamos la funcion //
console.log(palabra);



// ONCEAVO EJERCICIO //

function hoy() {





}



// DOCEAVO EJERCICIO //

function navidad() {





}



// TRECEAVO EJERCICIO //

function analiza(array) {





}

