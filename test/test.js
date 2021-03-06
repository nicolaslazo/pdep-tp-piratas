var assert = require('chai').assert;

var CiudadCostera = require('../CiudadCostera.js');
var Pirata = require('../Pirata.js').Pirata;
var PirataEspiaDeLaCorona = require('../Pirata.js').PirataEspiaDeLaCorona;
var Barco = require('../Barco.js');
var Mision = require('../Mision.js');
var BusquedaDelTesoro = require('../Mision.js').BusquedaDelTesoro;
var ConvertirseEnLeyenda = require('../Mision.js').ConvertirseEnLeyenda;
var Saqueo = require('../Mision.js').Saqueo;

var ciudadChica = new CiudadCostera(10);
var ciudadGrande = new CiudadCostera(1000000000000);

var misionBusquedaDelTesoro = new BusquedaDelTesoro();
var misionConvertirseEnLeyendaConOro = new ConvertirseEnLeyenda('oro');
var misionSaqueoACiudadChica = new Saqueo(ciudadChica);
var misionSaqueoACiudadGrande = new Saqueo(ciudadGrande);

var pirataRicoBorracho = new Pirata(['brújula', 'mapa', 'grogXD', 'oro', 'itemGenerico', 'itemGenerico', 'itemGenerico', 'itemGenerico', 'itemGenerico', 'itemGenerico', 'itemGenerico'], null, 1000, 10000);
var pirataPobreSobrio = new Pirata(['mapa', 'llave del cofre'], pirataRicoBorracho, 0, 0);
var pirataEspia = new PirataEspiaDeLaCorona(['mapa', 'llave del cofre', 'permiso de la corona'], pirataRicoBorracho, 0, 0);

var barcoGrande = new Barco(misionBusquedaDelTesoro, 1000, [pirataRicoBorracho, pirataPobreSobrio, pirataEspia]);

describe('Tests de tp', function() {
	it('pirataRicoBorracho tiene mapa', function() {
		assert.isTrue(pirataRicoBorracho.tiene('mapa'), 'lo tiene');
	})

	it('pirataRicoBorracho esta pasado de Grog', function() {
		assert.isTrue(pirataRicoBorracho.pasadoDeGrog(), 'está borracho');
	})

	it('pirataPobreSobrio no esta pasado de Grog', function() {
		assert.isFalse(pirataPobreSobrio.pasadoDeGrog(), 'no está borracho');
	})

	it('pirataPobreSobrio no tiene dinero para tomar grog', function() {
		assert.throws(() => pirataPobreSobrio.tomarGrog(),Error, 'no tiene suficiente dinero');
	})

	//Ver porque teoricamente javascript hace que esto falle, temas de this y encapsulamiento
	// it('pirataPobreSobrio no tiene dinero para tomar grog', function() {
	// 	assert.throws(pirataPobreSobrio.tomarGrog,Error, 'no tiene suficiente dinero');
	// })

	it('barcoGrande puede ser saqueado por pirataRicoBorracho', function() {
		assert.isTrue(barcoGrande.sosSaqueablePor(pirataRicoBorracho), 'lo puede saquear');
	})

	it('no todos en barcoGrande estan pasados de grog', function() {
		assert.isFalse(barcoGrande.todosPasadosDeGrog(), 'da falso');
	})

	it('al cambiar la mision de barcoGrande a misionConvertirseEnLeyendaConOro la unica tripulacion que queda es pirataRicoBorracho', function() {
		barcoGrande.cambiarMision(misionConvertirseEnLeyendaConOro);
		assert.deepEqual(barcoGrande.tripulantes, [pirataRicoBorracho], 'queda pirataRicoBorracho solo');
	})

	it('pirataEspia fue invitado por pirataRicoBorracho', function() {
		assert.equal(pirataEspia.fuisteInvitadoPor(pirataRicoBorracho), true)
	})


});
