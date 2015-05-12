import app from 'app';
import { MonthlyService } from "monthly/services/monthlyService";
import moment from 'moment';

class MonthlyController {
    constructor(monthlyService){
        this._service = monthlyService;

        let _year = null;

        let _years = [];
        for(let year = 1999;year <= 2030; year = year + 1){
            _years.push(
                {
                    name: year
                }
            );
            if(year === new Date(Date.now()).getFullYear())
            {
                _year = _years[_years.length - 1];
            }
        }

        this.filter = {
            month: new Date(Date.now()).getMonth() + 1,
            year: _year,
            years: _years
        };

        this.monthFilter = moment(new Date(Date.now())).format('MM');

    }

    findSpendings(filter){
        let start, end;

        this.monthFilter = moment(filter.month).format('MM');


        
        console.log(this.monthFilter);
    }
}

MonthlyController.$inject = ['monthlyService'];

app
    .controller('monthlyController', MonthlyController)
    .service('monthlyService', MonthlyService);

export { MonthlyController };