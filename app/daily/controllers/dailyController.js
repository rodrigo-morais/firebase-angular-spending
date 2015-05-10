import app from 'app';
import { dailyService } from "daily/services/dailyService";

class DailyController {
    constructor(dailyService){
        this._service = dailyService;
    }
}

DailyController.$inject = ['dailyService'];

app
    .controller('dailyController', DailyController)
    .service('dailyService', dailyService);

export { DailyController };