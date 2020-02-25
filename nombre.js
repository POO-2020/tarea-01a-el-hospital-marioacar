 export default class Nombre{
     /**
      * 
      * @param {string} Nombre 
      * @param {string} AP 
      * @param {string} AM 
      */
    constructor(nombre,AP,AM){
        this.nombre = nombre
        this.AP = AP
        this.AM = AM

    }

    getNombreCompleto(){
        return `${this.nombre} ${this.AP} ${this.AM}`
    }

    getApellidoNombre(){
        return `${this.AP} ${this.AM} ${this.nombre}`
    }

    getIniciales(){
        return `${this.nombre.charAt(0)}${this.AP.charAt(0)}${this.AM.charAt(0)}`
    }

}

