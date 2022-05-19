import * as readlineSync from "readline-sync";
let numeroIngresado : number = readlineSync.questionInt("Ingrese un numero :");
let resultado : number = numeroIngresado % 2;
if (numeroIngresado == 0) {
    console.log(" El numero ingresado es: 0");
}
else {
    if (resultado == 0){
        console.log("el numero ingresado es: Par ");
    }
    else {
        console.log("el numero ingresado es: Impar");
    } 
}
