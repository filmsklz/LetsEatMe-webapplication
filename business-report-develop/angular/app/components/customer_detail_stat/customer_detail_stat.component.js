class CustomerDetailStatController {
    constructor(DTOptionsBuilder, DTColumnBuilder, API) {
        'ngInject'
        this.API = API
        this.dtOptions = DTOptionsBuilder.newOptions()
            .withOption('searching', false)
            .withOption('paging', false)

        this.dtColumns = [
            DTColumnBuilder.newColumn(null).withTitle('FIRST VISITED'),
            DTColumnBuilder.newColumn(null).withTitle('LASTEST VISITED'),
            DTColumnBuilder.newColumn(null).withTitle('TOTAL VISITED'),
            DTColumnBuilder.newColumn(null).withTitle('STATUS'),
            DTColumnBuilder.newColumn(null).withTitle('CURRENT POINTS')
        ]


        /*
         let Rests = this.API.all('restinf')

         Rests.get('')
         .then((response) => {
         this.dataSet = response.data.restinf;
         })
         //
         */
    }

    $onInit() {
    }
}

export const CustomerDetailStatComponent = {
    templateUrl: './views/app/components/customer_detail_stat/customer_detail_stat.component.html',
    controller: CustomerDetailStatController,
    controllerAs: 'vm',
    bindings: {}
}
