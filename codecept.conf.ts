export const config: CodeceptJS.MainConfig = {
  tests: './cases/*_test.ts',
  output: './output',
  fullPromiseBased: true,
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'http://localhost',
      show: true,
      video: true,
      trace: true
    },
    Mochawesome: {
      uniqueScreenshotNames: true
    }
  },
  plugins: {
    allure: {
      enabled: true,
      require: "allure-codeceptjs",
    },
  },
  mocha: {
    reporterOptions: {
      reportDir: "output"
    }
  },
  include: {
    I: './steps_file',
    loginDemoObjectPage: "./pages/loginDemoObject.ts",
    productListPagePage: "./pages/productListPage.ts",
  },
  name: 'codeceptJSExample'
}