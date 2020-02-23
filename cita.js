import Nombre from "./nombre.js"
import fecha from "./fecha.js"
import paciente from "./paciente.js"
import Doctor from "./doctor.js"
export default class cita{
    /**
     * 
     * @param {number} fecha 
     * @param {number} hora 
     * @param {string} doctor 
     * @param {string} paciente 
     */
    constructor(fecha,hora,doctor,paciente,){
        this.fecha = fecha
        this.hora = hora
        this.doctor = doctor
        this.paciente = paciente
    }

    getCita(){
        return(`${this.fecha.getFecha()},${this.hora},${this.doctor.getPerfilD()},${this.paciente.getPerfil()}`)
    }
}