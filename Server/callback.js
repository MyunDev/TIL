
function fakeSetTimeout(callback, delay){
    callback();
}

//동기적인 처리 방법 
console.log(0);
fakeSetTimeout(function(){
    console.log('hello');
}, 0);

console.log(1);
//0, hello, 1이 찍힘



/**
 * 비동기적인 처리방법
 * console.log(0);
 * SetTimeout(function(){
 * console.log('hello')
    }, 0);
    console.log(1);

    0,1,hello가 찍힘
 */