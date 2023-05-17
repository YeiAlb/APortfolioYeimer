export class RedSocial {
    id?: number;
    icono: string;
    url_red_social: string;
    nombre_red_social: string;
    

    //Se crea el constructor y se hace un SETEO de los atributos.
    constructor(icono:string, url_red_social: string, nombre_red_social: string) {
        this.icono = icono;
        this.url_red_social = url_red_social;
        this.nombre_red_social = nombre_red_social;
    }
    //Luego de hacer el MODEL se crea el SERVICIO en la carpeta SERVICES.

}
