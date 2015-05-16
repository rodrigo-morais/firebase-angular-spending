import app from 'app';
import { SpentService } from "spent/services/spentService";
import moment from 'moment';

class SpentController {
    constructor(spentService){
        this._service = spentService;
        this.date = '';
        this.item = '';
        this.value = '';
    }

    _clean(){
        this.date = '';
        this.item = '';
        this.value = '';
    }

    saveSpent(){
        this.date = moment(this.date).format('YYYY-MM-DD');
        this._service.post(this.date, this.item, this.value);

        this._clean();
    }
}

SpentController.$inject = ['spentService'];

app
    .controller('spentController', SpentController)
    .service('spentService', SpentService);

export { SpentController };