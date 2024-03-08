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
            formatter: formatter,
            onInit: function () {

            },
            // when we click on the complete, it will be gone
            setToComplete: function (oEvent) {
                var oSource = oEvent.getSource(),
                    oContext = oSource.getBindingContext("mTodo"),
                    oModel = this.getView().getModel("mTodo");

                oModel.setProperty("status", "1", oContext);
        
            },
        });
    });
