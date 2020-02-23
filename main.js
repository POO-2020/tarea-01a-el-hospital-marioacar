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
        console.log(fecha.getFecha())
    }

    probarAños(){
        let fecha = new Fecha (7,12,2000)
        console.log(fecha.getAños())
    }
    
    probarMeses(){
        let meses = new Mes (12)
        console.log(meses.getMeses())
    }

    probarSemanas(){
        console.log(sem.getSemanas())
    }

}

let app = new Main();
app.probarNombre();
app.probarFecha();
app.probarAños();
app.probarMeses();
app.probarSemanas();
