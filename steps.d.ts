/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file');
type loginDemoObjectPage = typeof import('./pages/loginDemoObject');
type productListPagePage = typeof import('./pages/productListPagePage');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, loginDemoObjectPage: loginDemoObjectPage, productListPagePage: productListPagePage }
  interface Methods extends PlaywrightTs, MochawesomeTs {}
  interface I extends ReturnType<steps_file>, WithTranslation<Methods> {}
  namespace Translation {
    interface Actions {}
  }
}
