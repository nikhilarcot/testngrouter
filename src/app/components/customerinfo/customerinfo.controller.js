
class CustomerInfoController {
    constructor($q,
        $scope,
        $timeout,
        CommonService,
        AppConstants
    ) {
        this.$q = $q;
        this.$scope = $scope;
        this.$timeout = $timeout;
        this.CommonService = CommonService;
        this.AppConstants = AppConstants;
    }

    $onInit() {
        this.customersInfo = [];
        this.firstObject = [];
        this.isApiError = false;
        this.msg = this.AppConstants.CUSTOMER_INFO_PAGE.API_ERROR;
        this.infoHeader = this.AppConstants.CUSTOMER_INFO_PAGE.CUSTOMERINFO_TEXT;
        this.tabCol1 = this.AppConstants.CUSTOMER_INFO_PAGE.TAB_HEADER1;
        this.tabCol2 = this.AppConstants.CUSTOMER_INFO_PAGE.TAB_HEADER2;
        this.tabCol3 = this.AppConstants.CUSTOMER_INFO_PAGE.TAB_HEADER3;
        this.tabCol4 = this.AppConstants.CUSTOMER_INFO_PAGE.TAB_HEADER4;
        this.tabCol5 = this.AppConstants.CUSTOMER_INFO_PAGE.TAB_HEADER5;
        this.tabRow1 = this.AppConstants.CUSTOMER_INFO_PAGE.TAB_ROW1;
        this._getCustomerInfo();
    }
    /*
    *Process Promise 
    *to show Customer Info Table
    */
    _getCustomerInfo() {
        this.CommonService.getCustomerInfo().then(
            result => {
                for (let i = 0; i < result.length; i++) {
                    let name = result[i].name.split(' ');
                    this.customersInfo.push({
                        'firstName': name[0],
                        'lastName': name[1],
                        'location': result[i].location,
                        'province': this.AppConstants.PROVINCE_CODES[result[i].location],
                        'active': result[i].active
                    });
                }
                this._updateCustomerInfo(result);
            }).catch(function (error) {
                this.isApiError = true;
                console.log('Something went wrong', error);
            });
    }

    /*
    *Make a POST call 
    *after loading Customer Info Table
    */
    _updateCustomerInfo(data) {

        let jsonObject = data.shift();
        let jsonString = JSON.stringify(jsonObject);
        let base64String = btoa(jsonString);
        let ts = new Date();
        let isoTime = ts.toISOString();

        const formRequest = {
            'firstcustomer': base64String,
            'timestamp': isoTime
        };
        this.CommonService.updateCustomerInfo(formRequest);
    }

    selectedCustomer(data) {
        if (data) {
            this.CommonService.selectedCustomer = data;
        }
    }
}

export default CustomerInfoController;
