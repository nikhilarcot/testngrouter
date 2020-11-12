class CustomerDetailsController {
    constructor(CommonService, AppConstants) {
        this.customerData = this.customerdetails;
        this.CommonService = CommonService;
        this.AppConstants = AppConstants;
        this.selectedCustomer = CommonService.selectedCustomer;
    }

    $onInit() {
        this.header1 = this.AppConstants.CUSTOMER_DETAILS_PAGE.PAGE_HEADER1;
        this.header2 = this.AppConstants.CUSTOMER_DETAILS_PAGE.PAGE_HEADER2;
        this.tabCol1 = this.AppConstants.CUSTOMER_INFO_PAGE.TAB_HEADER1;
        this.tabCol2 = this.AppConstants.CUSTOMER_INFO_PAGE.TAB_HEADER2;
        this.tabCol3 = this.AppConstants.CUSTOMER_INFO_PAGE.TAB_HEADER3;
        this.tabCol4 = this.AppConstants.CUSTOMER_INFO_PAGE.TAB_HEADER4;
        this.btnText = this.AppConstants.CUSTOMER_DETAILS_PAGE.BUTTON_TEXT;
    }
}

export default CustomerDetailsController;
