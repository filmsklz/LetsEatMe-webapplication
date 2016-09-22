class DashboardTotalController {
    constructor($stateParams) {
        'ngInject';
        this.itemno = $stateParams.id;
        //
    }

    $onInit() {
    }
}

export const DashboardTotalComponent = {
    templateUrl: './views/app/components/dashboard-total/dashboard-total.component.html',
    controller: DashboardTotalController,
    controllerAs: 'vm',
    bindings: {}
}
