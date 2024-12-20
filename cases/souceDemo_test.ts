Feature('Demo')

Scenario('Login', ({ I, loginDemoObjectPage }) => {
    I.amOnPage('https://www.saucedemo.com/')
    /*
    I.fillField({css: '#user-name'}, 'standard_user')
    I.fillField({css: '#password'}, 'secret_sauce')
    I.click({css: '#login-button'})
    I.waitForElement({css: '.title'}, 10)
    */
    loginDemoObjectPage.login('standard_user', 'secret_sauce')
    I.see('Products')
}).tag('@demo')

Scenario('Add products to cart', async ({ I }) =>{
    I.amOnPage('https://www.saucedemo.com/')
    I.loginDemo('standard_user', 'secret_sauce')

    const products:string[] = await I.grabTextFromAll('.inventory_item_name ')
    products.forEach((product) => {
        I.say(product)
    })

    const randomProduct:string = products[Math.floor(Math.random()*products.length)]
    I.click({xpath: `//div[text()='${randomProduct}']/../../..//button`})
    I.click({xpath: '//a[@data-test="shopping-cart-link"]'})

    I.waitForElement({xpath: '//span[text()="Your Cart"]'}, 10)
    I.see(randomProduct)
    //pause()
}).tag('@demo')