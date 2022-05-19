import * as readlineSync from "readline-sync";
let primeraVuelta: number = readlineSync.questionInt("ingrese el tiempo de la primera vuelta ");
let segundaVuelta: number = readlineSync.questionInt("ingrese el tiempo de la segunda vuelta ");
let terceraVuelta: number = readlineSync.questionInt("ingrese el tiempo de la tercera vuelta ");
let cuartaVuelta: number = readlineSync.questionInt("ingrese el tiempo de la cuarta   vuelta ");
let tiempoTotal: number = primeraVuelta+segundaVuelta+terceraVuelta+cuartaVuelta;
let tiempoPromedio: number =tiempoTotal/4;
console.log("El tiempo promedio por vuelta es ",tiempoPromedio,"minutos");
console.log("El tiempo total es",tiempoTotal,"minutos");        