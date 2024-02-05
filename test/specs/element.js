describe('Google Search Test',function(){
it('should have the right title',function(){
    browser.url('https://google.com/')
    search_box_element = $('[name=\'q\']')
    search_box_element.setValue("BrowserStack\n")
    expect(browser).toHaveTitle("BrowserStack - Google Search");
    console.log("Title of the webpage is -" + pagetitle)



}







)





}












)