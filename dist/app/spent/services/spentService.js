define(["exports", "module"], function (exports, module) {
    "use strict";

    var spentService = function () {

        return {

            name: "spentService",
            post: function (date, item, value) {
                console.log("Spent save.");
            }

        };
    };

    //spentController.$inject = ['$scope'];

    module.exports = spentService;
});