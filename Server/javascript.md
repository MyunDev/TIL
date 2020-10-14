```javascript
var year_ad = ad[0].createdat.substring(0, 4);
var month_ad = ad[0].createdat.substring(4, 6);
var day_ad = ad[0].createdat.substring(6, 8);
ad[0].createdat = year_ad + '-' + month_ad + '-' + day_ad;
//글자 파싱하기

//파싱한거 집어 넣기
dataAll.splice(randomNumber, 0, ad[0]);

```

