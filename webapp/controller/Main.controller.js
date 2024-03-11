sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "gcosui5todolist/utils/formatter",
    "sap/ui/core/Fragment"

],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, formatter, Fragment) {
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
            // if createDialog is not present, create a fragment
            createTodo: function() {
                if(!this.createDialog){
                    this.createDialog = Fragment.load({
                        type:"XML",
                        name:"gcosui5todolist.fragment.create"
                    }).then(function(oDialog) {

                        this.getView().addDependent(oDialog);
                        return oDialog;
                    }.bind(this))

                }
                this.createDialog.then(function(oDialog) {
                    oDialog.open();
                    

                })
            }
        });
    });
