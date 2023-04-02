export interface LoginRequest {
    email: string,
    password: string
}
//Este CONTRATO se debe cumplir, todas las clases que se implementen, y va a dar un error de email nulo y simplemente le pedimos que lo tome como si fuera un LoginRequest.