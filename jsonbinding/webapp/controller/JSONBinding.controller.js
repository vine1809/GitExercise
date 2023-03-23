sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../model/formatter"],
    /**     * @param {typeof sap.ui.core.mvc.Controller} Controller     */
    function (Controller, JSONModel, formatter) {
        "use strict";

        return Controller.extend("sapips.training.jsonbinding.controller.JSONBinding", {

            formatter: formatter,

            onInit: function () {

                //Instantiate JSONModel                
                var oAddressModel = new JSONModel();

                //Define Data                
                var oAddress = {
                    "EID": "diavine.garcia",
                    "enabled": true,
                    "Address": {
                        "Street": "Sweeper",
                        "City": "New York",
                        "Zip": "Locker",
                        "Country": "USA"
                    },
                    "SalesAmount": 143,
                    "CurrencyCode": "USD"
                };

                //Set the Data to Model 
                oAddressModel.setData(oAddress);

                //Get the View                    
                var oView = this.getView();

                //Get i18n    
                var oi18n = this.getOwnerComponent().getModel("i18n");
                //Bind i18n to View
                oView.setModel(oi18n, "i18n");

                //var oProductsModel = this.getOwnerComponent().getModel("Products");
                //oProductsModel.setModel(oProductsModel,"Products")

                //Bind the Model to View  
                oView.setModel(oAddressModel,);
            },
            onSelectProduct: function(oEvent){

            //Get the Control (List)
            var oList = oEvent.getSource();

            //Get the selected item
            var oSelItem = oList.getSelectedItem();

            //Get the context binding path
            var sSelItemPath = oSelItem.getBindingContextPath();

            //Bind the selected item to the control (SimpleForm in Panel 4)
            this.getView().byId("idProductDetails").bindElement(
                { path: sSelItemPath,
                  model: "ProductsModel"
                })
            }
        });
    });