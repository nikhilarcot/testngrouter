import angular from 'angular';
import Home from './home/home';
import CustomerDetails from './customerdetails/customerdetails';

let componentModule = angular.module('app.components', [
  Home,
  CustomerDetails
]).name;

export default componentModule;
