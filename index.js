var appModule = angular.module('courseViewer', ['ui.router']);

appModule.config(function ($stateProvider) {

    var states = [
        {
            name: 'home',
            url: '/',
            template: '<home />'
        },
        {
            name: 'home',
            url: '',
            template: '<home />'
        }
        {
            name: 'about',
            url: '/about',
            template: '<about />'
        },
        {
            name: 'products',
            url: '/products',
            template: '<products-services />'
        },
        {
            name: 'ups',
            url: '/ups',
            template: '<ups-consolidation />'
        },
        {
            name: 'contact',
            url: '/contact',
            template: '<contact-us />'
        }
    ];

    states.forEach(function(state) {
        $stateProvider.state(state);
    });
});