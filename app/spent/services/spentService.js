import config from '../../config';

class SpentService {

    constructor($firebaseArray){
        this._firebaseArray = $firebaseArray;
        this._config = config;
    }

    post(date, item, value){
        var ref = new Firebase(this._config.url);

        let spendings = this._firebaseArray(ref);
        
        spendings.$add({
            date: date,
            item: item,
            value: value });
    }
}

SpentService.$inject = ['$firebaseArray'];

export { SpentService };