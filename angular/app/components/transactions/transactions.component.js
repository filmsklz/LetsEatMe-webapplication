class TransactionsController {
    constructor(DTOptionsBuilder, DTColumnBuilder) {
        'ngInject';
        this.dtOptions = DTOptionsBuilder.newOptions()
            .withDisplayLength(50)
        this.dtColumns = [
            DTColumnBuilder.newColumn(null).withTitle('ID'),
            DTColumnBuilder.newColumn(null).withTitle('DATE'),
            DTColumnBuilder.newColumn(null).withTitle('TIME'),
            DTColumnBuilder.newColumn(null).withTitle('USERNAME'),
            DTColumnBuilder.newColumn(null).withTitle('LOCATION'),
            DTColumnBuilder.newColumn(null).withTitle('CAMPAIGN'),
            DTColumnBuilder.newColumn(null).withTitle('CUSTOMER ID'),
            DTColumnBuilder.newColumn(null).withTitle('ACTION'),
            DTColumnBuilder.newColumn(null).withTitle('POINTS'),
            DTColumnBuilder.newColumn(null).withTitle('AMOUNT'),
            DTColumnBuilder.newColumn(null).withTitle('DETAIL')
        ]
        //
    }

    $onInit() {
    }
}

export const TransactionsComponent = {
    templateUrl: './views/app/components/transactions/transactions.component.html',
    controller: TransactionsController,
    controllerAs: 'vm',
    bindings: {}
}
