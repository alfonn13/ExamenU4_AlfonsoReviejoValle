import { mostrarResultado } from "./main.js";

export class Vehiculo{
    #marca;
    #modelo;
    #color;
    #fabricacion;
    #cilindrada;

    constructor(marca,modelo,color,fabricacion,cilindrada){
        this.#marca=marca;
        this.#modelo=modelo;
        this.#color=color;
        this.#fabricacion=fabricacion;
        this.#cilindrada=cilindrada;
    }

    mostrarDatos(){
        const datos = `
        <p>El vehiculo es de la marca ${this.#marca}</p>
        <p>El modelo del vehiculo es ${this.#modelo}</p>
        <p>El color del vehiculo es ${this.#color}</p>
        <p>La fabricacion del vehiculo es del ${this.#fabricacion}</p>
        <p>La cilindrada del vehiculo es ${this.#cilindrada}</p>
        `;

        mostrarResultado(datos);
    }

    acelerar(velocidad){
        const mensaje = `El vehiculo de la marca ${this.#marca} ha acelerado a una velocidad de ${velocidad}`
        mostrarResultado(mensaje);
    }

    
    arrancar(){
        const mensaje = `El vehiculo de la marca ${this.#marca} ha arrancado`
        mostrarResultado(mensaje);
    }

    frenar(){
        const mensaje = `El vehiculo de la marca ${this.#marca} ha frenado`
        mostrarResultado(mensaje);
    }
 

    get marca(){
        return this.#marca;
    }

    set marca(marca){
        this.#marca=marca;
    }

    get modelo(){
        return this.#modelo;
    }

    set modelo(modelo){
        this.#modelo=modelo;
    }

    get color(){
        return this.#color;
    }

    set color(color){
        this.#color=color;
    }

    get fabricacion(){
        return this.#fabricacion;
    }

    set fabricacion(fabricacion){
        this.#fabricacion=fabricacion;
    }

    get cilindrada(){
        return this.#cilindrada;
    }

    set cilindrada(cilindrada){
        this.#cilindrada=cilindrada;
    }
}