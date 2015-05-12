import config from '../../config';

class MonthlyService {

    constructor($firebaseArray){
        this._firebaseArray = $firebaseArray;
        this._config = config;
    }

    get(start, end){
        var ref = new Firebase(this._config.url).orderByChild("date").startAt(start).endAt(end);

        let spendings = this._firebaseArray(ref);
        
        return spendings;
    }
}

MonthlyService.$inject = ['$firebaseArray'];

export { MonthlyService };