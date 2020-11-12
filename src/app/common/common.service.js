
class CommonService {
    constructor($q,
        $log,
        $http,
        $timeout,
        AppConstants) {
        this.$q = $q;
        this.$log = $log;
        this.$http = $http;
        this.$timeout = $timeout;
        this.AppConstants = AppConstants;
        this.selectedCustomer = {};
    }



    /**
    * GET Call to Retrieve list of Customers
    * @return{Promise} - to be resolved
    */

    // eslint-disable-next-line padded-blocks
    getCustomerInfo() {

        const getCustomersUrl = this.AppConstants.API_URLS.GETCUSTOMERINFO;
        const deferredResponse = this.$q.defer();

        this.$http({
            url: getCustomersUrl,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:8000'
            }
        }).then(
            (response) => deferredResponse.resolve(response.data),
            (error) => deferredResponse.reject(error)
        );
        return deferredResponse.promise;
    }


    /**
    * POST Call to Send 
    * First Customer Info Obj
    */

    updateCustomerInfo(payload) {

        const updateCustomerUrl = this.AppConstants.API_URLS.UPDATECUSTOMERINFO;
        const deferredResponse = this.$q.defer();

        this.$http({
            url: updateCustomerUrl,
            method: 'POST',
            data: payload,
            headers: {
                'Content-Type': 'application/json',
                'x-client-id': this.AppConstants.API_REQ_DATA.X_CLIENT_ID
            }
        }).then(
            (response) => deferredResponse.resolve(response.data),
            (error) => deferredResponse.reject(error)
        );
    }
}

export default CommonService;
