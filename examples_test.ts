Feature('examples');

Scenario('test something', async ({ I }) => {
    await I.amOnPage('https://ultimateqa.com/simple-html-elements-for-automation/');
    pause();
});
