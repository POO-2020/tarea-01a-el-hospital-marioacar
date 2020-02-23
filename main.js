import Nombre from "./nombre.js"
import fecha from "./fecha.js"
class Main{
    constructor(){

    }

    probarNombre(){
        this.Nombre = new Nombre ("Mario Axel","Carvantes","Gutierrez");
        console.log(Nombre.getNombreCompleto());
        console.log(Nombre.getApellidoNombre());
        console.log(Nombre.getIniciales());
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

}

let app = new Main();
app.probarNombre();
app.probarFecha();
app.probarAños();
app.probarMeses();
app.probarSemanas();
app.probarDiaFecha(); 
