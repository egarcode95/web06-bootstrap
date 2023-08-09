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

const temperatura = 22;
let mensaje = "Temperatura ideal de: ";
if(temperatura===22){
    mensaje +=`${temperatura} grados centigrados`;
}
else {
    mensaje = `La ${temperatura} grados centigrados no es idea =(`;
 }

 console.log(mensaje);