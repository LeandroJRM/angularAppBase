(function() {
    'use strict';

    angular.module('app.dashboard', [])
    .config(Config);

    Config.$inject = ['$stateProvider'];

    function Config($stateProvider) {
        $stateProvider.state('app.dashboard', {
            url: '/dashboard',
            views: {
                'content@app': {
                    templateUrl: 'dashboard/dashboard.tpl.html',
                    controller: 'dashboardController as vm'
                }
            }
        });
    }
})();
