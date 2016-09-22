class NavSideController {
    constructor($scope, $mdSidenav) {
        'ngInject'
        $mdSidenav('nav').toggle();
        $scope.toggleSidenav = function () {
            console.log('toggleSidenav');

        }
    }

    $onInit() {
    }
}

export const NavSideComponent = {
    templateUrl: './views/app/components/nav-side/nav-side.component.html',
    controller: NavSideController,
    controllerAs: 'vm',
    bindings: {}
}
