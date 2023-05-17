export class Projects {
    id?: number;
    imagen_proyecto: string;
    url_proyecto: string;
    titulo_proyecto: string;
    descripcion: string;

    //Se crea el constructor y se hace un SETEO de los atributos.
    constructor(imagen_proyecto: string, url_proyecto: string, titulo_proyecto: string, descripcion: string) {
        this.imagen_proyecto = imagen_proyecto;
        this.url_proyecto = url_proyecto;
        this.titulo_proyecto = titulo_proyecto;
        this.descripcion = descripcion;
        
    }
    //Luego de hacer el MODEL se crea el SERVICIO en la carpeta SERVICES.
}
