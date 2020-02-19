import nombre from "./nombre.js"
class Main{
    constructor(){

        probarNombre(){
            let Nombre =  new Nombre ("Mario Axel", "Carvantes", "Gutierrez")
            console.log(this.Nombre.getNombreCompleto())
            console.log(this.Nombre.getApellidoNombre())
            console.log(this.Nombre.getIniciales())
        }
    }

}

let app = new Main
app.probarNombre()