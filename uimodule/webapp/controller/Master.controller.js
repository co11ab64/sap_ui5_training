sap.ui.define([
    "com/smdev/myUI5App/controller/BaseController",
    "sap/base/Log"
], function (Controller, Log) {
    "use strict";

    return Controller.extend("com.smdev.myUI5App.controller.Master", {
        onInit: function () {
            Log.info("Master controller init");
            // var oModel = this.getOwnerComponent().getModel();
            // oModel.read('/Suppliers', {
            //     success: console.log,
            //     error: console.error
            // });
            // jQuery.ajax('/Suppliers').then(data=>console.log(data));
        },
        onListItemPress: function (oEvent) {
            var sPath = oEvent.getSource().getBindingContextPath(),
                sSupplierId = sPath.substr(sPath.lastIndexOf('/') + 1);
            this.getRouter().navTo("detail", {
                id: sSupplierId
            })
        }
    });
});
