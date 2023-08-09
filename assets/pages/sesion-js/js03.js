console.log("Sesión JS 03 Control de flujo");
console.log("No olvidaremos el reto a Ed");

//--------------- Declaración de bloque de código ----------------
/*
 Sintaxis:
         {

          }
 Las variables declaradas con let y const
 solo tendrán alcance(scope) dentro del bloque
 o bloques anidados.

 Si la variable en el bloque, tiene el mismo nombre
 que una variable fuera del bloque, se le da prioridad
 a la varible dentro del bloque.
*/
// let y const no se pueden redeclarar
// let firstname = "Lalo";
// const lastname = "García";
var age = "24";

let firstname = "Sergio";
const lastname = "Torres";
var age = "39";

{
  let firstname = "Mau";
  const lastname = "Peniche";
  var age = "26";
  const colorFavorito = "azul";
  var comidaFavorita = "pozole";

  console.log(`${firstname} ${lastname}`); // mau peniche
  console.log(age); // 26
  console.log(colorFavorito); // azul
  console.log(comidaFavorita); // pozole
  {
    const colorFavorito = "morado";
    console.log(colorFavorito); // morado
    console.log(firstname); // mau
    {
      console.log(colorFavorito); // morado
      console.log(firstname); // mau
    }
  }
}

console.log(`${firstname} ${lastname}`); // sergio torres
console.log(age); // 26
//console.log( colorFavorito ); // colorFavorito no está definido
console.log(comidaFavorita); // pozole


//-------------------condicional if-else---------------
/*
Ejecuta una sentencia si una condicion especifica es evaluada como verdadera.

sintaxis:
    if ( condicion ) sentencia;

    if ( condicion ) {
        sentencias;
    }

    if ( condicion ) sentencia;
    else sentencia_si_condicion_es_falsa;
    
    if ( condicion ){
         sentencias;
    }     
    else{
         sentencias;
    }

    if ( condicion1 ) sentencia;
    else if (condicion2) sentencia;
    else if (condicion3) sentenicia;
    else if(condicin3) sentencia;
    .....
    else if (condicionN)sentenciaN;
    else condicion;
*/

const temperatura = 24;
let mensaje = "Temperatura de: ";
if(temperatura===22){
    mensaje +=`${temperatura} grados centigrados`;
}
else if(temperatura >= 15 && temperatura <= 21){
    mensaje += `${temperatura} grados centigrados es fria`;
}
else if(temperatura>=23 && temperatura <= 30){
    mensaje += `${temperatura} grados centigrados es calurosa`;
}
else {
    mensaje = `La ${temperatura} grados centigrados no es idea =(`;
 }

 console.log(mensaje);

 //--------------- Condicional Switch --------------------------
/*
 La condicional Switch evalua una expresión y se compara
 con el valor de cada instancia en 'case' y se ejecuta las
 sentencias asociadas a ese 'case' hasta encontrar
 la sentencia 'break' o se finalicen todas las sentencias
 de la condicional switch.

 Sintaxis:
  switch (expresión) {
    case valor1:
        sentencia;
        break;
    case valor 2:
        sentencias;
        break;
    case valor n:
        sentencias;
        break
    default:
        sentencias;
        break;
  }
  */

  const setVelocidadVentilador = ( velocidad = 0 )=>{
    let mensaje;
    // la condicional switch utiliza la comparación estricta ( === )
    switch (parseInt( velocidad) ) {
        case 0:
            mensaje = "apagado";
            break;
        case 1:
            mensaje = "velocidad baja";
            break;
        case 2:
            mensaje = "velocidad media";
            break;
        default:
            mensaje = "el nivel no existe";        
            break;
    }
    return mensaje;
}
console.log(`La velocidad del ventilador está en ${setVelocidadVentilador(1)}`)
console.log(`La velocidad del ventilador está en ${setVelocidadVentilador(8)}`)
console.log(`La velocidad del ventilador está en ${setVelocidadVentilador("2")}`)