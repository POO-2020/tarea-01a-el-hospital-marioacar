import Nombre from "./nombre.js"
import fecha from "./fecha.js"
import paciente from "./paciente.js"
import Doctor from "./doctor.js"
import cita from "./cita.js"
export default class Paciente {
    /**
     * 
     * @param {string} nombre 
     * @param {number} fechaNacimiento 
     * @param {number} celular 
     */
    constructor(nombre = new Nombre,fechaNacimiento  = new Fecha,celular){
        this.nombre = nombre
        this.fecha = fechaNacimiento
        this.celular = celular
    }

    getPerfil(){
        return `${this.nombre.getNombreCompleto()},${this.fechaNacimiento.getFecha()},${this.celular}`
    }
}