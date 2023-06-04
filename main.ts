//Importación de las clases

import {Persona} from './persona';
import {Direccion} from './direccion';
import {Telefonos} from './telefono';
import {Mails} from './mails';


//Personas

const persona1 = new Persona("Marta", "Sánchez", 23, "123456789A", "12 de noviembre", "amarillo", "mujer", "Tiene 3 hijos");
const persona2 = new Persona("Eva", "Pérez", 31, "123456789B", "4 de abril", "rojo", "mujer", "Tiene mascota");
const persona3 = new Persona("Alberto", "Martínez", 18, "123456789C", "6 de semptiembre", "verde", "hombre", "Vive en pareja");

//Agregar direcciones

persona1.agregarDireccion(new Direccion("Calle Miguel de Cervantes", 4, 5, "B", 33333, "Dos Hermanas", "Sevilla"));
persona2.agregarDireccion(new Direccion("Calle José Espronceda", 8, 8, "C", 44444, "Mataró", "Barcelona"));
persona3.agregarDireccion(new Direccion("Rosalía de Castro", 2, 3, "A", 55555, "Torrevieja", "Alicante"));

//Agregar teléfonos

persona1.agregarTelefonos(new Telefonos("Fijo", 999999999));
persona2.agregarTelefonos(new Telefonos("Móvil", 666666666));
persona3.agregarTelefonos(new Telefonos("Móvil", 666666667));

//Agregar mails

persona1.agregarMails(new Mails("gmail", "martasanchez@gmail.com"));
persona2.agregarMails(new Mails("gmail", "evaperez@gmail.com"));
persona3.agregarMails(new Mails("outlook", "martinezalberto@outlook.com"));

//Modificación de registro a través de búsqueda por DNI
const modificar = persona1.buscarpordni("D123456789A");
if (modificar){
    modificar.agregarDireccion(new Direccion ("Calle Luis de Góngora", 1, 3, "H", 11111, "Coslada", "Madrid"));
    modificar.agregarTelefonos(new Telefonos ("Móvil", 666666665));
    modificar.agregarMails(new Mails ("yahoo", "marta_sanchez@yahoo.es"));
}

//Registros en la consola
console.log(persona1);
console.log(persona2);
console.log(persona3);
