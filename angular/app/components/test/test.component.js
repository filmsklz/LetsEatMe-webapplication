class TestController {
    constructor(API, ToastService) {
        'ngInject';
        this.API = API;
        this.ToastService = ToastService;
        this.topicitems = ['Add Points', 'Remove Points', 'Add Redeem Reward'];
        this.selectedtopicItem;
        this.getSelectedtopicText = function () {
            if (this.selectedtopicItem !== undefined) {
                return " " + this.selectedtopicItem;
            } else {
                return "Please select";
            }
        };

        //
    }
    save(){
      var data = {
        iss_data: this.selectedtopicItem
      };

       this.API.all('posts').post(data).then((response) => {
         this.ToastService.show('Post added successfully');
       });
    }

    $onInit() {
    }
}

export const TestComponent = {
    templateUrl: './views/app/components/test/test.component.html',
    controller: TestController,
    controllerAs: 'vm',
    bindings: {}
}
