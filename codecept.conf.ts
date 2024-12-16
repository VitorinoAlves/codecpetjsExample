export const config: CodeceptJS.MainConfig = {
  tests: './*_test.ts',
  output: './output',
  fullPromiseBased: true,
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'http://localhost',
      show: true
    },
    Mochawesome: {
        uniqueScreenshotNames: true
    }
  },
  plugins:{
  },
  mocha: {
    reporterOptions: {
        reportDir: "output"
    }
  },
  include: {
    I: './steps_file'
  },
  name: 'codeceptJSExample'
}