import { Vehiculo } from "./vehiculo.js";
import { AutomovilDeportivo } from "./automovilDeportivo.js";

const resultadoContainer = document.createElement('div');
document.body.appendChild(resultadoContainer);

export function mostrarResultado(mensaje){
    resultadoContainer.innerHTML += `<p>${mensaje}</p>`;
}

const vehiculo1 = new Vehiculo('BMW','CLK','rojo',1992,'2400');
vehiculo1.mostrarDatos();
vehiculo1.acelerar(140);
vehiculo1.frenar();
vehiculo1.arrancar();


const vehiculoObject ={
    marca: 'BMW',
    modelo: 'CLK',
    color: 'rojo',
    fabricacion: 1992,
    cilindrada: '2400'
}


for(let key in vehiculoObject){
    if(vehiculoObject.hasOwnProperty(key)){
        localStorage.setItem(key, vehiculoObject[key])
    }
}

/*
localStorage.setItem('TodoTerreno2', JSON.stringify(vehiculoObejct));
console.log(JSON.parse(localStorage.getItem('vehiculoObject')));
*/
// Eliminar un elemento del LocalStorage
localStorage.removeItem('color')

// Eliminar todos los elementos de un LocalStorage
localStorage.clear() 