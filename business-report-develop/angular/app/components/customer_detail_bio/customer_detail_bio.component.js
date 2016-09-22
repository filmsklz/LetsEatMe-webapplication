class CustomerDetailBioController {
    constructor($stateParams, $scope, $state, $compile, API) {
        'ngInject';
        this.cus_id = $stateParams.id

        this.API = API
        this.$state = $state
        let cusdetail = this.API.all('customer')
        cusdetail.get($stateParams.id)
            .then((response) => {
            this.dataSet = response.data.costomer;
    })

    }

    $onInit() {
    }
}

export const CustomerDetailBioComponent = {
    templateUrl: './views/app/components/customer_detail_bio/customer_detail_bio.component.html',
    controller: CustomerDetailBioController,
    controllerAs: 'vm',
    bindings: {}
}
