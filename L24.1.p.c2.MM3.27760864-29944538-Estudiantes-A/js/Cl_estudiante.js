export default class Cl_estudiante {
    constructor(nombre, notasAcumuladas, cantidadMaterias, tipo){
        this.nombre = nombre;
        this.notasAcumuladas = notasAcumuladas;
        this.cantidadMaterias = cantidadMaterias;
        this.tipo = tipo;
    }

    promedio(){
        return this.notasAcumuladas / this.cantidadMaterias;
    }

}