import Nombre from "./nombre.js"
import Fecha from "./fecha.js"
import Paciente from "./paciente.js"
import Doctor from "./doctor.js"
import Cita from "./cita.js"
class Main{
    constructor(){

    }

    probarNombre(){
        let nombre = new Nombre ("Mario Axel", "Carvantes", "Gutierrez");
        console.log(nombre.getNombreCompleto());
        console.log(nombre.getApellidoNombre());
        console.log(nombre.getIniciales());
    }

    probarFecha(){
        let fecha = new Fecha (20,2,2020)
        console.log(fecha.getFecha())
    }

    probarAños(){
        let fecha = new Fecha (7,12,2000)
        console.log(fecha.getAños())
    }
    
    probarMeses(){
        let fecha = new Fecha(7,12,2000)
        console.log(fecha.getMeses())
    }

    probarSemanas(){
        let fecha = new Fecha (4)
        console.log(fecha.getSemanas())
    }

    ProbarDia(){
        let fecha = new Fecha (20,2,2020)
        console.log(fecha.getDia())
    }

    probarDiaFecha(){
        let fecha = new Fecha (2020)
        console.log(fecha.getDiaFecha())
    }
    
    probarPerfil(){
        let paciente = new Paciente ("Mario Axel Carvantes", new Fecha (1,2,2020), new telefono ("312-155-01-89"))
        console.log(paciente.getPerfil())
    }

    probarPerfilD(){
        let doctor = new Doctor ("Arthur Pendragon", new Especialidad ("otorrinolaringologo"), new Celular ("312-144-10-90"), new Celula ("Aug50FN55SCAR57PKP90"))
        console.log(doctor.getPerfilD())
    }

    probarCita(){
        let cita =  new Cita (new Fecha (20,5,2020, new Doctor ("DR.Pendragon"), new Paciente ("MR.Morgan"))) 
        console.log(cita.getCita())
    }

}

let app = new Main();
app.probarNombre();
app.probarFecha();
app.probarAños();
app.probarMeses();
app.probarSemanas();
app.probarDiaFecha(); 
app.probarDia();
app.probarPerfil();
app.probarPerfilD();
app.probarCita();

