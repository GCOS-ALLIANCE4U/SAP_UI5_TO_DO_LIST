sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "gcosui5todolist/utils/formatter",
    "sap/ui/core/Fragment",
    "sap/ui/model/json/JSONModel"


],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, formatter, Fragment, JSONModel) {
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

                // after we created a fragment, we now create an empty data to fill input field
                // then import JSON model, then create a JSON model instance
                var oData = {
                    title:"",
                    description: "",
                    targetDate: new Date("07/01/2024"),
                    status: 0

                }

                // create a fragment
                if(!this.createDialog){
                    this.createDialog = Fragment.load({
                        type:"XML",
                        name:"gcosui5todolist.fragment.create",
                              // then pass the controller
                         controller: this     
                    }).then(function(oDialog) {
                    // create a JSON model instance for the fragment, it will create a new item
                    // then pass the controller
                    oDialog.setModel(new JSONModel(oData), "mCreate");

                        this.getView().addDependent(oDialog);
                        return oDialog;
                    }.bind(this))

                }
                this.createDialog.then(function(oDialog) {
                    oDialog.open();
                    // set data to create a new item in the fragment
                    oDialog.getModel("mCreate").setData(oData);
                    

                });
            },
            saveTodo: function() {
                var oTodoModel = this.getView().getModel("mTodo"),
                    aData = oTodoModel.getData();
                this.createDialog.then(function(oDialog) {
                    var oData = oDialog.getModel("mCreate").getData();
                    aData.todo_list.unshift(oData);
                    oTodoModel.setData(aData);
                    oDialog.close();

                });
            },
            deleteTodo : function(oEvent) {
                var oSource = oEvent.getParameter("listItem"),
                    oContext = oSource.getBindingContext("mTodo"),
                    mTodo = this.getView().getModel("mTodo"),
                    aData = mTodo.getData(),
                    sPath = oContext.getPath(),
                    iIndex = sPath.split("/")[2];
                    aData.todo_list.splice(iIndex, 1);
                    mTodo.setData(aData);
            
            }
        });
    });
