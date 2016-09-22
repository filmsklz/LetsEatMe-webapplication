class ChartCusController {
    constructor() {
        'ngInject';

        //
    }

    $onInit() {
        this.pieLabels = ['2 MONTHS', '1 MONTHS', 'INACTIVE', '3 MONTHS']
        this.pieData = [25, 51, 983, 71]
    }
}

export const ChartCusComponent = {
    templateUrl: './views/app/components/chart-cus/chart-cus.component.html',
    controller: ChartCusController,
    controllerAs: 'vm',
    bindings: {}
}
