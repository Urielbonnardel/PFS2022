import * as readlineSync from "readline-sync";
let numeroIngresado : number = readlineSync.questionInt("Ingrese un numero:");
let hastaQueNumero : number = readlineSync.questionInt("ingrese hasta que numero:");
let contador : number;
let resultado: number;
for(contador=1;contador<=hastaQueNumero;contador++ ){
    resultado=numeroIngresado*contador
    console.log(numeroIngresado,"x",contador,"=",resultado);
}