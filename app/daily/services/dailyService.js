import config from '../../config';

class DailyService {

    constructor($firebaseArray){
        this._firebaseArray = $firebaseArray;
        this._config = config;
    }
}

DailyService.$inject = ['$firebaseArray'];

export { DailyService };