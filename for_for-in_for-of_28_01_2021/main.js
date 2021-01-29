//console.time("for()");

//let lista = ["miguel","adrian","jhon","diego"];
// for (let i = 0; i <= lista.length; i++) {
//     console.log(lista[i]);   
// }
//console.timeEnd("for()");

// Traer el dato de la lista
// for(let dato of lista){
//     console.log(dato);   
// }

// Posiciones de la lista
// for(let dato in lista){
//     console.log(dato);   
// }

// Otra forma de mostrarlo.
// for (let i = 0; i <= lista.length; i++) {
//     console.log(`la posicion de la lista es ${i} y su valor es ${lista[i]}`);   
// }

let lista = ["miguel", "andrea", "diana", "adrian", "diego", "julian"];
let edad = [23,16,37,50,37,27];
let info = [];

for (let i = 0; i < lista.length; i++) {
    info[i] = {name : lista[i], edad : edad[i]};
}
console.log(info);

