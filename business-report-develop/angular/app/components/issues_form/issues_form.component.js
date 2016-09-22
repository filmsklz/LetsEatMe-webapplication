class IssuesFormController {
    constructor(API, ToastService) {
        'ngInject';
        this.API = API;
        this.ToastService = ToastService;


        this.myDate = new Date();
        this.minDate = new Date(
        this.myDate.getFullYear(),
        this.myDate.getMonth() - 2,
        this.myDate.getDate());
        this.maxDate = new Date(
        this.myDate.getFullYear(),
        this.myDate.getMonth() + 2,
        this.myDate.getDate());

        //
        this.topicitems = ['Add Points', 'Remove Points', 'Add Redeem Reward'];
        this.selectedtopicItem;
        this.getSelectedtopicText = function () {
            if (this.selectedtopicItem !== undefined) {
                return " " + this.selectedtopicItem;
            } else {
                return "Please select";
            }
        };

        this.merchantitems = ['test'];
        this.selectedmerchantItem;
        this.getSelectedmerchantText = function () {
            if (this.selectedmerchantItem !== undefined) {
                return " " + this.selectedmerchantItem;
            } else {
                return "Please select";
            }
        };
        this.campaignitems = ['test'];
        this.selectedcampaignItem;
        this.getSelectedcampaignText = function () {
            if (this.selectedcampaignItem !== undefined) {
                return " " + this.selectedcampaignItem;
            } else {
                return "Please select";
            }
        };

        this.branchitems = ['CDC'];
        this.selectedbranchItem;
        this.getSelectedbranchText = function () {
            if (this.selectedbranchItem !== undefined) {
                return " " + this.selectedbranchItem;
            } else {
                return "Please select";
            }
        };

        this.cusinfo;
        this.points;

        this.cusiditems = ['ID'];
        this.selectedcusidItem;
        this.getSelectedcusidText = function () {
            if (this.selectedcusidItem !== undefined) {
                return " " + this.selectedcusidItem;
            } else {
                return "Please select";
            }
        };
    }
    save(){
      var itemtosave = JSON.stringify({topic:this.selectedtopicItem,
                                      acc_id:2,
                                      details:{cus_id_resource:'1',
                                        cus_id_target:'1',
                                        point:this.points,
                                        total_sales:'0',
                                        rwd_id:'0',
                                        rwd_name:"disccc",
                                        crd_id:'1',
                                        cmp_id:'231',
                                        cmp_name:this.selectedcampaignItem,
                                        brn_id:'23',
                                        brn_name:this.selectedbranchItem,
                                        created_date:'1454544000'}
                                      },null,"")
      var data = {
        iss_data:itemtosave
      };

       this.API.all('posts').post(data).then((response) => {
         this.ToastService.show('Post added successfully');
       });
    }
    $onInit() {
    }
}

export const IssuesFormComponent = {
    templateUrl: './views/app/components/issues_form/issues_form.component.html',
    controller: IssuesFormController,
    controllerAs: 'vm',
    bindings: {}
}
