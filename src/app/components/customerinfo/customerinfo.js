import angular from 'angular';
import uiRouter from 'angular-ui-router';
import customerinfoComponent from './customerinfo.component';

let customerinfoModule = angular.module('customerinfo', [uiRouter])
    .component('customerinfo', customerinfoComponent).name;

export default customerinfoModule;
