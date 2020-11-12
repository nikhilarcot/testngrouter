import angular from 'angular';
import Home from './home/home';
import CustomerInfo from './customerinfo/customerinfo';
import CustomerDetails from './customerdetails/customerdetails';
import '../app.scss';

let componentModule = angular.module('app.components', [
  Home,
  CustomerInfo,
  CustomerDetails
]).name;

export default componentModule;
