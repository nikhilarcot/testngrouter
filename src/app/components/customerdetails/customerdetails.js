import angular from 'angular';
import uiRouter from 'angular-ui-router';
import customerdetailsComponent from './customerdetails.component';

let customerdetailsModule = angular.module('customerdetails', [
    uiRouter
])

    .config(($stateProvider) => {
        "ngInject";
        $stateProvider
            .state('customerdetails', {
                url: '/customerdetails',
                component: 'customerdetails'
            });
    }).component('customerdetails', customerdetailsComponent).name;

export default customerdetailsModule;
