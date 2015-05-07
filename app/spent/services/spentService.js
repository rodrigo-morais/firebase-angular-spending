var spentService = () => {
    

    return {

        name: 'spentService',
        post: (date, item, value) => {
            console.log('Spent save.');
        }

    };
};

//spentController.$inject = ['$scope'];

export default spentService;