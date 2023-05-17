export class Education {
    id?: number;
    logo_institucional: string;
    url_institucion: string;
    nombre_institucion: string;
    titulo_academico: string;
    fecha_inicio: string;
    fecha_fin: string;

    //Se crea el constructor y se hace un SETEO de los atributos.
    constructor(logo_institucional: string, url_institucion: string, nombre_institucion: string, titulo_academico: string, fecha_inicio: string, fecha_fin: string) {
        this.logo_institucional = logo_institucional;
        this.url_institucion = url_institucion;
        this.nombre_institucion = nombre_institucion;
        this.titulo_academico = titulo_academico;
        this.fecha_inicio = fecha_inicio;
        this.fecha_fin = fecha_fin;
    }
    //Luego de hacer el MODEL se crea el SERVICIO en la carpeta SERVICES.
}
