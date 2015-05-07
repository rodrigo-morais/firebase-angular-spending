var spentController = ($scope, spentService) => {
    $scope.date = '';
    $scope.item = '';
    $scope.value = '';

    $scope.saveSpent = () => {
        spentService.post($scope.date, $scope.item, $scope.value);
    };
};

spentController.$inject = ['$scope', 'spentService'];

export default spentController;