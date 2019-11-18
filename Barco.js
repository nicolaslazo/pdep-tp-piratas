
//Constructor instanciable representativo de la clase Barco
function Barco(mision,capacidad, tripulantes) {
	this.capacidad = capacidad,
	this.mision = mision,
	this.tripulantes = tripulantes
}

//Todos los mensajes que va a entender el prototipo del Barco

Barco.prototype.sosSaqueablePor = function(unPirata) {
	return unPirata.pasadoDeGrog;
}

Barco.prototype.esVulnerableA = function(otroBarco) {
	return this.cantidadTripulantes() <= otroBarco.cantidadTripulantes() / 2
}

Barco.prototype.sosSaqueablePor = function(unPirata) {
	return unPirata.pasadoDeGrog;
}

Barco.prototype.esVulnerableA = function(otroBarco) {
	return this.cantidadTripulantes() <= otroBarco.cantidadTripulantes() / 2
}
Barco.prototype.cantidadTripulantes = function() {
	return this.tripulantes.length;
}

Barco.prototype.todosPasadosDeGrog = function() {
	return this.tripulantes.every(pirata => pirata.pasadoDeGrog());
}

Barco.prototype.puedeUnirse = function(unPirata) {
	return this.hayLugar() && mision.esUtil(unPirata)
}

Barco.prototype.hayLugar = function() {
	return this.cantidadTripulantes() < capacidad
}

Barco.prototype.agregar = function(unTripulante) {
	if (this.puedeUnirse(unTripulante)) {
		tripulantes.push(unTripulante)
	}
}

Barco.prototype.cambiarMision = function(unaMision) {
	this.tripulantes = tripulantes.filter(tripulante => unaMision.esUtil(tripulante))
	this.mision = unaMision
}

Barco.prototype.pirataMasEbrio = function() {
	return tripulantes.sort(tripulante => tripulante.nivelEbriedad).reverse()[0]
}

Barco.prototype.anclarEn = function(unaCiudad) {
	this.todosTomanGrog()
	this.perderMasEbrioEn(unaCiudad)
}

Barco.prototype.todosTomanGrog = function() {
	this.tripulantes.forEach(tripulante => tripulante.tomarGrog())
}

Barco.prototype.perderMasEbrioEn = function(unaCiudad) {
	this.tripulantes.pop(this.pirataMasEbrio)
	unaCiudad.sumarHabitante()
}

Barco.prototype.esTemible = function() {
	this.mision.esRealizablePor(this)
}

Barco.prototype.tieneSuficienteTripulacion = function() {
	return this.cantidadTripulantes() >= capacidad * 0.9
}

Barco.prototype.tiene = function(unItem) {
	return this.tripulantes.some(tripulante => tripulante.tiene(unItem))
}

Barco.prototype.cantidadTripulantesPasadosDeGrog = function() {
	return this.tripulantesPasadosDeGrog().length
}

Barco.prototype.cantidadItemsDistintosEntreTripulantesPasadosDeGrog = function() {
	return this.tripulantesPasadosDeGrog().flatMap(tripulante => tripulante.items.asSet().size())
}

Barco.prototype.tripulantesPasadosDeGrog = function() {
	return this.tripulantes.filter(tripulante => tripulante.pasadoDeGrog())
}

Barco.prototype.tripulantePasadoDeGrogConMasMonedas = function() {
	return tripulantesPasadosDeGrog().sort(tripulante => tripulante.cantidadMonedas()).reverse()[0]
}

Barco.prototype.tripulanteMasInvitador = function() {
	return this.tripulantes.sort(tripulante => tripulante.cantidadInvitadosPara(this)).reverse()[0]
}

Barco.prototype.cantidadInvitadosPor = function(unTripulante) {
	return this.tripulantes.filter(tripulante => tripulante.fuisteInvitadoPor(unTripulante)).length
}
