class HomeController {
  constructor(AppConstants) {
    this.name = 'home';
    this.AppConstants = AppConstants;
    this.homeText = this.AppConstants.CUSTOMER_INFO_PAGE.HOME_TEXT;
  }
}

export default HomeController;
