import nombre from "./nombre.js"
import fecha from "./fecha.js"
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
        console.log(this.fecha.getFecha())
    }

    probarAños(){
        let fecha1 = new Fecha (7,12,2000)
        console.log(fecha1.getAños())
    }

}

let app = new Main();
app.probarNombre();
app.probarFecha();
app.probarAños();
