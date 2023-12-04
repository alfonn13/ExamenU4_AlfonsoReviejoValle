import { Vehiculo } from "./vehiculo.js";
import { AutomovilDeportivo } from "./automovilDeportivo.js";

const resultadoContainer = document.createElement('div');
document.body.appendChild(resultadoContainer);

export function mostrarResultado(mensaje){
    resultadoContainer.innerHTML += `<p>${mensaje}</p>`;
}

const vehiculo1 = new Vehiculo('BMW','CLK','rojo',1992,'2400');
mostrarResultado("Vehiculo 1");
vehiculo1.mostrarDatos();
vehiculo1.acelerar(140);
vehiculo1.frenar();
vehiculo1.arrancar();


const vehiculoObject = {
    marca: 'BMW',
    modelo: 'CLK',
    color: 'rojo',
    fabricacion: 1992,
    cilindrada: '2400'
}


/* Esta en otra forma de meterlo en el LocalStorage
for(let key in vehiculoObject){
    if(vehiculoObject.hasOwnProperty(key)){
        localStorage.setItem(key, vehiculoObject[key])
    }
}
*/
localStorage.setItem('vehiculoObject', JSON.stringify(vehiculoObject));
console.log(JSON.parse(localStorage.getItem('vehiculoObject')));

const deportivo1 = new AutomovilDeportivo('Ferrari','Spider','amarillo',2020,'4000','500');
mostrarResultado("Coche Deportivo 1");
deportivo1.mostrarDatos();
deportivo1.acelerar(140);
deportivo1.frenar();
deportivo1.arrancar();

const deportivoObject = {
    marca: 'Ferrari',
    modelo: 'Spider',
    color: 'amarillo',
    fabricacion: 2020,
    cilindrada: '4000',
    potenciaMotor: '500'
}

for(let key in deportivoObject){
    if(deportivoObject.hasOwnProperty(key)){
        localStorage.setItem(key, deportivoObject[key])
    }
}

localStorage.removeItem('color');
localStorage.removeItem('fabricacion');

localStorage.clear();
