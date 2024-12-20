const { I } = inject();

type cssLocator = { css: string }; // Custom type for CSS locators

class PageObjectExample {
    pageTitle: cssLocator;

    constructor() {
        this.pageTitle = { css: '.title' };
    }

    public waitForProductPage() {
        // Add your logic to wait for the product page
        I.waitForVisible(this.pageTitle.css);
    }
}

// Export as a singleton
module.exports = new PageObjectExample();
export = PageObjectExample;
