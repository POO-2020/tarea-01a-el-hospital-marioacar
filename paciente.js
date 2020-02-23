import fecha from "./fecha.js"
export default class Paciente {
    /**
     * 
     * @param {string} nombre 
     * @param {number} fechaNacimiento 
     * @param {number} celular 
     */
    constructor(nombre,fechaNacimiento,celular){
        this.nombre = nombre
        this.fechaNacimiento = fechaNacimiento
        this.celular = celular
    }

    getPerfil(){
        return (`${this.nombre.getNombreCompleto()},${this.fechaNacimiento},${this.celular}`)
    }
}