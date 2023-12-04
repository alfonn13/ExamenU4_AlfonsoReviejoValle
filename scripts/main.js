//Importamos las clase necesarias
import { Vehiculo } from "./vehiculo.js";
import { AutomovilDeportivo } from "./automovilDeportivo.js";

//Creamos un div con su clase correspondiente para despues añadir el css
const resultadoContainer = document.createElement('div');
document.body.appendChild(resultadoContainer);
resultadoContainer.className= "resultadocontainer";

//Funcion para mostrar los resultados
export function mostrarResultado(mensaje){
    resultadoContainer.innerHTML += `<p>${mensaje}</p>`;
}

//Creacion del vehiculo1 
const vehiculo1 = new Vehiculo('BMW','CLK','rojo',1992,'2400');
mostrarResultado("Vehiculo 1");
vehiculo1.mostrarDatos();
vehiculo1.acelerar(140);
vehiculo1.frenar();
vehiculo1.arrancar();

//Creacion del vehiculo objeto
const vehiculoObject = {
    marca: 'BMW',
    modelo: 'CLK',
    color: 'rojo',
    fabricacion: 1992,
    cilindrada: '2400'
}


//Meter datos al localStorage y sacarlos por consola como un JSON
localStorage.setItem('vehiculoObject', JSON.stringify(vehiculoObject));
console.log(JSON.parse(localStorage.getItem('vehiculoObject')));

//Creacion del deportivo1
const deportivo1 = new AutomovilDeportivo('Ferrari','Spider','amarillo',2020,'4000','500');
mostrarResultado("Coche Deportivo 1");
deportivo1.mostrarDatos();
deportivo1.acelerar(140);
deportivo1.frenar();
deportivo1.arrancar();

//Creacion del deportivo objeto
const deportivoObject = {
    marca: 'Ferrari',
    modelo: 'Spider',
    color: 'amarillo',
    fabricacion: 2020,
    cilindrada: '4000',
    potenciaMotor: '500'
}

//Metemos al localstorgae uno a uno los atributos de nuestro objeto
for(let key in deportivoObject){
    if(deportivoObject.hasOwnProperty(key)){
        localStorage.setItem(key, deportivoObject[key])
    }
}

//Borrar dos atributos introducidos en el localstorage
localStorage.removeItem('color');
localStorage.removeItem('fabricacion');

//Limpiar localstorage
localStorage.clear();
