sap.ui.define([
    "sap/ui/model/SimpleType"
], function (
    SimpleType
) {
    "use strict";

    return {
        PhoneNumber: SimpleType.extend('com.smdev.PhoneNumber', {
            formatValue: function (oVal) { return oVal; },
            parseValue: function (oVal) { return oVal; },
            validateValue: function (oVal) {
                if (!/\+1([- ])?\d{3}-\d{3}-\d{4}/.test(oVal)) {
                    throw new sap.ui.model.ValidateException("Phone number must follow the pattern +1 123-123-123!")
                }
            }
        })
    }
});