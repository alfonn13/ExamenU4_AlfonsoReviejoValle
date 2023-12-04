
const resultadoContainer = document.createElement('div');
document.body.appendChild(resultadoContainer);

// Funcion para mostrar datos
export function mostrarResultado(mensaje){
    resultadoContainer.innerHTML += `<p>${mensaje}</p>`;
}