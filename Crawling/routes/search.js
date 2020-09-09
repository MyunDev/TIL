var express = require('express');
var router = express.Router();
const https = require("https");
const axios = require("axios");
const cheerio = require("cheerio");
const iconv = require('iconv-lite');

const soongsil = 'https://scatch.ssu.ac.kr/%ea%b3%b5%ec%a7%80%ec%82%ac%ed%95%ad/?category=%ED%95%99%EC%82%AC&f=all&keyword=%EC%A2%85%ED%95%A9%EA%B0%95%EC%9D%98';
//https://scatch.ssu.ac.kr/공지사항/?category=&f=all&keyword=종합강의
const sg_BaseUrl = 'https://scatch.ssu.ac.kr/%ea%b3%b5%ec%a7%80%ec%82%ac%ed%95%ad/' //https://scatch.ssu.ac.kr/공지사항/
const ic_parentTag = '#contents > div > div > div > div > div > div:nth-child(2) > div > ul ' 
const ic_isOverlapped = 1;
const ic_num = 'td:nth-of-type(1)';
const ic_title = 'li:nth-child(2) > div > div.notice_col3 > a > span > span.d-inline-blcok.m-pt-5'
const ic_link = 'li:nth-child(2) > div > div.notice_col3 > a'
const ic_author = 'li:nth-child(2) > div > div.notice_col4';
const ic_createdAt = 'li:nth-child(2) > div > div.notice_col1.m-text-left > div';
const ic_fixLabel = '';