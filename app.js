//variables
let nombres;
//Crear un array para almacenar nombres
let listaDeNombres = [];

function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function actualizarBotonSortear() {
    let botonSortear = document.getElementById('buttonSortear');
    botonSortear.disabled = listaDeNombres.length === 0;
    
}
//implementar una funcion para agregar amigos
//implementar una funcion para actualizar la lista de amigos

function mostrarContenido () {
    let instrucciones = document.getElementById('Instrucciones');
        instrucciones.style.display='none';
    let contenido = document.getElementById('Seccion_Oculta');
        contenido.classList.add('visible');
        document.getElementById('bienvenidoAlJuego').textContent = ''
    }


function agregarAmigo() {
    nombres = document.getElementById('amigo').value;
    if (nombres === ''){
        alert('Por favor, inserte un nombre');
    } else {
        if (listaDeNombres.includes(nombres)) {
            alert('El nombre ya ha sido agregado anteriormente');
        } else {
        listaDeNombres.push(nombres);
        document.getElementById('amigo').value = '';
        let ul = document.getElementById('listDeAmigos');
        let li = document.createElement('li');
        li.textContent = nombres;
        ul.appendChild(li);
        actualizarBotonSortear();
    }
        //console.log(nombres);
    //console.log(`los nombres registrados son: ${listaDeNombres}`);
}
}
//implementar una funcion para sortear amigos
function sortearAmigo() {
    let amigoSorteado = listaDeNombres[Math.floor(Math.random()*listaDeNombres.length)];
    asignarTextoElemento('ul', `El amigo secreto es ${amigoSorteado}`);
    document.getElementById('amigosAgregadosTexto').textContent = 'Felicidades!';
    listaDeNombres = [];
    actualizarBotonSortear();
    document.getElementById('buttonIniciarNuevo').disabled = false; 
}

function valorPredeterminado(){
    asignarTextoElemento('ul', '');
    document.getElementById('buttonIniciarNuevo').disabled = true;
    document.getElementById('amigosAgregadosTexto').textContent = 'Los amigos agregados son:';
}