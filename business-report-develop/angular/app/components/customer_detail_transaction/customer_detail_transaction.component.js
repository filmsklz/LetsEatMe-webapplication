class CustomerDetailTransactionController {
    constructor(DTOptionsBuilder, DTColumnBuilder, API) {
        'ngInject'
        this.API = API
        this.dtOptions = DTOptionsBuilder.newOptions()
            .withOption('searching', false)
            .withOption('paging', false)
        this.dtColumns = [
            DTColumnBuilder.newColumn(null).withTitle('DATE'),
            DTColumnBuilder.newColumn(null).withTitle('TIME'),
            DTColumnBuilder.newColumn(null).withTitle('CAMPAIGN'),
            DTColumnBuilder.newColumn(null).withTitle('BRANCH'),
            DTColumnBuilder.newColumn(null).withTitle('REWARD'),
            DTColumnBuilder.newColumn(null).withTitle('TYPE'),
            DTColumnBuilder.newColumn(null).withTitle('POINTS'),
            DTColumnBuilder.newColumn(null).withTitle('AMOUNT'),
            DTColumnBuilder.newColumn(null).withTitle('DETAIL')
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

export const CustomerDetailTransactionComponent = {
    templateUrl: './views/app/components/customer_detail_transaction/customer_detail_transaction.component.html',
    controller: CustomerDetailTransactionController,
    controllerAs: 'vm',
    bindings: {}
}
