var express = require('express');
var router = express.Router();
const https = require("https");
const axios = require("axios");
const cheerio = require("cheerio");
const iconv = require('iconv-lite');

const soongsil = 'https://scatch.ssu.ac.kr/%ea%b3%b5%ec%a7%80%ec%82%ac%ed%95%ad/?category=%ED%95%99%EC%82%AC&f=all&keyword=%EC%A2%85%ED%95%A9%EA%B0%95%EC%9D%98';
//https://scatch.ssu.ac.kr/공지사항/?category=&f=all&keyword=종합강의
const sg_BaseUrl = 'https://scatch.ssu.ac.kr/%ea%b3%b5%ec%a7%80%ec%82%ac%ed%95%ad/' //https://scatch.ssu.ac.kr/공지사항/
const sg_parentTag = '#contents > div > div > div > div > div > div:nth-child(2) > div > ul ' 
const sg_isOverlapped = 1;
const sg_isOffset = false;
const sg_num = 'td:nth-of-type(1)';
const sg_title = 'li:nth-child(2) > div > div.notice_col3 > a > span > span.d-inline-blcok.m-pt-5'
const sg_link = 'li:nth-child(2) > div > div.notice_col3 > a'
const sg_author = 'li:nth-child(2) > div > div.notice_col4';
const sg_createdAt = 'li:nth-child(2) > div > div.notice_col1.m-text-left > div';
const sg_fixLabel = '';

const incheon = 'http://www.inu.ac.kr/user/boardList.do?boardId=49211&siteId=inu&id=inu_070202000000&column=&search=&page=';
const ic_BaseUrl = 'http://www.inu.ac.kr/user/'
const ic_parentTag = 'div.tbList table tbody tr'
const ic_isOverlapped = 1;
const ic_num = 'td:nth-of-type(1)';
const ic_title = 'td:nth-of-type(2)'
const ic_link = 'td:nth-of-type(2) a'
const ic_author = 'td:nth-of-type(3)';
const ic_createdAt = 'td:nth-of-type(4)';
const ic_fixLabel = '';
const instance = axios.create({
    httpsAgent: new https.Agent({
        rejectUnauthorized: false
    })
});

const getHtml = async (menuUrl, page, isOffset) => {
    try {
        let pageNum = page;
        if (isOffset) {
            pageNum = (page - 1) * 10
        }
        return await instance.get(`${menuUrl}${pageNum}`, {
            responseType: 'arraybuffer',
            responseEncoding: 'binary'
        })
    } catch (error) {
        console.error(error);
    }
};

const getSearchHtml = async(menuUrl, page, searchKeyword) => {
    try{
        let encodedSearchKeyword = encodeURI(searchKeyword)
        let api = `https://scatch.ssu.ac.kr/%ea%b3%b5%ec%a7%80%ec%82%ac%ed%95%ad/?category=%ED%95%99%EC%82%AC&f=all&keyword= + ${encodedSearchKeyword}`;
        return await axios.get(api);
    } catch(error){
        console.error(error);
    }
}

const crawl = async (menuUrl, isOffset, parentTag, isOverlapped, numTag, fixLabel, baseUrl, linkTag, titleTag, authorTag, createdAtTag) => {
    let list = [];
    for (let p = 1; list.length < 50; p++) {
        await getHtml(menuUrl, p, isOffset).then(html => {
            result = iconv.decode(html.data, "utf-8").toString();
            let $ = cheerio.load(result);
            let $noticeList = $(parentTag);
            let author = '';
            $noticeList.each(function (i) {
                if (authorTag !== '') {
                    author = $(this).find(authorTag).text().replace(/\t/g, '').replace(/\n/g, '').trim()
                }
                let idx = $(this).find(numTag).text().trim()
                let title = $(this).find(titleTag).text().replace(/\t/g, '').replace(/\n/g, '').trim()
                let createdAt = $(this).find(createdAtTag).text().replace(/\t/g, '').replace(/\n/g, '').trim()
                let link = baseUrl + $(this).find(linkTag).attr("href")

                if (idx === fixLabel) {
                    // 디비에서 상단공지인 애들 중 젤 마지막 애 들고와서 title 비교.
                    // 같지 않으면 추가.
                    // 같으면 상단공지는 이제 그만.
                } else {
                    // 상단공지 [중복]
                    if (isOverlapped === 1) {
                        list.push({
                            idx: idx,
                            title: title,
                            author: author,
                            createdAt: createdAt,
                            link: link
                        });
                    }
                    // 일반공지도 마찬가지로
                    // 같으면 크롤링 중단.
                }
            });
        })
    }
    return list;
};

const getSearchHtml = async(menuUrl, page, searchKeyword) => {
    try{
        let encodedSearchKeyword = encodeURI(searchKeyword)
        let api = `https://scatch.ssu.ac.kr/%ea%b3%b5%ec%a7%80%ec%82%ac%ed%95%ad/?category=%ED%95%99%EC%82%AC&f=all&keyword= + ${encodedSearchKeyword}`;
        return await axios.get(api);
    } catch(error){
        console.error(error);
    }
}

const crawlSearch = async (menuUrl, isOffset, parentTag, isOverlapped, numTag, fixLabel, baseUrl, linkTag, titleTag, authorTag, createdAtTag) => {
    let list = [];
    for (let p = 1; list.length < 50; p++) {
        await getSearchHtml(menuUrl, p, isOffset).then(html => {
            result = iconv.decode(html.data, "utf-8").toString();
            let $ = cheerio.load(result);
            let $noticeList = $(parentTag);
            let author = '';
            $noticeList.each(function (i) {
                if (authorTag !== '') {
                    author = $(this).find(authorTag).text().replace(/\t/g, '').replace(/\n/g, '').trim()
                }
                let idx = $(this).find(numTag).text().trim()
                let title = $(this).find(titleTag).text().replace(/\t/g, '').replace(/\n/g, '').trim()
                let createdAt = $(this).find(createdAtTag).text().replace(/\t/g, '').replace(/\n/g, '').trim()
                let link = baseUrl + $(this).find(linkTag).attr("href")

                if (idx === fixLabel) {
                    // 디비에서 상단공지인 애들 중 젤 마지막 애 들고와서 title 비교.
                    // 같지 않으면 추가.
                    // 같으면 상단공지는 이제 그만.
                } else {
                    // 상단공지 [중복]
                    if (isOverlapped === 1) {
                        list.push({
                            idx: idx,
                            title: title,
                            author: author,
                            createdAt: createdAt,
                            link: link
                        });
                    }
                    // 일반공지도 마찬가지로
                    // 같으면 크롤링 중단.
                }
            });
        })
    }
    return list;
};

const main = async () => {
    const result = await crawlSearch(soongsil, sg_isOffset, sg_parentTag, sg_isOverlapped, sg_num, sg_fixLabel, sg_BaseUrl, sg_link, sg_title, sg_author, sg_createdAt)
    // 좀 특별한 경우는 다시 여기서 돌려서 정제를 하셈.
    // ex : 이상한 문자가 있거나.....etc
    console.log(result)
}

main();

module.exports = router;