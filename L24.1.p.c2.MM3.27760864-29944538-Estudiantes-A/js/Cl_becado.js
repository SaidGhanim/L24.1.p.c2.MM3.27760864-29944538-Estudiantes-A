import Cl_estudiante from "./Cl_estudiante";

export default class Cl_becado extends Cl_estudiante {
    constructor(nombre, notasAcumuladas, cantidadMaterias ,tipo, beca){
        super(nombre, notasAcumuladas, cantidadMaterias,tipo);
        this.beca = beca;
    }

    RecibirBeca(){
        if(super.promedio() > 15){
            return 30;
        }
        else if(super.promedio() > 10 && super.promedio() < 15){
            return 20;
        }
        else{
            return 0;
        }
    }
}