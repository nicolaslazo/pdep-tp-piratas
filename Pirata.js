"use strict";

function Pirata(items,invitante, nivelEbriedad,cantidadMonedas) {
	this.items = items,
	this.invitante = invitante,
  this.nivelEbriedad = nivelEbriedad,
  this.cantidadMonedas = cantidadMonedas
}

Pirata.prototype = {
  tiene: function(unItem) {
    return this.items.contains(unItem)
  },
  cantidadItems: function() {
    return this.items.length
  },
  pasadoDeGrog: function() {
      	return this.nivelEbriedad >= 90
  },
  tomarGrog: function() {
      this.nivelEbriedad += 5
      this.gastarMoneda()
  },
  gastarMoneda: function() {
      this.validarGastarMonedas()
      this.cantidadMonedas--
  },
  podesSaquear: function(unaVictima) {
      	return unaVictima.sosSaqueablePor(this)
  },
  cantidadInvitadosPara: function(unBarco) {
      	return unBarco.cantidadInvitadosPor(this)
  },
  fuisteInvitadoPor: function(unTripulante) {
      	return invitante.equals(unTripulante)
  }
}

class PirataEspiaDeLaCorona extends Pirata {
	pasadoDeGrog() {
		return false;
	}
	podesSaquear(unaVictima) {
		return super.podesSaquear()(unaVictima) && this.tiene('permiso de la corona')
	}
}


	// method validarGastarMonedas() {
	// 	if (cantidadMonedas == 0) {
	// 		throw new TripulanteException(message = 'Cantidad de monedas insuficientes... insert coin!')
	// 	}
	// }
