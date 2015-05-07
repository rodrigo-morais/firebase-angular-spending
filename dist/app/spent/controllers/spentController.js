define(["exports", "module"], function (exports, module) {
    "use strict";

    var spentController = function ($scope, spentService) {
        $scope.date = "";
        $scope.item = "";
        $scope.value = "";

        $scope.saveSpent = function () {
            spentService.post($scope.date, $scope.item, $scope.value);
        };
    };

    spentController.$inject = ["$scope", "spentService"];

    module.exports = spentController;
});