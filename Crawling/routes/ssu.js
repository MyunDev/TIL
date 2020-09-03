var express = require('express');
var router = express.Router();

const puppeteer = require('puppeteer-core');

(async () => {
    const browser = await puppeteer.launch({
        //실제 화면을 띄어준다 싫으면 true로
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
        //await page.goto(`https://scatch.ssu.ac.kr/%ea%b3%b5%ec%a7%80%ec%82%ac%ed%95%ad/page/+${index}+/?f&keyword`);
        await page.goto(`https://scatch.ssu.ac.kr/%EA%B3%B5%EC%A7%80%EC%82%AC%ED%95%AD/?f&keyword`);
        data.push(await getAll(page));
    }
    console.log(data);
    
    

    await page.waitFor(10000);
    await browser.close();
})();

async function getAll(page) {
    let data = [];
    
    const number = await page.$$eval("#contents > div > div > div > div > div > div:nth-child(2) > div > ul > li", (data) => data.length);
    console.log(number);
    // tr태그의 개수를 세어서 줄의 개수를 얻은 후에
    for (let index = 2; index < number; index++) {
        data.push(await getOne(page, index + 1));
        // 각 줄의 정보를 얻어서 배열에 Push
    }

    return Promise.resolve(data);
}

//$가 1개인지 2개인지는 한개를 찾느냐, 모두를 찾냐의 차이다.
//document.querySelector와 document.querySelectorAll

async function getOne(page, index) {

    let data = {};
    let temp =  await page.$("#contents > div > div > div > div > div > div:nth-child(2) > div > ul > li:nth-child(" + index + ") > div > div.notice_col3 > a");
    /*
    data.name = await page.evaluate((data) => {
        return data.textContent;
    }, temp);
    */
    data.link = await page.evaluate((data) => {
        return data.href;
    }, temp);

    //data.number = await page.$eval("body > div > div > div:nth-child(3) > div > table > tbody > tr:nth-child(" + index + ") > td.first-column",(data) => data.textContent);

    data.title = await page.$eval("#contents > div > div > div > div > div > div:nth-child(2) > div > ul > li:nth-child(" + index + ") > div > div.notice_col3 > a > span > span.d-inline-blcok.m-pt-5", (data) => data.textContent);
    
    data.author = await page.$eval("#contents > div > div > div > div > div > div:nth-child(2) > div > ul > li:nth-child(" + index + ") > div > div.notice_col4", (data) => data.textContent);
                                    
    data.date = await page.$eval("#contents > div > div > div > div > div > div:nth-child(2) > div > ul > li:nth-child(" + index + ") > div > div.notice_col1.m-text-left > div", (data) => data.textContent);
    
    return Promise.resolve(data);
}

module.exports = router;

/**
 * https://stackoverflow.com/questions/47122579/run-puppeteer-on-already-installed-chrome-on-macos
 * chrome://version/ 을 통해서 크롬 실행경로 찾음
 * npm i puppeteer-core 으로 core를 사용해야 함 아니면 깃에 못올림 Chromeier가 너무큼
 * npm i puppeteer-core 사용하면 크롬 실행경로 필수로 세팅해야함
 * You will then need to call puppeteer.connect([options]) or puppeteer.launch([options]) with an explicit executablePath option.
 * https://github.com/puppeteer/puppeteer/blob/main/docs/api.md?spm=a2c6h.14275010.0.0.4d83be87cBp4IU#puppeteer-vs-puppeteer-core
 * puppeteer은 크롬이어에서 가장 원활하게 작동됨
 */