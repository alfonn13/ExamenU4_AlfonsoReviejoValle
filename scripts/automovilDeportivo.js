//Importamos las clases necesarias para el funcionamiento de nuestro codigo
import { Vehiculo } from "./vehiculo.js";
import { mostrarResultado } from "./main.js";

export class AutomovilDeportivo extends Vehiculo {
    //Creacion de la propiedad privada
    #potenciaMotor;

    //Constructor instanciado de la clase vehiculo añadiendo la potenciaMotor
    constructor(marca,modelo,color,fabricacion,cilindrada,potenciaMotor){
        super(marca,modelo,color,fabricacion,cilindrada);
            this.#potenciaMotor = potenciaMotor;    
    }

    //Metodo activarModoDeportivo
    activarModoDeportivo(){
        const mensaje = `Se ha activado el modo Deportivo`
        mostrarResultado(mensaje);
    }

    //Metodo mostrarDatos() instanciado de la clase vehiculo añadiendo la potenciamotor
    mostrarDatos(){
        super.mostrarDatos();
    
        const datosDeportivo = `La potencia del motor es ${this.#potenciaMotor}`;
        mostrarResultado(`<p>${datosDeportivo}</p>`);
    }

    //Metodos get y set
    get potenciaMotor(){
        return this.#potenciaMotor;
    }

    set potenciaMotor(potenciaMotor){
        this.#potenciaMotor=potenciaMotor;
    } 
}

