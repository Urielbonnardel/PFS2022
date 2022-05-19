import * as readlineSync from "readline-sync";
let numero_1 :number = readlineSync.questionInt ("ingrese el primer numero:  ");
let numero_2 :number = readlineSync.questionInt ("Ingrese el segundo numero: ");
let numero_3 :number = readlineSync.questionInt ("Ingrese el tercer numero : ");
if (numero_1>numero_2 && numero_1>numero_3){
    console.log("El numero mayor es:",numero_1);
} 
else if (numero_2>numero_1&& numero_2>numero_3) {
    console.log("el numero mayor es: ", numero_2);
}
else {
    console.log("El numero mayor es el :",numero_3);
}