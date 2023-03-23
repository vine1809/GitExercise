/*global QUnit*/

sap.ui.define([
	"sapipstraining/employeeapp/controller/CaseStudy.controller"
], function (Controller) {
	"use strict";

	QUnit.module("CaseStudy Controller");

	QUnit.test("I should test the CaseStudy controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
