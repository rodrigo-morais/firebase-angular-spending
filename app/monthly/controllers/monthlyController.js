import app from 'app';
import { monthlyService } from "monthly/services/monthlyService";

class MonthlyController {
    constructor(monthlyService){
        this._service = monthlyService;
    }
}

MonthlyController.$inject = ['monthlyService'];

app
    .controller('monthlyController', MonthlyController)
    .service('monthlyService', monthlyService);

export { MonthlyController };