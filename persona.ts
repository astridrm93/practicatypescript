import { Direccion } from "./direccion";
import { Mails } from "./mails";
import { Telefonos } from "./telefono";

export class Persona {
  
    private nombre: string;
    private apellidos: string;
    private edad: number;
    private dni: string;
    private cumple: string;
    private colorfavorito: string;
    private sexo: string;
    private direcciones: Direccion[];
    private mails: Mails[];
    private telefonos: Telefonos[];
    private notas: string;

    public static personas: Persona[] = [];

constructor (nombre: string, apellidos:string, edad:number, dni:string, cumple: string, colorfavorito:string, sexo:string, notas:string) {
    this.nombre=nombre;
    this.apellidos=apellidos;
    this.edad=edad;
    this.dni=dni;
    this.cumple=cumple;
    this.colorfavorito=colorfavorito;
    this.sexo=sexo;
    this.direcciones=[];
    this.mails=[];
    this.telefonos=[];
    this.notas=notas;

    Persona.personas.push(this);
}

public agregarDireccion(direccion: Direccion): void {
    this.direcciones.push(direccion);
}

public agregarTelefonos(telefonos: Telefonos): void {
    this.telefonos.push(telefonos);
}

public agregarMails(mails: Mails): void {
    this.mails.push(mails);
}

    public buscarpordni(dni: string): Persona | null {
        for( const persona of Persona.personas){
            if (persona.dni === dni) {
                return persona;
            }
        }
        return null;
       }
}