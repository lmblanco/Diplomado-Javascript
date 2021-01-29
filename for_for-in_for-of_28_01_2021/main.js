console.time("for()");

let lista = ["miguel","adrian","jhon","diego"];
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
for (let i = 0; i <= lista.length; i++) {
    console.log(`la posicion de la lista es ${i} y su valor es ${lista[i]}`);   
}


