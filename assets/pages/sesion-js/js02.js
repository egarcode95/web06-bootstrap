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

console.log( saludo("Sergio"));
console.log( saludo("David"));

/*
--------Funciones invocadas-----------------
        self-invoking functions
funciones que se autoinvocan, se pueden definir con funciones anonimas.

sintaxis:
(funcion (parametros) {})(argumentos);

*/
(function(name){
    console.log(`Me llamo ${name} y me autoinvoco`);
}) ( "ChatGPT" );

/*
--------Funciones Flecha-----------------
        (arrow function)
Funciones similares a las funciones expresadas pero:
-No requiere la palabra reservada function
-Si tiene una sola instruccion no requiere llaves {}
- Si la instruccion es el mismo retorno, no requiere la palabra return

sintaxis:

    const nombreVariable = (parametros) => instruccion;

    const nombreVariable = (parametros) => {
        instruccion;
        return expresion;
    }

*/   /*  const areaRectangulo = function (base, altura){
    return (base*altura);
} */

const areaRectangulo = (base,altura) => base*altura;

console.log(`El area es: ${areaRectangulo(3,9)}m^2. `);


/*
Parametro por defecto--------------
        (Default parameter)
inicializa un parametro de la funcion


funcion flecha que realice el area de untriangulo
*/


/**
 * Calcula el area de un triángulo
 * @param {*} base del triangulo
 * @param {*} altura del triangulo
 * @returns {number} base*altura/2
 */
const areaTriangulo = (base,altura) => base*altura/2;

console.log(`El area es: ${areaTriangulo(10,5)}m^2.`);
const number=1000;
console.log((1000).toString()); //Conversion base 10
console.log((1000).toString(2));//conversion base
console.log((1000).toString(16));


/*
--------------parametros reset------------
            (rest parameters)
Permite representar una serie de valores indefinidos en los argumentos 
esta serie de valores se presentan como un array.
Rest parameters debe estar al final de la lista de parametros.
    
sintaxis:
    ...nombreParametros


*/

   // const sumatoriaMultiplesNumeros = (a,b) => a + b;
   
const sumatoriaMultiplesNumeros = (a, b, ...rest) => {
        let suma =a + b;
        for (let i = 0; rest, i < rest.length; i++ ){
            suma = suma + rest[i];
        }        
        return suma;
    }

    console.log(`Sumatoria de multiples numeros:  ${sumatoriaMultiplesNumeros(2,5)}`);//7
    console.log(`Sumatoria de multiples numeros:  ${sumatoriaMultiplesNumeros(2,5,10,9)}`);//7
    console.log(`Sumatoria de multiples numeros:  ${sumatoriaMultiplesNumeros(2,5,10,9, 20, 10)}`);//7
    console.log(`Sumatoria de multiples numeros:  ${sumatoriaMultiplesNumeros(2)}`);//7


    