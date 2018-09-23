app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        //Routing home view
        .state('home', {
            url: '/',
            views: {
                "body": {
                    templateUrl: './views/home.view.html',
                    controller: 'homeController'
                },
                "navbar": { templateUrl: '../views/navbar.view.html' }
            }
        }).state('Teste', {
            url: '/teste',
            views: {
                "body": {
                    templateUrl: './views/teste.view.html',
                    controller: 'testeController'
                },
                "navbar": { templateUrl: '../views/navbar.view.html' }
            }
        });

});