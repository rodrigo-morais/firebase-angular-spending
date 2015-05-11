import config from '../../config';

class DailyService {

    constructor($firebaseArray){
        this._firebaseArray = $firebaseArray;
        this._config = config;
    }

    get(date){
        var ref = new Firebase(this._config.url).orderByChild("date").equalTo(date);

        let spendings = this._firebaseArray(ref);
        
        return spendings;
    }
}

DailyService.$inject = ['$firebaseArray'];

export { DailyService };