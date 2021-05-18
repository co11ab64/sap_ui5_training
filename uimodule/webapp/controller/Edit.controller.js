sap.ui.define([
    "com/smdev/myUI5App/controller/BaseController",
    "../model/types",
    "sap/m/MessageToast"
], function (BaseController,
    types,
    MessageToast) {
    "use strict";

    return BaseController.extend("com.smdev.myUI5App.controller.Edit", {

        types: types,
        onInit: function () {
            this.getRouter().getRoute('edit').attachPatternMatched(this._onPatternMatched, this);
        },

        onSave: function () {
            var that = this,
                sPath = this.getView().getElementBinding().getPath(),
                oModel = this.getModel(),
                oObject = oModel.getProperty(sPath),
                sLocalPath, sUrl = "";

            sUrl = `/Suppliers/${oObject.id}`;
            sLocalPath = sPath;
            oModel.attachEventOnce("requestCompleted", function () {
                that.getRouter().navTo("master");
            }, this);
            oModel.attachEventOnce('requestFailed', function () {
                MessageToast.show('Save failed');
            }, this);

            oModel.saveEntry(oObject,sUrl, sLocalPath);
        },

        _onPatternMatched: function (oEvent) {
            var args = oEvent.getParameter('arguments'),
                sPath = `/Suppliers/${args.id}`;
            this._bindView(sPath);
        },
        _bindView: function (sPath) {
            this.getView().bindElement(sPath);
        }
    });
});
