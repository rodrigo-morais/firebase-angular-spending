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
            year: _year,
            years: _years
        };

        this.months = [];

    }

    _calculateMonths(spendings){
        for(let index = 0; index < spendings.length; index = index + 1){
            let spent = spendings[index],
                year = new Date(spent.date).getFullYear(),
                numMonth = new Date(spent.date).getMonth() + 1,
                month = this.months.filter((_month) => {
                    return _month.year === year && _month.month === numMonth;
                });

                if(month.length > 0){
                    month[0].value = month[0].value + parseFloat(spent.value);
                    month[0].average = (month[0].value / month[0].days).toFixed(2);
                }
                else{
                    month = {
                        year: year,
                        month: numMonth,
                        monthName: moment(new Date(spent.date)).format('MMMM'),
                        days: new Date(year, numMonth, 0).getDate(),
                        value: parseFloat(spent.value),
                        average: (parseFloat(spent.value) / new Date(year, numMonth, 0).getDate()).toFixed(2)
                    };

                    this.months.push(month);
                }
        }
    }

    findSpendings(filter){
        let start = moment(new Date(filter.year.name, 0, 1)).format('YYYY-MM-DD'),
            end = moment(new Date(filter.year.name, 12, 0)).format('YYYY-MM-DD'),
            scope = this;

        this.months = [];
        this.spendings = this._service.get(start, end);

        this.spendings.$loaded()
          .then(function(_spendings) {
              scope._calculateMonths(_spendings);

              let i = scope.months.length;
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