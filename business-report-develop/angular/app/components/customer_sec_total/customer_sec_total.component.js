class CustomerSecTotalController {
    constructor() {
        'ngInject';

        //
    }

    $onInit() {
        this.uniquecus = 2854;
        this.ndmonth = 64;
        this.rdmonth = 520;
        this.thmonth = 21;
        this.inact = 441;
    }
}

export const CustomerSecTotalComponent = {
    templateUrl: './views/app/components/customer_sec_total/customer_sec_total.component.html',
    controller: CustomerSecTotalController,
    controllerAs: 'vm',
    bindings: {}
}
