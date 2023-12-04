//Importamos la clase que sea necesaria para que funcione bien nuestro programa
import { mostrarResultado } from "./main.js";

export class Vehiculo{
    //Creacion propiedades privadas
    #marca;
    #modelo;
    #color;
    #fabricacion;
    #cilindrada;

    //Constructor por parametros
    constructor(marca,modelo,color,fabricacion,cilindrada){
        this.#marca=marca;
        this.#modelo=modelo;
        this.#color=color;
        this.#fabricacion=fabricacion;
        this.#cilindrada=cilindrada;
    }

    //Metodo mostrarDatos()
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

    //Metodo acelerar pasandole la velocidad 
    acelerar(velocidad){
        const mensaje = `El vehiculo de la marca ${this.#marca} ha acelerado a una velocidad de ${velocidad}`
        mostrarResultado(mensaje);
    }

    //Metodo Arrancar
    arrancar(){
        const mensaje = `El vehiculo de la marca ${this.#marca} ha arrancado`
        mostrarResultado(mensaje);
    }

    //Metodo Frenar
    frenar(){
        const mensaje = `El vehiculo de la marca ${this.#marca} ha frenado`
        mostrarResultado(mensaje);
    }
 
    //Metodos get y set de todas las propiedades privadas
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