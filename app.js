// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Funcionalidades
// Agregar nombre: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista
//  visible al hacer clic en "Adicionar".

// Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.

// Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.

// Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la
//  lista y se mostrará en la página.

// Desarrollo de las funcionalidades
// Arreglo para almacenar los nombres de los amigos ingresados.
let amigos = [];
function agregarAmigo() {
    // Captura del dato de entrada
    let nombre = document.getElementById('amigo').value;
    // Validación de entrada
    if (validarEntrada(nombre)) {
        // Actualización del arreglo de amigos
        amigos.push(nombre);
        // Limpiar el campo de entrada
        document.getElementById('amigo').value = '';
        // Mostrar la lista de amigos
        actualizarLista();
    }
}

// Función para sortear los amigos
function sortearAmigo() {
    // Validar que haya al menos un amigo en la lista
    if (amigos.length === 0) {
        alert("Por favor, ingrese al menos un amigo.");
        return;
    }
    // Generar un índice aleatorio
    let numeroAleatorio = Math.floor(Math.random() * amigos.length);
    // Obtener el nombre sorteado
    let amigoSorteado = amigos[numeroAleatorio];
    // Mostrar el nombre sorteado
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `El amigo secreto sorteado es: ${amigoSorteado}`;
}

// Función para validar la entrada
function validarEntrada(nombre) {
    if (nombre === '') { // === es un operador de comparación estrict, compara el valor y el tipo de dato
        alert("Por favor, inserte un nombre.");
        return false;
    }
    return true;
}

// Función para actualizar la lista de amigos
function actualizarLista() {
    // Obtener el elemento de la lista
    let lista = document.getElementById('listaAmigos');
    // Limpiar la lista existente
    lista.innerHTML = "";
    // Iteración sobre el arreglo de amigos
    for (let i = 0; i < amigos.length; i++) {
        // Para cada amigo, crear un elemento de lista <li>
        let item = document.createElement('li');
        // Agregar el nombre del amigo al elemento de lista
        item.innerHTML = amigos[i];
        // Agregar el elemento <li> a la lista
        lista.appendChild(item);
    }
}