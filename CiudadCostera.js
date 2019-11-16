function CiudadCostera(cantidadHabitantes) {
	this.cantidadHabitantes = cantidadHabitantes
}

CiudadCostera.prototype.esVulnerableA = function(unBarco) {
    return unBarco.cantidadTripulantes() >= this.cantidadHabitantes * 0.4 || unBarco.todosPasadosDeGrog()
}
CiudadCostera.prototype.sosSaqueablePor = function(unPirata) {
    return unPirata.nivelEbriedad() >= 50
}
CiudadCostera.prototype.sumarHabitante = function(unosHabitantes) {
    this.cantidadHabitantes = this.cantidadHabitantes + unosHabitantes;
}
