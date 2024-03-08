sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device"
], 
    /**
     * provide app-view type models (as in the first "V" in MVVC)
     * 
     * @param {typeof sap.ui.model.json.JSONModel} JSONModel
     * @param {typeof sap.ui.Device} Device
     * 
     * @returns {Function} createDeviceModel() for providing runtime info for the device the UI5 app is running on
     */
    function (JSONModel, Device) {
        "use strict";

        return {
            createDeviceModel: function () {
                var oModel = new JSONModel(Device);
                oModel.setDefaultBindingMode("OneWay");
                return oModel;
        },
// Create object todo_list
        createTodoModel : function() {
            var oModel = new JSONModel({
    
                todo_list : [{
                    title: "Scrum Master",
                    description: "Passing the Professional Scrum Master Exam",
                    targetDate: new Date("02/21/2024"),
                    status : 0
                },
                {
                    title: "Scrum Developer",
                    description: "Passing the Professional Scrum Developer Exam",
                    targetDate: new Date("03/12/2024"),
                    status : 0
                }
                ,
                {
                    title: "PRINCE2",
                    description: "Passing the exam PRINCE2",
                    targetDate: new Date("04/21/2024"),
                    status : 0
                }
                ,
                {
                    title: "SAPUI5",
                    description: "Creating a to do list app",
                    targetDate: new Date("04/30/2024"),
                    status : 0
                }
                ,
                {
                    title: "SAPUI5",
                    description: "Create a SAPUI5 App",
                    targetDate: new Date("05/12/2024"),
                    status : 0
                }
                ,
                {
                    title: "GITHUB",
                    description: "Create a second GitHub Account",
                    targetDate: new Date("06/21/2024"),
                    status : 0
                }
                ,
                {
                    title: "French",
                    description: "Develop your French language skills",
                    targetDate: new Date("06/05/2024"),
                    status : 0
                }
            ]
            });
            return oModel;
        }
    };
});