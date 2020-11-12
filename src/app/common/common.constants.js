/* eslint-disable no-tabs */
/* eslint-disable indent */
const API_URLS = {
    GETCUSTOMERINFO: 'https://cors-anywhere.herokuapp.com/https://ballistictest.azurewebsites.net/api/customers',
    UPDATECUSTOMERINFO: 'https://cors-anywhere.herokuapp.com/https://ballistictest.azurewebsites.net/api/customer'
};

const API_REQ_DATA = {
    X_CLIENT_ID: '12345'
};
const CUSTOMER_INFO_PAGE = {
    HOME_TEXT: 'Welcome to Customer Info SPA from Ballistic',
    CUSTOMERINFO_TEXT: 'Customer Data for list of customers is shown below:',
    TAB_HEADER1: 'First Name',
    TAB_HEADER2: 'Last Name',
    TAB_HEADER3: 'Location',
    TAB_HEADER4: 'Province',
    TAB_HEADER5: 'Active',
    TAB_ROW1: 'Details',
    PAGE: 'Please select a row to view details',
    API_ERROR: 'Oops... Our server is at rest. Please visit us later. Sorry for the inconvenience.',
};

const CUSTOMER_DETAILS_PAGE = {
    PAGE_HEADER1: 'Thanks for visting the customer Details Page. Below is the informaton about the selected customer:',
    PAGE_HEADER2: 'Wanna go back to the previous page? Please select "Back Button".',
    BUTTON_TEXT: 'Back to Customer Table',
    TAB_HEADER3: 'Location',
    TAB_HEADER4: 'Province',
    TAB_HEADER5: 'Active',
    TAB_ROW1: 'Details',
};

const STATES = {
    HOME: 'home',
    CUSTOMERDETAILS: 'customerdetails',
    CUSTOMERINFO: 'Customer Info'
};

const PROVINCE_CODES = {
    AB: 'Alberta',
    BC: 'British Columbia',
    MB: 'Manitoba',
    SK: 'Saskatchewan',
    ON: 'Ontario',
    QC: 'Quebec',
    NB: 'New Brunscwick',
    NS: 'Nova Scotia',
    PE: 'Prince Edward Island',
    NL: 'New Foundland & Labrador',
    YT: 'Yukon',
    NU: 'Nunavat',
    NT: 'Northwest Territories'
};

const AppConstants = {
    API_URLS,
    API_REQ_DATA,
    CUSTOMER_INFO_PAGE,
    CUSTOMER_DETAILS_PAGE,
    STATES,
    PROVINCE_CODES
};

export default AppConstants;