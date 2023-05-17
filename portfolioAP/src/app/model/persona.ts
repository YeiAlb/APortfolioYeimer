export class Persona {
    id: number;
    nombre?: string;
    apellido?: string;
    ocupacion?: string;
    sobre_mi?: string;
    img_perfil?: string;
    correo: string;
    clave: string;

    //Se crea el constructor y se hace un SETEO de los atributos.
    constructor(id: number, nombre: string, apellido: string, ocupacion: string, sobre_mi: string, img_perfil: string, correo: string, clave: string) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.ocupacion = ocupacion;
        this.sobre_mi = sobre_mi;
        this.img_perfil = img_perfil;
        this.correo = correo;
        this.clave = clave;
    }
    //Luego de hacer el MODEL se crea el SERVICIO en la carpeta SERVICES.

}

