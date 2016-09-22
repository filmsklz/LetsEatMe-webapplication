class IssuesHistoryController {
    constructor(DTOptionsBuilder, DTColumnBuilder, API) {
        'ngInject'
        this.API = API
        this.dtOptions = DTOptionsBuilder.newOptions()
            .withOption('paging', false)
        this.dtColumns = [

            DTColumnBuilder.newColumn(null).withTitle('ISSUEID'),
            DTColumnBuilder.newColumn(null).withTitle('DATE'),
            DTColumnBuilder.newColumn(null).withTitle('CUSTOMER'),
            DTColumnBuilder.newColumn(null).withTitle('BUSINESS'),
            DTColumnBuilder.newColumn(null).withTitle('CAMPAIGN'),
            DTColumnBuilder.newColumn(null).withTitle('REWARD'),
            DTColumnBuilder.newColumn(null).withTitle('BRANCH'),
            DTColumnBuilder.newColumn(null).withTitle('TYPE'),
            DTColumnBuilder.newColumn(null).withTitle('ACTION'),
            DTColumnBuilder.newColumn(null).withTitle('STATUS'),
            DTColumnBuilder.newColumn(null).withTitle('APPROVAL')
        ]

    }

    $onInit() {
    }
}

export const IssuesHistoryComponent = {
    templateUrl: './views/app/components/issues_history/issues_history.component.html',
    controller: IssuesHistoryController,
    controllerAs: 'vm',
    bindings: {}
}
