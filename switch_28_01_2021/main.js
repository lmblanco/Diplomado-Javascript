// let key = prompt("Ingrese un número");
// switch (key) {
//     case 1:
//         console.log(`Opcion uno`);
//         break;

//     case 2:
//         console.log(`Opcion dos`);
//         break;

//     default:
//         console.log(`Opcion incorrecta`);
//         break;
// }

// Primera forma de declaracion funciones
// let saludar_consola = function (p1) {
//     return function(){
//         return {valor: p1};
//     }
// }

// let saludar = saludar_consola("hola")

// console.warn(saludar);

// Segunda forma de declaracion funciones
// let llamar = { LOG: function(){ return "hola usuario"}}

// console.log(llamar.LOG());

// Funcion Flecha
let saludar_consola = (p1) =>{
    return ()=>{
        return {id: ()=>{return `Hola ${p1}`}};
    }
}

let saludar = saludar_consola("Miguel Blanco");

console.log(saludar().id());










