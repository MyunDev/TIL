//자바 스크립트는 싱글 스레드이기 때문에 1.5초 뒤에 실행되어야할 stTimeout function이 실행되지 않는다

function yo(){
    //1.5초 뒤에 타이머 끝 콘솔로그를 찍음
    //setTimeout은 1.5초 뒤에 큐에다가 setTimeout에서 정의된 함수를 넘겨주는 역할 뿐
    setTimeout(function (){
        console.log('1.5초 뒤에 타이머 끝!');
    }, 1500);

    for(let i=0; i<3; i++){
        doSomething() //가정: 매번 1초가 걸리는 일
        console.log(i)
    }
    console.log('3초가 걸리는 for문 끝!')
}

yo();

console.log('main 끝!')

// 0 1 2 
//3초가 걸리는 for문 끝!, 
//main 끝! 
//1.5초 뒤에 타이머끝! 의 순서로 출력된다

//콜스택은 하나여서 하던 동작을 멈출 수 없다
//setTimeout은 1.5초 뒤에 큐에다가 setTimeout에서 정의된 함수를 넘겨주는 역할 뿐