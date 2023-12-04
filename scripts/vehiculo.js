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
        El vehiculo es de la marca ${marca}
        El modelo del vehiculo es ${modelo}
        El color del vehiculo es ${color}
        La fabricacion del vehiculo es del ${fabricacion}
        La cilindrada del vehiculo es ${cilindrada}
        `;

        mostrarResultado(datos);
    }

    acelerar(velocidad){
        `El vehiculo de la marca ${this.#marca} ha acelerado a una velocidad de ${velocidad}`
    }

    arrancar(){
        `El vehiculo de la marca ${this.#marca} ha arrancado`
    }

    frenar(){
        `El vehiculo de la marca ${this.#marca} ha frenado`
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