class ChartLoyaltyController {
    constructor() {
        'ngInject';

        //
    }

    $onInit() {
        this.labels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10+'];
        this.series = ['STAMP', 'stamp2'];
        this.data = [
            [65, 59, 80, 81, 152, 55, 110, 50, 90, 124]
        ];


        this.areaChartOptions = {
            legend: {display: true},
            showLines: true,

            // How to disable fill?!?
            scales: {
                xAxes: [
                    {
                        gridLines: {
                            display: false
                        }
                    }
                ]
            }
        }

    }
}

export const ChartLoyaltyComponent = {
    templateUrl: './views/app/components/chart-loyalty/chart-loyalty.component.html',
    controller: ChartLoyaltyController,
    controllerAs: 'vm',
    bindings: {}
}
