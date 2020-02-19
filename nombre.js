 export default class nombre{
     /**
      * 
      * @param {string} Nombre 
      * @param {string} AP 
      * @param {string} AM 
      */
    constructor(Nombre,AP,AM){
        this.Nombre = Nombre
        this.AP = AP
        this.AM = AM

    }

    getNombreCompeto(){
        return `${this.Nombre}${this.AP}${this.AM}`
    }

    getApellidoNombre(){
        return `${this.AP}${this.AM}${this.Nombre}`
    }

    getIniciales(){
        return `${this.Nombre.chartArt(0)}${this.AP.chartArt(0)}${this.AM.chartArt(0)}`
    }

}

