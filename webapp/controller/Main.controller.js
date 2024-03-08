sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "gcosui5todolist/utils/formatter"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, formatter) {
        "use strict";

        return Controller.extend("gcosui5todolist.controller.Main", {
            // add formatter
            formatter : formatter, 
            onInit: function () {

            }
        });
    });
