import Nombre from "./nombre.js"
import fecha from "./fecha.js"
import paciente from "./paciente.js"
import Doctor from "./doctor.js"
class Main{
    constructor(){

    }

    probarNombre(){
        let Nombre = new Nombre ("Mario Axel","Carvantes","Gutierrez");
        console.log(this.Nombre.getNombreCompleto());
        console.log(this.Nombre.getApellidoNombre());
        console.log(this.Nombre.getIniciales());
    }

    probarFecha(){
        let fecha = new Fecha (20/2/2020)
        console.log(fecha.getFecha())
    }

    probarAños(){
        let Años = new Fecha (7,12,2000)
        console.log(Años.getAños())
    }
    
    probarMeses(){
        let meses = new Mes (12)
        console.log(meses.getMeses())
    }

    probarSemanas(){
        let sem = new Semanas (4)
        console.log(sem.getSemanas())
    }

    getDiaFecha(){
        let dias = new Fecha (20/2/2020)
        console.log(dias.getDiaFecha())
    }

    getDias(){
        let total = new Dias (2020)
        console.log(total.getDias())
    }
    
    probarPerfil(){
        let paciente = new Paciente ("Mario Axel Carvantes", new Fecha (1/2/2020), new telefono ("312-155-01-89"))
        console.log(paciente.getPerfil())
    }

    probarPerfilD(){
        let Doctor = new Doctor ("Arthur Pendragon", new Especialidad ("otorrinolaringologo"), new Celular ("312-144-10-90"), new Celula ("Aug50FN55SCAR57PKP90"))
        console.log(Doctor.getPerfil())
    }

}

let app = new Main();
app.probarNombre();
app.probarFecha();
app.probarAños();
app.probarMeses();
app.probarSemanas();
app.probarDiaFecha(); 
app.probarPerfil();
app,probarPerfilD();
