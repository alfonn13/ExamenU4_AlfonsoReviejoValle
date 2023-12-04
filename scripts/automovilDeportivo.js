/*
Nombre: Alfonso Reviejo Valle
GitHub: 
*/

import { Vehiculo } from "./vehiculo.js";
import { mostrarResultado } from "./main.js";

export class AutomovilDeportivo extends Vehiculo {
    #potenciaMotor;

    constructor(marca,modelo,color,fabricacion,cilindrada,potenciaMotor){
        super(marca,modelo,color,fabricacion,cilindrada);
            this.#potenciaMotor = potenciaMotor;    
    }

    activarModoDeportivo(){
        `Se ha actiado el Modo Deportivo`
    }

    mostrarDatos(){
        super.mostrarDatos();
    
        const datosDeportivo = `La potencia del motor es ${this.#potenciaMotor}`;
        mostrarResultado(`<p>${datosDeportivo}</p>`);
    }

    get potenciaMotor(){
        return this.#potenciaMotor;
    }

    set potenciaMotor(potenciaMotor){
        this.#potenciaMotor=potenciaMotor;
    } 
}

