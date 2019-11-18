class Mision {
	constructor(){}

	esRealizablePor(unBarco) {
		return unBarco.tieneSuficienteTripulacion()
	}
}

class BusquedaDelTesoro extends Mision {
	constructor() {
		super();
  }

	esUtil(unPirata) {
		return tieneAlgunItemObligatorio(unPirata) && unPirata.cantidadMonedas() <= 5
	}

	tieneAlgunItemObligatorio(unPirata) {
		return ['brújula', 'mapa', 'grogXD'].some(item =>  unPirata.tiene(item))
	}

	esRealizablePor(unBarco) {
		return super.esRealizablePor(unBarco) && unBarco.tiene('llave de cofre')
	}

}

class ConvertirseEnLeyenda extends Mision {
  constructor(itemObligatorio) {
		super();
    this.itemObligatorio = itemObligatorio
  }
	esUtil(unPirata) {
		return unPirata.cantidadItems() >= 10 && unPirata.tiene(this.itemObligatorio)
	}

}

class Saqueo extends Mision {
  constructor(unaVictima) {
		super();
    this.unaVictima = unaVictima
  }

	esUtil(unPirata) {
		return unPirata.cantidadMonedas() < monedasParaSaquear.limite && victima.sosSaqueablePor(unPirata)
	}

	esRealizablePor(unBarco) {
		return super.esRealizablePor(unBarco) && victima.esVulnerableA(unBarco)
	}

}

var monedasParaSaquear = {
	"limite": 0
}
