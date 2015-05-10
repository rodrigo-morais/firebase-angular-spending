import config from '../../config';

class MonthlyService {

    constructor($firebaseArray){
        this._firebaseArray = $firebaseArray;
        this._config = config;
    }
}

MonthlyService.$inject = ['$firebaseArray'];

export { MonthlyService };