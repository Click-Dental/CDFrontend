export class Dentista{
    _id?: number;
    nombre: string;
    especialidad: string;


    constructor(
        nombre: string, 
        especialidad: string, 
        )
    {
        this.nombre = nombre;
        this.especialidad = especialidad;
    }
}