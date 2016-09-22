export function RoutesConfig($stateProvider, $urlRouterProvider) {
    'ngInject';

    let getView = (viewName) =>
    {
        return `./views/app/pages/${viewName}/${viewName}.page.html`;
    }
    ;

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('app', {
            abstract: true,
            data: {},//{auth: true} would require JWT auth
            views: {
                header: {
                    templateUrl: getView('header')
                },
                /*footer: {
                 templateUrl: getView('footer')
                 },*/
                main: {}
            }
        })
        .state('app.landing', {
            url: '/',
            views: {
                'main@': {
                    template: '<all-merchant></all-merchant>'
                }
            }
        })
        .state('app.login', {
            url: '/login',
            views: {
                'main@': {
                    templateUrl: getView('login')
                }
            }
        })
        .state('app.testt', {
            url: '/testt',
            views: {
                'main@': {
                    template: '<test></test>'
                }
            }
        })
        .state('app.forgot_password', {
            url: '/forgot-password',
            views: {
                'main@': {
                    templateUrl: getView('forgot-password')
                }
            }
        })
        .state('app.dashboard', {
            url: '/dashboard/:id',
            views: {
                'main@': {
                    template: '<dashboard></dashboard>'
                }
            }
        })
        .state('app.customers', {
            url: '/customers/:id',
            views: {
                'main@': {
                    template: '<customers></customers>'
                }
            }
        })
        .state('app.customers_details', {
            url: '/cusdetails/:id',
            views: {
                'main@': {
                    template: '<customer_detail></customer_detail>'
                }
            }
        })
        .state('app.transactions', {
            url: '/transactions/:id',
            views: {
                'main@': {
                    template: '<transactions></transactions>'
                }
            }
        })
        .state('app.issues', {
            url: '/issues/:id',
            views: {
                'main@': {
                    template: '<issues></issues>'
                }
            }
        })
        .state('app.reset_password', {
            url: '/reset-password/:email/:token',
            views: {
                'main@': {
                    templateUrl: getView('reset-password')
                }
            }
        });
}
