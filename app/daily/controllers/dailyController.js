import app from 'app';
import { DailyService } from "daily/services/dailyService";
import moment from 'moment';

class DailyController {
    constructor(dailyService){
        this._service = dailyService;
        this.dateFilter = new Date(Date.now());
    }

    findSpendings(){
        console.log(moment(this.dateFilter).format('MM-DD-YYYY'));
    }
}

DailyController.$inject = ['dailyService'];

app
    .controller('dailyController', DailyController)
    .service('dailyService', DailyService);

export { DailyController };