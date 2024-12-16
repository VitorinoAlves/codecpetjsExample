Feature('examples');

Scenario('Click on a button', ({ I }) => {
    I.amOnPage('https://ultimateqa.com/simple-html-elements-for-automation/')
    I.click({xpath: "//h2[contains(text(),'Button')]/../..//a"})
    I.waitForElement({xpath: "//h1[text()='Button success']"}, 30)
    //pause();
});

Scenario('Fill form', ({ I }) => {
    I.amOnPage('https://ultimateqa.com/simple-html-elements-for-automation/')
    I.fillField({ xpath: "//input[@id='et_pb_contact_name_0']"}, 'Test name')
    I.fillField({ xpath: "//input[@id='et_pb_contact_email_0']"}, 'test@test.com')
    I.wait(3)
    I.click({ xpath: "//button[@name='et_builder_submit_button']"})
    I.waitForElement({xpath: "//p[text()='Thanks for contacting us']"}, 30)
    //pause();
})

Scenario('Fill form with fail', ({ I }) => {
    I.amOnPage('https://ultimateqa.com/simple-html-elements-for-automation/')
    I.fillField({ xpath: "//input[@id='et_pb_contact_name_0']"}, 'Test name')
    I.fillField({ xpath: "//input[@id='et_pb_contact_email_0']"}, 'test@test.com')
    I.wait(2)
    I.click({ xpath: "//button[@name='et_builder_submit_button']"})
    I.waitForElement({xpath: "//p[text()='Thanks for contacting test']"}, 5)
    //pause();
})
