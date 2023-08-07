console.log("Bienvenido a la sesión JS01");

// 7 Datos primitivos:
// numbers, string, boolean, null, undefined, bigint, symbol

//Tipos de datos en Js:
//Primitivos y No-primitivos

//No primitvos:
//Objetos

//Tipo de dato string
const stringData = "Holi Crayoli";
console.log(stringData);

//tipos de dato number
//numeros positos, negativos, NaN, +Infinity, -Infinity
console.log( `Tipos de datos number: ${12},${-6},${0.456},${5*"hola"}, ${45/0}, ${-45/0}`)

console.log(`valor máximo: ${Number.MAX_VALUE}`) //valor máximo: 1.7976931348623157e+308
console.log(`Si el valor es mayor a el MAX_VALUE como valor máximo: 1.79e310 ${1.79e310}`)// Inifinity

console.log(`Valor (entero) máximo  seguro en JavaScript: ${ Number.MAX_SAFE_INTEGER }`) // 9007199254740991
//Cuando se realizan operaciones que exceden los limites de MAX_SAFE_INTEGER se produce una perdida de presición 

console.log(`MAX _SAFE_INTEGER + 1: ${Number.MAX_SAFE_INTEGER + 1}`)
console.log(`MAX _SAFE_INTEGER + 1: ${Number.MAX_SAFE_INTEGER + 2}`)
console.log(`MAX _SAFE_INTEGER + 1: ${Number.MAX_SAFE_INTEGER + 3}`)
console.log(`MAX _SAFE_INTEGER + 1: ${Number.MAX_SAFE_INTEGER + 4}`)


//tipos de datos bigint
//Sirven para representar valor numericos enteros, de lo que el tipo number no puede representar o no es seguro.
console.log("Operaciones con BigInt")
const myBigInt = 9007199254740991n
console.log(`MAX _SAFE_INTEGER + 1: ${myBigInt + 1n}`)
console.log(`MAX _SAFE_INTEGER + 1: ${myBigInt + 2n}`)
console.log(`MAX _SAFE_INTEGER + 1: ${myBigInt + 3n}`)
console.log(`MAX _SAFE_INTEGER + 1: ${myBigInt + 4n}`)


//tipo de dato boolean
//Se tienen 2 estados: true/false

console.log(`Tipo de dato verdadero: ${true}`);
console.log(`Tipo de dato falso: ${false}`);

//tipo de dato undefined
//una variable que es declarada pero el tipo de dato no es definido

let myVar;
console.log(`tipo de dato undefined: ${myVar}`);    

//tipo de dato null
//una variable que intensionalmente de borra el tipo de dato
let myVarNull;
console.log(`Tipo de datos myVarNull: ${typeof myVarNull} `)//undefined
myVarNull = "No me gusta YLE";
console.log(`Tipo de datos myVarNull: ${typeof myVarNull} `)//string
myVarNull=null;
console.log(`Tipo de datos myVarNull: ${typeof myVarNull} `)//object **es un error del lenguaje**
console.log(`myVarNull es null: ${ myVarNull === null}`);

//typo de dato symbol
//Representa un valor único que se puede utilizar como clave en objetos o identificador unico
const mySymbol =  Symbol();
const mySymbol2 =  Symbol();
const myKey = "codigo";
console.log(`mySymbol === mySymbol2 ${ mySymbol === mySymbol2}`);

const myObj = {
    clave : "valor",
    [mySymbol] :16, // se creará una clave privada, esta no se itera con un ciclo, no se almacena LocalStorage
    myKey :123,
    [myKey]:567,
}
console.log(myObj);

//-----------------------------------------------------------------------
const cancionesCh30 = ["Higway Star", "Trouble", "Saoko", "Rock Dj"]

//tipos de datos object
const misDatosDePerfil = {
    name: "Sergio",
    lastname: "Torres",
    age: 39,
    isBelicoso: false,
    fullName : function(){
        return `Nombre completo de Sergh: ${this.name} ${this.lastname}`},
        //return "Nombre completo de Sergh: " + this.name +" "+ this.lastname 
    fullNameToUpperCase : function(){
        return "Nombre completo de Sergh en mayuscula : "+ this.name.toUpperCase() +" "+ this.lastname.toUpperCase();
    }    
    

}
    console.log(misDatosDePerfil);
    console.table(misDatosDePerfil); 
    console.log(misDatosDePerfil.fullName());
    console.log(misDatosDePerfil.fullName); //ƒ (){ return `Nombre completo de Sergh: ${this.name} ${this.lastname}` //return "Nombre completo de Sergh: " + this.name +" "+ this.lastname }
    console.log(misDatosDePerfil.fullNameToUpperCase());

   //-------------------------------------
   //Conversion explicita de datos (coerción de tipo)
   const horaDescanso = 13;
   console.log("Hora descanso " + horaDescanso + "h.")//concatenación
   const horaDescansoTxt = String(horaDescanso);
   console.log("Hora descanso: " + horaDescansoTxt +" h.");//concatenación
   console.log("Hora de retorno: " + horaDescanso + 0.15);


const colorVerde = 0x008000;// Representación decimal: 32768
console.log(`El color RGB del color verde es ${colorVerde}`); //32768
console.log(`El color RGB del color verde es ${colorVerde.toString() }`);
console.log(`El color RGB del color verde es ${colorVerde.toString(16) }`);
console.log(`El color RGB del color verde es #${colorVerde.toString(16).padStart(6,0) }`);


//conversion a number
const myAgeTxt= "25";
const sumatoria = 10 + myAgeTxt;
console.log(`Valor de la sumatoria ${sumatoria}`);//1025

console.log(`Valor de la sumatoria usando Number() ${10 + Number(myAgeTxt)}`);//35
console.log(`Valor de la sumatoria usando parseInt() ${10 + parseInt(myAgeTxt)}`);//35
console.log(`Valor de la sumatoria usando parseFloat() ${10 + parseFloat(myAgeTxt)}`);//35
console.log(`Valor de la sumatoria usando operador unario (+) ${10 +(+myAgeTxt)}`);//35

