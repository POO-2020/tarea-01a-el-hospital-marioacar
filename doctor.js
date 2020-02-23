import nombre from "./nombre.js"
export default class Doctor{
    /**
     * 
     * @param {string} nombre 
     * @param {string} especialidad 
     * @param {number} celular 
     * @param {string} celula 
     */
    constructor(nombre,especialidad,celular,celula){
        this.nombre = nombre
        this.especialidad = especialidad
        this.celular = celular
        this.celula = celula
    }

    getPerfil(){
        return (`${this.cedula},${this.especialidad},${this.nombre.getNombreCompleto()},${this.celular}`)
    }
}
