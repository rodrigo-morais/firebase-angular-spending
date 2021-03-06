﻿import app from 'app';
import { DailyService } from "daily/services/dailyService";
import moment from 'moment';

class DailyController {
    constructor($rootScope, dailyService){
        this._service = dailyService;
        this.filter = {
            date: new Date(Date.now())
        };
        this.dateFilter = moment(new Date(Date.now())).format('YYYY-MM-DD');
        this.spendings = [];
        this.total = 0;

        this.findSpendings(this.filter);

        $rootScope.$broadcast('change-menu', { position: 1 });
    }

    findSpendings(filter){
        let scope = this;

        this.dateFilter = moment(filter.date).format('YYYY-MM-DD');
        
        this.spendings = this._service.get(this.dateFilter);

        this.spendings.$loaded()
          .then(function(_spendings) {
              let values = _spendings.map(function(spent) {
                  return parseFloat(spent.value);
              });

              if(values.length > 0){
                scope.total = values.reduce(function(previousValue, currentValue, index, array) {
                    return previousValue + currentValue;
                });
              }
              else{
                scope.total = 0;
              }

              scope.total = parseFloat(scope.total);
          })
          .catch(function(error) {
              console.log("Error:", error);
          });
    }
}

DailyController.$inject = ['$rootScope', 'dailyService'];

app
    .controller('dailyController', DailyController)
    .service('dailyService', DailyService);

export { DailyController };