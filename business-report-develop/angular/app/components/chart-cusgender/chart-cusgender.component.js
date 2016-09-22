class ChartCusgenderController {
    constructor() {
        'ngInject';

        //
    }

    $onInit() {
        this.lineChartLabels = ['13-17', '18-22', '23-29', '30-39', '40+']
        this.lineChartSeries = ['female', 'male']
        this.lineChartData = [
            [0, 8, 96, 228, 142],
            [1, 0, 65, 140, 56]
        ]
        this.lineChartColours = [
            {
                borderColor: '#fa6959',
                fillColor: '#fcaca3',
                strokeColor: '#fcaca3',
                pointColor: '#fa7f72',
                pointStrokeColor: '#fff',
                pointHighlightFill: '#fff',
                pointHighlightStroke: 'rgba(148,159,177,0.8)'
            },
            {
                borderColor: '#599afa',
                fillColor: '#a3c7fc',
                strokeColor: '#a3c7fc',
                pointColor: '#2980b9',
                pointStrokeColor: '#fff',
                pointHighlightFill: '#fff',
                pointHighlightStroke: 'rgba(77,83,96,1)'
            }
        ]


    }

}

export const ChartCusgenderComponent = {
    templateUrl: './views/app/components/chart-cusgender/chart-cusgender.component.html',
    controller: ChartCusgenderController,
    controllerAs: 'vm',
    bindings: {}
}
