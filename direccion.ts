export class Direccion {
    private calle: string;
    private numero: number;
    private piso: number;
    private letra: string;
    private codigo: number;
    private poblacion: string;
    private provincia: string;

constructor (calle: string, numero: number, piso: number, letra: string, codigo: number, poblacion: string, provincia: string){
    this.calle = calle;
    this.numero = numero;
    this.piso = piso;
    this.letra = letra;
    this.codigo = codigo;
    this.poblacion = poblacion;
    this.provincia = provincia;
}
}