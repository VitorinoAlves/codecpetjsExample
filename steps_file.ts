// in this file you can append custom step methods to 'I' object

export = function() {
  return actor({

    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.

    loginDemo: function(userName: string, password: string){
      this.fillField({css: '#user-name'}, userName)
      this.fillField({css: '#password'}, password)
      this.click({css: '#login-button'})
      this.waitForElement({css: '.title'}, 10)
    }

  });
}
