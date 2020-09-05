var express = require('express');
var router = express.Router();

const puppeteer = require('puppeteer-core');

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
    });
    const page = await browser.newPage();
    await page.setViewport({
        width: 1920,
        height: 1080
    });

    let data = [];

    for (let index = 1; index <= 3; index++) {
        await page.goto(`http://www.duksung.ac.kr/bbs/board.do?bsIdx=35&menuId=1058`);
        data.push(await getAll(page));
    }
    console.log(data);

    await page.waitFor(10000);
    await browser.close();
})();

async function getAll(page) {
    let data = [];
   
    const number = await page.$$eval("#boardList > tbody > tr", (data) => data.length);
    console.log(number);
    // tr태그의 개수를 세어서 줄의 개수를 얻은 후에
    for (let index = 0; index < 10; index++) {
        data.push(await getOne(page, index + 1));
        // 각 줄의 정보를 얻어서 배열에 Push
    }

    return Promise.resolve(data);
}

//$가 1개인지 2개인지는 한개를 찾느냐, 모두를 찾냐의 차이다.
//document.querySelector와 document.querySelectorAll

async function getOne(page, index) {

    let data = {};
    
    //let temp =  await page.$("#boardList > tbody > tr:nth-child(6) > td.text-left > a");
    
    /*
    data.name = await page.evaluate((data) => {
        return data.textContent;
    }, temp);
    
    */
   /*
    data.link = await page.evaluate((data) => {
        return data.href;
    }, temp);
    */

    //data.number = await page.$eval("body > div > div > div:nth-child(3) > div > table > tbody > tr:nth-child(" + index + ") > td.first-column",(data) => data.textContent);

    data.title = await page.$eval("#boardList > tbody > tr:nth-child(6) > td:nth-child(3)", (data) => data.textContent);
    
    //data.author = await page.$eval("body > div > div > div:nth-child(3) > div > table > tbody > tr:nth-child(" + index + ") > td:nth-child(3)", (data) => data.textContent);
    
    //data.date = await page.$eval("body > div > div > div:nth-child(3) > div > table > tbody > tr:nth-child(" + index + ") > td:nth-child(5)", (data) => data.textContent);
    
    return Promise.resolve(data);
}

module.exports = router;