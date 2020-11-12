import angular from 'angular';
import CommonService from './common.service';
import AppConstants from './common.constants';
// import './common.scss';


let commonModule = angular.module('app.common', []).service('CommonService', CommonService)
  .constant('AppConstants', AppConstants).name;

export default commonModule;
