sap.ui.define([
   "sap/m/library",
   "sap/ui/model/type/Currency"
],

function(mobileLibrary, Currency) {
    return{ 
       formatMail: function(sEid) {
            var oBundle = this.getView().getModel("i18n").getResourceBundle(); 
            return mobileLibrary.URLHelper.normalizeEmail(
                    sEid + oBundle.getText("domain"),
                    oBundle.getText("mailSubject", [sEid]), 
                    oBundle.getText("mailBody"));
       },
       formatStockValue: function(fUnitPrice, iStockLevel, sCurrCode) {
            var oCurrency = new Currency();
                return oCurrency.formatValue([fUnitPrice * iStockLevel, sCurrCode], "string"); 
            },
    }
});