### JSON

Json 이란

* 네트워크를 통해 데이터를 주고받는 데 자주 사용되는 경량의 데이터 형식이다.

* Javascript에서 객체를 만들 때 사용하는 표현식

* 어떠한 통신 방법이나 프로그래밍 문법을 의미하는게 아닌, 단순히 데이터를 표시하는 언어 독립형 표현 방법이다.

* ```json
  { 
  	"nickname": "chloe",
  	"age": 26,
  	"hobby": [ "game", "cooking", "tennis" ] // object 안에 array
  	"favoriteFood": {
  		"1": "chicken", 
  		"2": "rawFish", 
  		"3": "tiramisu" 
  	} //object 안에 object
  } // object
  ```

* {key : value}로 이루어진다.

* Key인 애들은 무조건 String 이어야 한다.

* Value에는 String, number, null, boolean 등의  기본 자료형 또는 array[], object {} 가 들어갈 수 있다. 

* { } : 중괄호로 object 시작!

* []: 대괄호로  array 시작

  * 객체는 반드시 name-value의 쌍이라는 조건만 만족한다면 배열안에 객체도 들어갈 수 있다.

  * ```json
    [10, {"b" : 26}, [30, "c"]]
    ```

***

### XML vs JSON

1. XML(EXtensible Markup Language)

* HTML 에서 출발한 표현식이기 때문에 데이터 값 양쪽으로 태그가 들어간다.

* 다만, JSON과 마찬가지로 HTML의 태그를 따라가는게 아닌, 데이터를 저장하고 전달하기 위해 표현식만 가져온것이기 때문에 HTML 태그처럼 태그명이 미리 정의되어 있지 않고 사용자가 직접 정의할 수 있다.

* ```xml
  <dog> => 형식은 HTML처럼 <></>태그를 사용하지만, 태그명은 사용자가 정의
      <name>아리</name>
      <family>웰시코기<family>
      <age>1</age>
      <weight>2.14</weight>
  </dog>
  
  ```

* >데이터의 검증을 사용자가 직접 해야하는 JSON과 달리 XML은 DTD, 스키마를 이용해 검증이 가능하기 때문에 JAVA나 C#처럼 엄격한 타입 시스템의 언어들에서 많이 사용된다.



2. JSON
   * 용량이 작고 파싱이 속도가 빨라서 자바스크립트에서 주로 사용되고, HTML과 연동되어 빠른 응답이 필요힌 웹 환경에서 많이 사용된다.
   * 문제점: JSON 데이터 뿐만 아니라, javascript 자체도 전달할 수 있다. 단순한 JSON 데이터인줄 알고받았다가 , 악성 스크립트가 실행될 수 있다는 것. 이런 보안상의 문제가 있기 때문에 순수한 데이터만 추출하기 위해 JSON 관련 라이브러리르 따로 사용하기도 한다.



### JSON parsing

🤷🏻‍♀️ JSON을 파싱?
⇒ JSON data의 형태를 이해하고 데이터를 사용할 수 있도록 분석

(예를 들어 java의 JsonObject와 JsonArray가 JSON을 파싱하는데 이용된다.)

JavaScript에서는 JSON 데이터를 처리하기 위해 다음과 같은 메서드를 제공한다.

1.JSON.stringify()

인수로 전달받은 Javascript 객체를 문자열로 변환하여 반환

```javascript
const dog = {name: "아리", family: "웰시코기", age: 1, weight: 2.14}; // Javascript 객체
 
const data = JSON.stringify(dog); // Javscript 객체를 문자열로 변환
//html 요소에 접근
//https://meaningone.tistory.com/316 
document.getElementById("json").innerHTML = data;

console.log(data);
```



2. JSON.parse()

   * JSON.stringify() 메서드와 반대로 인수로 전달받은 문자열을 자바 스크립트 객체로 변환하여 반환

   * ```javascript
     const data = '{"name": "아리", "family": "웰시코기", "age": 1, "weight": 2.14}'; // JSON 형식의 문자열
      
     const dog = JSON.parse(data); // JSON 형식의 문자열을 Javscript 객체로 변환
     document.getElementById("json").innerHTML = dog + "<br>";
     document.getElementById("json").innerHTML += dog.name + ", " + dog.family;
     ```

3. toJSON()

   * 자바스크립트의 Date 객체의 데이터를 JSON 형식의 문자열로 변환하여 반환

     ⇒ 이 메서드는 `Date.prototype 객체`에서만 사용 가능

   * ```javascript
     const date = new Date(); // Javscript Date 객체
     const str = date.toJSON(); // Date 객체를 JSON 형식의 문자열로 변환
      
     document.getElementById("json").innerHTML = date + "<br>";
     document.getElementById("json").innerHTML += str;
     ```

