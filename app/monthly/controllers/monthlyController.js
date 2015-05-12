import app from 'app';
import { MonthlyService } from "monthly/services/monthlyService";
import moment from 'moment';

class MonthlyController {
    constructor(monthlyService){
        this._service = monthlyService;
        this.filter = {
            month: new Date(Date.now())
        };
        this.monthFilter = moment(new Date(Date.now())).format('MM');
    }

    findSpendings(filter){
        this.monthFilter = moment(filter.month).format('MM');
        
        console.log(this.monthFilter);
    }
}

MonthlyController.$inject = ['monthlyService'];

app
    .controller('monthlyController', MonthlyController)
    .service('monthlyService', MonthlyService);

export { MonthlyController };