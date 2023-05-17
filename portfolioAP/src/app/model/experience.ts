export class Experience {
    id?: number;
    logo_empresarial: string;
    url_empresa: string;
    nombre_empresa: string;
    cargo: string;
    fecha_inicio: string;    
    fecha_fin: string;
    
    //Se crea el constructor y se hace un SETEO de los atributos.
    constructor(logo_empresarial: string, url_empresa: string, nombre_empresa: string, cargo: string, fecha_inicio: string, fecha_fin: string) {
        this.logo_empresarial = logo_empresarial;
        this.url_empresa = url_empresa;
        this.nombre_empresa = nombre_empresa;
        this.cargo = cargo;
        this.fecha_inicio = fecha_inicio;
        this.fecha_fin = fecha_fin;
    }
}
