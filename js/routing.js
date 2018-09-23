app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        //Routing home view
        .state('home', {
            url: '/',
            views: {
                "body": {
                    templateUrl: './views/home.controller.html',
                    controller: 'homeController'
                },
                "navbar": { templateUrl: './views/navbar.view.html' }
            }
        });

});