export interface User {
    id: number;
    name?: string;
    lastName?: string;
    email: string;
    mensaje?: string;
}

//Interface con los datos del Usuario y específicamos que algunos datos sean opcionales.