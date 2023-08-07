console.log("Sesión JS02 Uso de funciones");

/*
  ----------- Funciones declaradas --------------
    (function declaration, function statement)
Una característica de las funciones declradas es que tien hoisting.

hoisting: comportamiento en JS que permite a las declaración de variables(var)
o funciones se eleven al comienzo de su ámbito antes de que se ejecute el código.

*/
console.log( multiplica(4, 3));

function multiplica(a, b){
    return a * b;
}

/*
---------------Funciones expresadas------------
                (function expressions)
Son funciones delcaradas dentro de la asignación de una variable.
estas funciones pueden ser anonimas(no tienen nombre).
Las funciones expresadas no tienen hoisting, porque no se carga en memoria hasta que se utilice.

sintaxis:

const nombreVariable = function nombreFuncion(parametros){
    instrucciones
}

*/

const sum = function sumatoria(a,b){
    return a + b;
}
console.log(`El resultado de 4 + 2 es : ${sum(4,2)}`);

let saludo; // undefined
const localidad = "buenos aires";

if ( localidad == "buenos aires"){
    saludo = function ( name ) { return `Holis ${name}`};
}
else {
    saludo = function ( name ) { return `Buenos días ${name} `};
}

console.log( saludo("Sergio");)
console.log( saludo("David");)