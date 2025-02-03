 //variables
 let nombres;
 //Crear un array para almacenar nombres
 let listaDeNombres = [];

 function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
 }
//implementar una funcion para agregar amigos
//implementar una funcion para actualizar la lista de amigos

function agregarAmigo() {
    nombres = document.getElementById('amigo').value;
    if (nombres === ''){
        alert('Por favor, inserte un nombre');
    } else {
        if (listaDeNombres.includes(nombres)) {
            alert('El nombre ya ha sido agregado anteriormente');
           }
           else {
        listaDeNombres.push(nombres);
        document.getElementById('amigo').value = '';
        asignarTextoElemento('ul',`${listaDeNombres}`);
    }
        //console.log(nombres);
    //console.log(`los nombres registrados son: ${listaDeNombres}`);
}
}
 //implementar una funcion para sortear amigos

function sortearAmigo() {
    let amigoSorteado = listaDeNombres[Math.floor(Math.random()*listaDeNombres.length)];

    //console.log(`El amigo ganador es ${amigoSorteado}`);
    asignarTextoElemento('ul', `El amigo secreto es ${amigoSorteado}`);
}
 /* Falta crear funcion para que no se repita el mismo nombre. 
    Ver si se puede mejorar el diseño de la lista de amigos
    Generar diseño para alertas
*/