import app from 'app';
import { SpentService } from "spent/services/spentService";
import moment from 'moment';

class SpentController {
    constructor($rootScope, spentService){
        this._service = spentService;
        this.date = '';
        this.item = '';
        this.value = '';

        $rootScope.$broadcast('change-menu', { position: 0 });
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

SpentController.$inject = ['$rootScope', 'spentService'];

app
    .controller('spentController', SpentController)
    .service('spentService', SpentService);

export { SpentController };