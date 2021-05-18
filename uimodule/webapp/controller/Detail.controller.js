sap.ui.define(["com/smdev/myUI5App/controller/BaseController"], function (Controller) {
    "use strict";

    return Controller.extend("com.smdev.myUI5App.controller.Detail", {
        onInit: function () {
            this.getRouter().getRoute("detail").attachPatternMatched(this._onDetailMatched, this)
        },

        onEdit: function () {
            var sPath = this.getView().getElementBinding().getPath(),
                sSupplierId = sPath.substr(sPath.lastIndexOf('/') + 1);
            this.getRouter().navTo('edit', {
                id: sSupplierId
            }, false);
        },

        _onDetailMatched: function (oEvent) {
            var oArgs = oEvent.getParameter("arguments"),
                sSupplierId = oArgs.id,
                sPath = `/${sSupplierId}`;
            this._bindView(sPath);
        },
        _bindView: function (sPath) {
            this.getView().bindElement(sPath)
        }
    });
});
