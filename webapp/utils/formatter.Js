sap.ui.define([], function () {
    "use strict";

    return {
        formatDate: function (todoDate) {
            // compare the dates with today and date of the items
            var oToday = new Date(),
                iDaysBetween = (todoDate.getTime() - oToday.getTime()) / (1000 * 60 * 60 * 24);

            if (iDaysBetween > 0) {
                return "Warning";
            } else if (iDaysBetween < 0) {
                return "Succes";
            } else { return "Error"; }
        }
    }
});