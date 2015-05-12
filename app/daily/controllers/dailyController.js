import app from 'app';
import { DailyService } from "daily/services/dailyService";
import moment from 'moment';

class DailyController {
    constructor(dailyService){
        this._service = dailyService;
        this.filter = {
            date: new Date(Date.now())
        };
        this.dateFilter = moment(new Date(Date.now())).format('YYYY-MM-DD');
        this.spendings = [];
        this.total = 0;
    }

    findSpendings(filter){
        this.dateFilter = moment(filter.date).format('YYYY-MM-DD');
        
        this.spendings = this._service.get(this.dateFilter);

        this.spendings.$loaded()
          .then(function(x) {
              console.log(x.length); // true
          })
          .catch(function(error) {
              console.log("Error:", error);
          });
    }
}

DailyController.$inject = ['dailyService'];

app
    .controller('dailyController', DailyController)
    .service('dailyService', DailyService);

export { DailyController };