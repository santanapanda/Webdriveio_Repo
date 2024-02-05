const assert = require('assert')

describe('LamdaTest page', () => {
   it('should have the Correct Page title', () => {
       browser.url('https://www.lambdatest.com/')
       const title = browser.getTitle()
       assert.equal(title, 'Next-Generation Mobile Apps and Cross Browser Testing Cloud | LambdaTest')

   })
})