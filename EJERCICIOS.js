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


function palabra(letra = 'Hola') {
    
    let letrasTotales= 0;
    let numVocales=0;
    let numConsonantes=0;
    let isPar;
   
    for ( i = 0; i < letra.length; i++) {

      
        
        if ( letra.charAt(i).toLocaleLowerCase() === 'a' 
        || letra.charAt(i).toLocaleLowerCase() === 'e' 
        || letra.charAt(i).toLocaleLowerCase() === 'i' 
        || letra.charAt(i).toLocaleLowerCase() === 'o'
        || letra.charAt(i).toLocaleLowerCase() ==='u') {
            numVocales++;
            
        }else{
            numConsonantes++;
        }
        letrasTotales++;
    }
    isPar =  letrasTotales % 2 === 0;

    console.log(`"${letra}" tiene ${letra.length} letras.` );
    console.log(`Vocales ${numVocales}` );
    console.log(`Consonantes ${numConsonantes}` );
    if(isPar) console.log('Es un número par');
    else console.log('Es un número impar');
}
// probamos la funcion //
palabra('Barcelona');



// ONCEAVO EJERCICIO //

function hoy() {
    let numberOfTheDay = new Date().getDay();
    let days = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
    let hoy = days[numberOfTheDay-1];
console.log(`Hoy es ${hoy}`);
}

hoy();

// DOCEAVO EJERCICIO //

function navidad() {
    let numberOfTheDay = new Date().getDate();
    let dias;

console.log(`Faltan ${dias} para navidad`);
console.log(numberOfTheDay);


}

navidad();

// TRECEAVO EJERCICIO //

function analiza(array) {

  



}

function prompExercise(){
    
    let number = Math.round(Math.random()*100);
    console.log('number ',number);
    let response = Number(prompt("Dime un número"));
    let numeroDeVeces =0;

    while(response != number){
        response = Number(prompt("Dime un número"));
        console.log('response ',response);
        if(response === number) {
            console.log('Has acertado');
            numeroDeVeces++;
            console.log(`Has necesitado ${numeroDeVeces} veces`);
            break;
        }
        else if(response > number) {
            console.log('Demasiado alto');
             numeroDeVeces++;
        }
        else if(response < number) {
            console.log('Demasiado bajo');
             numeroDeVeces++;
        }
        else  console.log('Caracter incorrecto');
    }

    

}
prompExercise();

