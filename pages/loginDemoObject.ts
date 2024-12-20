const { I, productListPagePage } = inject();
import PageObjectExample from "./PageObjectExample";


const pageObjectExample = new PageObjectExample();

export = {

  // setting locators
  fields: {
    userName: {css: '#user-name'},
    password: {css: '#password'}
  },
  loginButton: {css: '#login-button'},

  async login(userName: string, password: string){
    I.fillField(this.fields.userName, userName);
    I.fillField(this.fields.password, password);
    I.click(this.loginButton);

    await pageObjectExample.waitForProductPage()
    //productListPagePage.waitForProductPage()
  }
}
