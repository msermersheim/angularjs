var appModule = angular.module('courseViewer', ['ui.router']);

appModule.config(function ($stateProvider) {

    var states = [
        {
            name: 'home',
            url: '/',
            template: '<home />'
        },
        {
            name: 'home2',
            url: '',
            template: '<home />'
        },
        {
            name: 'about',
            url: '/about',
            template: '<about />'
        },
        {
            name: 'products',
            url: '/products',
            template: '<products />'
        },
        {
            name: 'ups',
            url: '/ups',
            template: '<ups />'
        },
        {
            name: 'contact',
            url: '/contact',
            template: '<contact />'
        }
    ];

    states.forEach(function(state) {
        $stateProvider.state(state);
    });
});