sap.ui.define([
    'sap/ui/model/json/JSONModel',
], function (JSONModel) {
    'use strict';
    return JSONModel.extend("com.smdev.myUI5App.model.AppModel", {
        saveEntry: function (oObject, sUrl, sLocalPath) {
            var that = this,
                sType, oData;
            oData = JSON.stringify(oObject);
            jQuery.ajax({
                type: 'PUT',
                contentType: "application/json",
                data: oData,
                url: sUrl,
                dataType: "json",
                success: function () {
                    that._updateModel(sLocalPath, oObject);
                    that.createEntry("/");
                    that.fireRequestCompleted();
                },
                error: function () {
                    that.fireRequestFailed();
                }
            })
        },
        _updateModel: function (sLocalPath, data) {
            this.setProperty(sLocalPath, data);
        }
    })
});