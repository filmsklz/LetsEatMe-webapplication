class CustomerSecTableController {
    constructor(DTOptionsBuilder, DTColumnBuilder, API) {
        'ngInject'
        this.API = API
        this.dtOptions = DTOptionsBuilder.newOptions()
            .withOption('ajax', {
                // Either you specify the AjaxDataProp here
                // dataSrc: 'data',
                url: '/datatablesget',
                type: 'POST'
            })
            .withDisplayLength(50)
            .withDataProp('data')
            .withOption('processing', true)
            .withOption('serverSide', true)
            .withOption('responsive', true)
            .withBootstrap()
            .withPaginationType('full_numbers');
        this.dtColumns = [
            DTColumnBuilder.newColumn('cus_id').withTitle('ID'),
            DTColumnBuilder.newColumn('cus_username').withTitle('USERNAME'),
            DTColumnBuilder.newColumn(null).withTitle('TELEPHONE'),
            DTColumnBuilder.newColumn(null).withTitle('CURRENT POINTS'),
            DTColumnBuilder.newColumn(null).withTitle('TOTAL REDEEMS'),
            DTColumnBuilder.newColumn(null).withTitle('TOTAL VISITS'),
            DTColumnBuilder.newColumn(null).withTitle('FIRST VISIT'),
            DTColumnBuilder.newColumn(null).withTitle('LAST SEEN'),
            DTColumnBuilder.newColumn('cus_status').withTitle('STATUS'),
            DTColumnBuilder.newColumn(null).withTitle('DETAIL').renderWith(function (data, type, full) {
                return `
                      <a  href="#/cusdetails/${data.cus_id}">
                          <i class="glyphicon glyphicon-plus"></i>
                      </a>`
            })
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

export const CustomerSecTableComponent = {
    templateUrl: './views/app/components/customer_sec_table/customer_sec_table.component.html',
    controller: CustomerSecTableController,
    controllerAs: 'vm',
    bindings: {}
}
