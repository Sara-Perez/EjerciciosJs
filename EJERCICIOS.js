function par(x) {
    if (x % 2 === 0) {
        return "par";
    } else {
        return "impar";
    }
}
//probamos la función
respuesta = par(23);
console.log(respuesta);


function mayor(a, b) {
    if (a >= b) {
        return (a);
    } else {
        return (b);
    }
}
// probamos la funcion
respuesta = mayor(2, 4);
console.log(respuesta);


function datos(x) {
    if (x % 2 === 0) {
        console.log(x + "Es PAR");
    } else {
        console.log(x + "NO ES PAR");
    } if (x % 3 === 0) {
        console.log(x + "ES DIVISIBLE ENTRE 3");
    } else {
        console.log(x + "NO ES DIVISIBLE ENTRE 3");
    } if (x % 5 === 0) {
        console.log(x + "ES DIVISIBLE ENTRE 5");
    } else {
        console.log(x + "NO ES DIVISIBLE ENTRE 5");
    } if (x % 7 === 0) {
        console.log(x + "ES DIVISIBLE ENTRE 7");
    } else {
        console.log(x + "NO ES DIVISIBLE ENTRE 7");
    }

}
// probamos la funcion
datos(5);



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



function factorial(x) {
    

}