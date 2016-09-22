class AllMerchantController {
    constructor($scope, $state, $compile, API) {
        'ngInject'
        this.API = API
        this.$state = $state
        let Bus = this.API.all('business')

        Bus.get('')
            .then((response) => {
            this.dataSet = response.data.business;


    })


        //
    }

    $onInit() {
    }
}

export const AllMerchantComponent = {
    templateUrl: './views/app/components/all-merchant/all-merchant.component.html',
    controller: AllMerchantController,
    controllerAs: 'vm',
    bindings: {}
}
