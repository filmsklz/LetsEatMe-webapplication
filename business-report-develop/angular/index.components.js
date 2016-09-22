import {IssuesHistoryComponent} from './app/components/issues_history/issues_history.component';
import {IssuesFormComponent} from './app/components/issues_form/issues_form.component';
import {IssuesComponent} from './app/components/issues/issues.component';
import {TransactionsComponent} from './app/components/transactions/transactions.component';
import {CustomerDetailTransactionComponent} from './app/components/customer_detail_transaction/customer_detail_transaction.component';
import {CustomerDetailStatComponent} from './app/components/customer_detail_stat/customer_detail_stat.component';
import {CustomerDetailBioComponent} from './app/components/customer_detail_bio/customer_detail_bio.component';
import {CustomerDetailComponent} from './app/components/customer_detail/customer_detail.component';
import {CustomerSecTableComponent} from './app/components/customer_sec_table/customer_sec_table.component';
import {CustomerSecTotalComponent} from './app/components/customer_sec_total/customer_sec_total.component';
import {CustomersComponent} from './app/components/customers/customers.component';
import {ChartCusgenderComponent} from './app/components/chart-cusgender/chart-cusgender.component';
import {ChartCusAGEComponent} from './app/components/chart-cusAGE/chart-cusAGE.component';
import {ChartCusComponent} from './app/components/chart-cus/chart-cus.component';
import {ChartLoyaltyComponent} from './app/components/chart-loyalty/chart-loyalty.component';
import {DashboardComponent} from './app/components/dashboard/dashboard.component';
import {DashboardAvgComponent} from './app/components/dashboard-avg/dashboard-avg.component';
import {DashboardTotalComponent} from './app/components/dashboard-total/dashboard-total.component';
import {NavHeadComponent} from './app/components/nav-head/nav-head.component';
import {AllMerchantComponent} from './app/components/all-merchant/all-merchant.component';
import {NavSideComponent} from './app/components/nav-side/nav-side.component';
import {TestComponent} from './app/components/test/test.component';

angular.module('app.components')
    .component('issuesHistory', IssuesHistoryComponent)
    .component('issuesForm', IssuesFormComponent)
    .component('issues', IssuesComponent)
    .component('transactions', TransactionsComponent)
    .component('customerDetailTransaction', CustomerDetailTransactionComponent)
    .component('customerDetailStat', CustomerDetailStatComponent)
    .component('customerDetailBio', CustomerDetailBioComponent)
    .component('customerDetail', CustomerDetailComponent)
    .component('customerSecTable', CustomerSecTableComponent)
    .component('customerSecTotal', CustomerSecTotalComponent)
    .component('customers', CustomersComponent)
    .component('chartCusgender', ChartCusgenderComponent)
    .component('chartCusAGE', ChartCusAGEComponent)
    .component('chartCus', ChartCusComponent)
    .component('chartLoyalty', ChartLoyaltyComponent)
    .component('dashboard', DashboardComponent)
    .component('dashboardAvg', DashboardAvgComponent)
    .component('dashboardTotal', DashboardTotalComponent)
    .component('navHead', NavHeadComponent)
    .component('allMerchant', AllMerchantComponent)
    .component('navSide', NavSideComponent)
    .component('test', TestComponent)

