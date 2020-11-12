import angular from 'angular';
import CustomerInfo from './customerinfo/customerinfo';
import CommonService from './common.service';
import AppConstants from './common.constants';


let commonModule = angular.module('app.common', [
  CustomerInfo
]).service('CommonService', CommonService)
  .constant('AppConstants', AppConstants).name;

export default commonModule;
