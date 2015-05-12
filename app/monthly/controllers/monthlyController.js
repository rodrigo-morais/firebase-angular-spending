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
        let start = moment(new Date(filter.year.name, parseInt(filter.month) - 1, 1)).format('YYYY-MM-DD'),
            end = moment(new Date(filter.year.name, filter.month, 0)).format('YYYY-MM-DD');

        this.spendings = this._service.get(start, end);

        this.spendings.$loaded()
          .then(function(_spendings) {
              console.log(_spendings.length);
          })
          .catch(function(error) {
              console.log("Error:", error);
          });
    }
}

MonthlyController.$inject = ['monthlyService'];

app
    .controller('monthlyController', MonthlyController)
    .service('monthlyService', MonthlyService);

export { MonthlyController };