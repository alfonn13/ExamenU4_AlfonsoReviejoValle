import { Vehiculo } from "./vehiculo.js";
import { mostrarResultado } from "./main.js";

export class AutomovilDeportivo {
    #potenciaMotor;

    constructor(marca,modelo,color,fabricacion,cilindrada,potenciaMotor){
        super(marca,modelo,color,fabricacion,cilindrada);
        this.#potenciaMotor = potenciaMotor;
    }

    activarModoDeportivo(){
        `Se ha actiado el Modo Deportivo`
    }

    get potenciaMotor(){
        return this.#potenciaMotor;
    }

    set potenciaMotor(potenciaMotor){
        this.#potenciaMotor=potenciaMotor;
    } 
}