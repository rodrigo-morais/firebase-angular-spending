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

export { SpentController };