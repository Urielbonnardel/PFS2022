import * as readlineSync from "readline-sync";
let numeroIngresado: number = readlineSync.questionInt("Ingrese un numero entero:");
let resultado: number = numeroIngresado%2
while (numeroIngresado == 0) {
    numeroIngresado = readlineSync.questionInt("Ingrese un numero:");
    resultado = numeroIngresado%2
}
if (resultado == 0) {
    console.log("el numero ingresado es: Par ");
}
else {
    console.log("el numero ingresado es: Impar");
} 