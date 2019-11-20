//El use strict sirve para activar un modo particular de javascript , cambia el modo de tipado, habilita ciertas palabras reservadas y demas

"use strict";

function Pirata(items,invitante, nivelEbriedad,cantidadMonedas) {
	this.items = items,
	this.invitante = invitante,
	this.nivelEbriedad = nivelEbriedad,
	this.cantidadMonedas = cantidadMonedas
}

Pirata.prototype = {
	tiene: function(unItem) {
		return this.items.includes(unItem)
	},
	cantidadItems: function() {
		return this.items.length
	},
	pasadoDeGrog: function() {
		return this.nivelEbriedad >= 90
	},
	tomarGrog: function() {
		this.gastarMoneda()
		this.nivelEbriedad += 5
	},
	gastarMoneda: function() {
		this.validarGastarMonedas()
		this.cantidadMonedas--
	},
	validarGastarMonedas: function() {
		if (this.cantidadMonedas == 0) throw new Error('no tiene suficiente dinero')
	},
	podesSaquear: function(unaVictima) {
	return unaVictima.sosSaqueablePor(this)
	},
	cantidadInvitadosPara: function(unBarco) {
		return unBarco.cantidadInvitadosPor(this)
	},
	fuisteInvitadoPor: function(unTripulante) {
		return this.invitante === unTripulante
	}
}

//Esto es propio de ECMASSCRIPT6, pero es humo, en realidad sigue funcionando por los metodos de prototipado
class PirataEspiaDeLaCorona extends Pirata {
	pasadoDeGrog() {
		return false
	}
	podesSaquear(unaVictima) {
		return super.podesSaquear(unaVictima) && this.tiene('permiso de la corona')
	}
}

module.exports = {
	 Pirata:Pirata,
	 PirataEspiaDeLaCorona: PirataEspiaDeLaCorona
}
