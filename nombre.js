 export default class nombre{
     /**
      * 
      * @param {string} Nombre 
      * @param {string} AP 
      * @param {string} AM 
      */
    constructor(Nombre,AP,AM){
        this.nombre = Nombre
        this.AP = AP
        this.AM = AM

    }

    getNombreCompeto(){
        return (`${this.nombre}${this.AP}${this.AM}`)
    }

    getApellidoNombre(){
        return (`${this.AP}${this.AM}${this.Nombre}`)
    }

    getIniciales(){
        return (`${this.nombre.chartArt(0)}${this.AP.chartArt(0)}${this.AM.chartArt(0)}`)
    }

}

