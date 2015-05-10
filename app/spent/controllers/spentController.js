import app from 'app';
import { SpentService } from "spent/services/spentService";

class SpentController {
    constructor(spentService){
        this._service = spentService;
        this.date = '';
        this.item = '';
        this.value = '';
    }

    saveSpent(){
        this._service.post(this.date, this.item, this.value);
    }
}

SpentController.$inject = ['spentService'];

app
    .controller('spentController', SpentController)
    .service('spentService', SpentService);

export { SpentController };