import app from 'app';
import { DailyService } from "daily/services/dailyService";
import moment from 'moment';

class DailyController {
    constructor(dailyService){
        this._service = dailyService;
        this.filter = {
            date: new Date(Date.now())
        };
        this.dateFilter = moment(new Date(Date.now())).format('MM-DD-YYYY');
    }

    findSpendings(filter){
        this.dateFilter = moment(filter.date).format('MM-DD-YYYY');
        console.log(moment(this.dateFilter).format('MM-DD-YYYY'));
    }
}

DailyController.$inject = ['dailyService'];

app
    .controller('dailyController', DailyController)
    .service('dailyService', DailyService);

export { DailyController };