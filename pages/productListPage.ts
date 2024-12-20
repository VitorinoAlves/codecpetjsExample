const { I } = inject();

export = {

  // insert your locators and methods here

  productTitle: {css: '.title'},

  waitForProductPage(){
    I.waitForElement(this.productTitle)
  }
}
