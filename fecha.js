export default class fecha {
    /**
     * 
     * @param {Number} Años 
     * @param {Number} fecha 
     * @param {Number} meses 
     */
    constructor(Años,fecha,meses){
        this.fecha=new Date(año,mes -1, dia);
        this.dias=["Domingo","Lunes","Martes","Miércoles","Jueves","Vierenes","Sábado"]
        this.meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
    }

    getFecha(){
        return(`${this.fecha.getDay()}/${this.fecha.getMonth()+1}/${this.fecha.getFullYear()}`)
    }

    getAños(){
        let años = Date.now()- this.fecha;
        let msegAño= 1000*60*60*24*365;
        let sd  = Math.trunc(años/msegAño)
        return(`${sd}`)
    }
    
    

}