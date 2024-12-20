const { I, productListPagePage } = inject();

export = {

  // setting locators
  fields: {
    userName: {css: '#user-name'},
    password: {css: '#password'}
  },
  loginButton: {css: '#login-button'},

  login(userName: string, password: string){
    I.fillField(this.fields.userName, userName);
    I.fillField(this.fields.password, password);
    I.click(this.loginButton);

    productListPagePage.waitForProductPage()
  }
}
