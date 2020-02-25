import Nombre from "./nombre.js"
import fecha from "./fecha.js"
import paciente from "./paciente.js"
import Doctor from "./doctor.js"
import cita from "./cita.js"
new class hospital{

    constructor(nombre,doctores,direccion,cita){
        nombre = nombre
        doctores = doctores
        direccion = direccion
        citas = cita
    }

    registrarDoctore(Doctores){
        this.Doctores.push(Doctores)
    }

    listarDoctores(){
        this.listarDoctores.forEch (Doctores => {
            console.log(`${i +1 }${Doctores.getPerfil()}`);
        });
    }
    
    registrarCita(Cita){
        this.Cita.push(Cita)
    }

    listarCitas(){
        this.listarCitas.forEch (Citas => {
            console.log(`${i +1 }${Citas.getPerfil()}`);
        });
    }

}