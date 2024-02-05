const { remote } = require('webdriverio'); (async () => { 
    const browser = await remote({ logLevel: 'error', path: '/', 
    capabilities: {browserName: 'chrome'} });
    await browser.url('http://tutorialsninja.com/demo/'); 
    const title = await browser.getTitle(); 
    console.log('Title was:' + title); 
    await browser.deleteSession(); 
    }) ().catch((e) => console.error(e));