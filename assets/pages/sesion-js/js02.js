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


    /*
    -----------------Funciones callback-------------------
    Es una funcion(definida, expresada, arrow, anonima) qie se pasa a otra funcion como argumento
    se pasa el argumento como referencia(sin parentesis).

    */
   function saludoSquirtle(nombre){
    return "Vamo' a calmarnos " + nombre;
   }

    function saludoALosPokemones(){
        return "yo te elijo";
    }

    function eligiendoPokebola( saludo, nombre ){
        console.log("================================");
        console.log("Hola estás en la liga pokemon");
        console.log("Elige a tu mejor Pokemon");
        console.log(saludo(nombre));
    }

    //eligiendoPokebola();// saludo is not a function
    eligiendoPokebola(saludoALosPokemones);//
    eligiendoPokebola(saludoSquirtle,"Lalo");//
    eligiendoPokebola(function (){ return "Pika pika chuuuu"});//
    eligiendoPokebola(function (nombre){ return "Wiiiiiii soy "+ nombre } ,"cubone");//

    eligiendoPokebola(saludo =(nombre) =>  "Wiiiiiii soy " + nombre  ,"MewTwo");//


    /*
  Ejercicio 4
  Crear un programa que itere sobre dos arreglos;
  si hay cursos en común, imprimirlos en la consola.

student1Courses = ["Math", "English", "Programming", "Biology", "Physics", "Music"];
student2Courses = ["Geography", "Spanish", "Programming", "Music"];

  salida: "Cursos en común: Programming, Music"
*/
const student1Courses = ["Math", "English", "Programming", "Biology", "Physics", "Music"];
const student2Courses = ["Geography", "Spanish", "Programming", "Music"];

function cursosEnComun(student1Courses,student2Courses ){
    const commonCourses =[]//guarda los cursos en comun

    for (let i = 0; i < student1Courses.length; i++) {//["Math", "English", "Programming", "Biology", "Physics", "Music"];
        for (let j = 0; j < student2Courses.length; j++) {// ["Geography", "Spanish", "Programming", "Music"];
            console.log(` ${student1Courses[i]} === ${student2Courses[j]} : ${student1Courses[i] === student2Courses[j]}`)
           if (student1Courses[i]===student2Courses[j]) {
            commonCourses.push(student1Courses[i])
           } 
            
        }
        
    }
    return "cursos en comun: " + commonCourses;


}
console.log(cursosEnComun(student1Courses, student2Courses));


//----------Resolviendo con filter e include--------------//

function getCommonCoursesWithFilter(array1Courses, array2Courses){
    return student1Courses.filter(course => student2Courses.includes(course));
        }
console.log()

//--------------- Resolviendo con filter e include por partes ----------------------
console.log("###################################");
function includeCourse( course, index, array ){
    console.log(`Elemento ${course}, indice ${index}, include ${student2Courses.includes(course)}`);
    return student2Courses.includes(course); // evaluación // ["Geography", "Spanish", "Programming", "Music"]
}

function getCoursesWithFilter( array1Courses){
     const commonCourses = array1Courses.filter( includeCourse ); // ["Math", "English", "Programming", "Biology", "Physics", "Music"];
     return commonCourses;
}
console.log(`Comúnxpartes: ${getCoursesWithFilter( student1Courses, student2Courses )}`);


// -------------- Contar la cantidad de caracteres de una frase ---------------------
/*
   "peso pluma pica papas con un pico y una pala con un pico pica papas peso pluma";

   Mostrar la cantidad de letras 'p'.
   Usar funciones flecha.
    usar split y filter
*/

const phasePP = "Peso Pluma pica papas con un pico y una pala con un pico pica papas Peso Pluma";
const counterCharacter = ( phase, character ) => phase.split(character).length-1;

const counterCharacterUnsensitive = ( phase, character ) => phase.toLowerCase().split(character).length-1;
const contarLetrasP = (frase) => {
  const letrasP = frase.split('').filter(letra => letra === 'p' || letra === 'P');
  return letrasP.length;
};
console.log(`Cantidad de letras 'p' : ${ counterCharacter(phasePP, "p") } `); // 13
console.log(`Cantidad de letras 'p' : ${ counterCharacter(phasePP, "p") + counterCharacter(phasePP, "P") } `); // 13
console.log(`Cantidad de letras 'p' : ${ counterCharacterUnsensitive(phasePP, "p") } `); // 13
console.log(`Cantidad de letras 'p' (mau) : ${contarLetrasP(phasePP)}`);



// -------------- Recursividad ---------------------
/*
  Una función recursiva es una función que se llama así misma durante su ejecución.

  Se utilizan en algoritmos y soluciones que se basan en la división y conquista
  como cálculos matemáticos, recorrido de estructura de datos y algoritmos de búsqueda
  y ordenamiento.

  Patrón:
    function nombreFuncionRecursiva( parametro  ){
        if( condicionParo){
            return expresión;
        }
        else {
            // llamada recursiva
            nombreFuncion( nuevoParametro );
        }
    }
*/

//...............Calculo del factorial de un numero usando ciclo for.................

function factorialWithFor(numero){
    let factorial = 1;
    for (let i = numero ; i > 0 ; i--){//i=i-1
        console.log(`factorial: ${factorial} * ${i} = ${factorial*i}`)
        factorial *=i ; 
       }

 return factorial;
       
    }


console.log(`El factorial de 5 es: ${factorialWithFor(5)}`)

//...............Calculo del factorial de un numero usanddo recursividad.................
function factorialConRecursividad( numero ){
    if (numero === 1) {
        return 1;        
    } else {
        console.log(`${numero} * ${numero-1}`);
        return numero*factorialConRecursividad(numero-1);        
    }
}
console.log(`El factorial recursivo de 5 es: ${factorialConRecursividad(5)}`)


//-------------Saludar con recursividad-------------------
/*
Generar una funcion que muestre en consola un soludo donde se indeique el numerero de saludo deseado.

ej: saludar 10 veces

saludo 1
saludo 2
saludo 3
...
saludo 10
*/

function saludar(numeroSaludo){
    if (numeroSaludo == 10) {
        return 11;        
    } else {
        console.log(`Saludo ${numeroSaludo} `);
        return (saludar(numeroSaludo- 1));        
    }

}
saludar(10);