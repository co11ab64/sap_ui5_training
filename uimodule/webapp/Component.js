sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/Device",
    "sap/ui/thirdparty/sinon",
    "com/smdev/myUI5App/model/models",
    "./model/AppModel",
    "sap/base/Log"
],
    function (UIComponent, Device, sinon, models, AppModel, Log) {
        "use strict";

        return UIComponent.extend("com.smdev.myUI5App.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");

                //Instantiate the app model and get the data
                var oAppModel = new AppModel();
                this.setModel(oAppModel);
                jQuery.ajax({
                    url: 'service/suppliers.json',
                    success: function (oData) {
                        initAppWithFakeRest(oData);
                        // oAppModel.loadData("/Suppliers");
                        oAppModel.setData(oData);
                        Log.info("Loaded data to AppModel")
                    },
                    error: function (oErr) {
                        sap.base.Log.error("Could not load server");
                    }
                });
            }
        });
    }
);
