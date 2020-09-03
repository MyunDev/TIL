const dog = {name: "아리", family: "웰시코기", age: 1, weight: 2.14}; // Javascript 객체
 
const data = JSON.stringify(dog); // Javscript 객체를 문자열로 변환
document.getElementById("json").innerHTML = data;

console.log(data);

const data = '{"name": "아리", "family": "웰시코기", "age": 1, "weight": 2.14}'; // JSON 형식의 문자열
 
const dog = JSON.parse(data); // JSON 형식의 문자열을 Javscript 객체로 변환
document.getElementById("json").innerHTML = dog + "<br>";
document.getElementById("json").innerHTML += dog.name + ", " + dog.family;

const date = new Date(); // Javscript Date 객체
const str = date.toJSON(); // Date 객체를 JSON 형식의 문자열로 변환
 
document.getElementById("json").innerHTML = date + "<br>";
document.getElementById("json").innerHTML += str;