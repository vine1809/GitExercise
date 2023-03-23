sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("sapips.training.mockservice.controller.MockService", {
            onInit: function () {

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
                },

                onCreate: function(){

                    var oDataMdl = this.getOwnerComponent().getModel("ProductsModel");

                    var oData = 
                    { ProductID: 999,
                      ProductName: "myProduct" }

                    oDataMdl.create("/Products", oData, {})
                    }
                });
    });
