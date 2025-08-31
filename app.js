// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let amigos = []; // array vacio


let introducirAmigoHTML = document.getElementById('amigo'); //Llama el input en HTML
let btnAgregarAmigo = document.getElementById ('agregarAmigo'); // declara el boton

btnAgregarAmigo.addEventListener("click", agregarAmigo); // evento de click en el boton.
    
// agregar si se presiona enter en el input
introducirAmigoHTML.addEventListener("keydown",(e) => {
        if (e.key === "Enter") {
        e.preventDefault();
        agregarAmigo();
        }
    });  

function agregarAmigo () {
    //limita el numero de input a 5
    if (amigos.length >= 5) {
        alert("Ya has agregado el máximo de 5 amigos.");
        return;
    }
    
  let amigoDigitado = introducirAmigoHTML.value.trim(); // declara var para el valor entered. trim() quita espacios extra

    if (amigoDigitado === '' ) {
        alert('Por favor, ingrese un nombre.');
        return;
    }  
    amigos.push(amigoDigitado); //indica que se guarda en el array.Aqui es el valor introducido en el input.
    introducirAmigoHTML.value=''; //limpia el campo
    introducirAmigoHTML.focus();  // vuelve a enfocar el input
    listaAmigos();  // actualiza la lista <ul>
}


function listaAmigos (){
    let listaHTML = document.querySelector("#listaAmigos"); // seleccionar la <ul>
      listaHTML.innerHTML = "";

    for (let numeroDeAmigo = 0; numeroDeAmigo < amigos.length; numeroDeAmigo++) {
        let li = document.createElement("li"); // creamos un <li>
        li.textContent = amigos[numeroDeAmigo]; // asignamos el valor
        listaHTML.appendChild(li);  // lo agregamos a la lista. appendChild agrega un nodo hijo (otro elemento) dentro de un nodo padre existente.
      }
}

function sortearAmigo(){
     if (amigos.length > 0 ) {
        let sorteo = Math.floor(Math.random() * amigos.length);

         let amigoSecreto = amigos[sorteo];

        let resultadoHTML = document.querySelector('#resultado');
        resultadoHTML.innerHTML = `El amigo secreto es: ${amigos[sorteo]}`;
     } else  {
        alert ('Hay un error con la lista de amigos, por favor vuelva a introducir.');
     }

}