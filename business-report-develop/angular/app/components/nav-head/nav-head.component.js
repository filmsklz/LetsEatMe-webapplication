class NavHeadController {
    constructor() {
        'ngInject'
        // COLLAPSE =====================
        //  $scope.isCollapsed = false;
        //
    }

    $onInit() {
    }
}

export const NavHeadComponent = {
    templateUrl: './views/app/components/nav-head/nav-head.component.html',
    controller: NavHeadController,
    controllerAs: 'vm',
    bindings: {}
}
