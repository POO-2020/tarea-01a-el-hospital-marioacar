class tiempo {
    constructor(hora,minuto, periodoAm, periodoPm){
        this.minuto = 60
        this.hora = 60*60*60
        this.periodoAm = am 
        this.periodoPm = pm
    }

    getformato12(){
        return `${this.hora}${this.minuto}${this.periodoAm} `
    }

    getformato24(){
        return `${this.hora}${thisminuto}${this.periodoPm}`
    }
}