/*global QUnit*/

sap.ui.define([
	"sapipstraining/mockservice/controller/MockService.controller"
], function (Controller) {
	"use strict";

	QUnit.module("MockService Controller");

	QUnit.test("I should test the MockService controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
