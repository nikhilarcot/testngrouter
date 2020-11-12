import template from './customerdetails.html';
import controller from './customerdetails.controller';
import './customerdetails.scss';

let customerdetailsComponent = {
    bindings: {
        customerdetails: '<'
    },
    template,
    controller
};

export default customerdetailsComponent;
