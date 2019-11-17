var barco = require('../Barco.js');
var ciudadCostera = require('../CiudadCostera.js');
var mision = require('../Mision.js');
var pirata = require('../Pirata.js');

var assert = require('chai').assert;

var ciudadChica = ciudadCostera.CiudadCostera(10);
var ciudadGrande = ciudadCostera.CiudadCostera(1000000000000);

var misionBusquedaDelTesoro = mision.BusquedaDelTesoro();
var misionConvertirseEnLeyendaConOro = mision.ConvertirseEnLeyenda('oro');
var misionSaqueoACiudadChica = mision.Saqueo(ciudadChica);
var misionSaqueoACiudadGrande = mision.Saqueo(ciudadGrande);

var pirataRicoBorracho = pirata.Pirata(['brújula', 'mapa', 'grogXD', 'oro', 'itemGenerico', 'itemGenerico', 'itemGenerico', 'itemGenerico', 'itemGenerico', 'itemGenerico', 'itemGenerico'], null, 1000, 10000);
var pirataPobreSobrio = pirata.Pirata(['mapa', 'llave del cofre'], pirataRicoBorracho, 0, 0);
var pirataEspia = pirata.PirataEspiaDeLaCorona(['mapa', 'llave del cofre', 'permiso de la corona'], pirataRicoBorracho, 0, 0);

var barcoGrande = barco.Barco(misionBusquedaDelTesoro, 1000, [pirataRicoBorracho, pirataPobreSobrio, pirataEspia]);

describe('Tests de tp', function() {
	it('pirataRicoBorracho tiene mapa', function() {
		assert.isTrue(pirataRicoBorracho.tiene('mapa'), 'lo tiene');
	})

	it('pirataRicoBorracho esta pasado de Grog', function() {
		assert.isTrue(pirataRicoBorracho.pasadoDeGrog(), 'está borracho');
	})

	it('pirataPobreSobrio no tiene dinero para tomar grog', function() {
		assert.throws(pirataPobreSobrio.tomarGrog(), 'no tiene suficiente dinero');
	})

	it('barcoGrande puede ser saqueado por pirataRicoBorracho', function() {
		assert.isTrue(barcoGrande.sosSaqueablePor(pirataRicoBorracho), 'lo puede saquear');
	})

	it('no todos en barcoGrande estan pasados de grog', function() {
		assert.isFalse(barcoGrande.todosPasadosDeGrog(), 'da falso');
	})

	it('al cambiar la mision de barcoGrande a misionConvertirseEnLeyendaConOro la unica tripulacion que queda es pirataRicoBorracho', function() {
		barcoGrande.cambiarMision(misionConvertirseEnLeyendaConOro);
		assert.equals(barcoGrande.tripulantes, [pirataRicoBorracho], 'queda pirataRicoBorracho solo');
	})
});
