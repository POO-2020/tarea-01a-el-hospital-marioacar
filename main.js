import Nombre from "./nombre.js"
import Fecha from "./fecha.js"
import Paciente from "./paciente.js"
import Doctor from "./doctor.js"
import Cita from "./cita.js"
import Hospital from "./hospital.js"
import Tiempo from "./tiempo.js"
class Main{
    constructor(){
        this.doctor1 = new Doctor(new Nombre("Arthur","Pendragon",""), "otorrinolaringologo", "312-144-10-90", "Aug50FN55SCAR57PKP90")
        this.doctor2 = new Doctor(20141569, "otorrinolaringologo", new Nombre("Amiya" , "Perfue"), "01-800-99")
        this.paciente1 = new Paciente(new Nombre ("Elizabeth", "Bathory", "Carmila" ), new Fecha(20, 6, 2020), "174-155-08-95")
        this.hospital = new Hospital ("Hospital Paso al infierno", "AV. siempre viva")


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

    probarTiempo() {
        let hora = new Tiempo(7, 35, "AM")
        console.log(hora.getFormato12())
        console.log(hora.getFormato24())
    }

    
    probarPerfil(){
        let paciente = new Paciente (new Nombre("Mario Axel Carvantes"), new Fecha (2020,1,1), "312-155-01-89")
        console.log(paciente.getPerfil())
    }

    probarPerfilD(){
        let doctor = new Doctor (new Nombre("Arthur","Pendragon",""), "otorrinolaringologo", "312-144-10-90", "Aug50FN55SCAR57PKP90")
        console.log(doctor.getPerfilD())
    }

    probarCita(){
        let cita =  new Cita (new Fecha (20,5,2020), new Tiempo(15,25,'PM'), this.doctor1,this.paciente1); 
        console.log(cita.getCita());
    }

    probarHospital(){
        console.log(this.hospital.nombre)
        console.log(this.hospital.direccion)
        this.hospital.registrarDoctores(this.doctor1)
        this.hospital.registrarDoctores(this.doctor2)
        this.hospital.listarDoctores()
    }

}

let app = new Main();
app.probarNombre();
app.probarFecha();
app.probarAños();
app.probarMeses();
app.probarSemanas();
app.probarDiaFecha(); 
app.ProbarDia();
app.probarTiempo();
app.probarPerfil();
app.probarPerfilD();
app.probarCita();

