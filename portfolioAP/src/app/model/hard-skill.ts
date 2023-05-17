export class HardSkill {
    id?: number;
    nombre: string;
    porcentaje: number;
    

    //Se crea el constructor y se hace un SETEO de los atributos.
    constructor(nombre:string, porcentaje: number) {
        this.nombre = nombre;
        this.porcentaje = porcentaje;
    }
    //Luego de hacer el MODEL se crea el SERVICIO en la carpeta SERVICES.

}
