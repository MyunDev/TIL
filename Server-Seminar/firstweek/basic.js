/* -------------------- */
/*   1. 변수 재선언 실습    */
/* -------------------- */

var vv = 123;
var vv = 321;
console.log("vv : ", vv);

//let은 재선언 불가능합니다 재할당은 가능

//이게 재할당
let aa = 123;
aa = 456;

//이건 재선언
let ll = 123;
let ll = 321;
console.log("ll : ", ll);

//const 재할당 불가능, 반드시 초기값 있어야함   
const cc = 123;
const cc = 321;
console.log("cc : ", cc);



/* -------------------- */
/*   2. 변수 재할당 실습    */
/* -------------------- */

// var vv = 'abc';
// vv = 'def';
// console.log("vv : ", vv);

// let ll = 'abc';
// ll = 'def';
// console.log("ll : ", ll);

// const cc = 'abc';
// cc = 'def';
// console.log("cc : ", cc);



/* -------------------- */
/*   3. 변수 초기화 실습    */
/* -------------------- */

// var vv;
// console.log("vv : ", vv);

// let ll;
// console.log("ll : ", ll);

// const cc;
// console.log("cc : ", cc);