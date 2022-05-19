import * as readlineSync from "readline-sync";
let solicitarClave : string = readlineSync.question("Ingrese la contraseña: ");
let clave : string = "eureka";
let contador : number = 1;
while ( clave != solicitarClave&& contador<=2) {
   console.log("Contraseña incorrecta");
  
   contador=contador +1;
   solicitarClave = readlineSync.question("Ingrese la contraseña:");
}
if (solicitarClave == clave) {
    console.log("Sesion iniciada");
}




