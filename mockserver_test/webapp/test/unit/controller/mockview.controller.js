/*global QUnit*/

sap.ui.define([
	"mockserver_test/controller/mockview.controller"
], function (Controller) {
	"use strict";

	QUnit.module("mockview Controller");

	QUnit.test("I should test the mockview controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
