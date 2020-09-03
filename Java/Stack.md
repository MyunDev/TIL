### Stack 

자바에서는 Stack 클래스를 따로 지원해 준다.

```java
Stack<Element> stack = new Stack<>();
```

Stack 클래스가 지원해 주는 함수

```java
public Element push(Element item); // 데이터 추가
public Element pop(); // 최근에 추가된(Top) 데이터 삭제
public Element peek(); // 최근에 추가된(Top) 데이터 조회
public boolean empty(); // stack의 값이 비었는지 확인, 비었으면 true, 아니면 false
public int seach(Object o); // 인자값으로 받은 데이터의 위치 반환
```



Stack 함수 예제

```java
Stack<Integer> stack = new Stack<>();
        for (int i = 0; i < 5; i++) {
            stack.push(i + 1);
            System.out.println(stack.peek());
        } // 1, 2, 3, 4, 5 가 현재 들어가 있음
        stack.pop(); // 1, 2, 3, 4
        System.out.println(stack.peek()); // 4
        System.out.println(stack.search(1)); // 4
        System.out.println(stack.empty()); // false
```

search는 인덱스를 반환하는 것이 아니라 순번을 반환한다. 즉 search의 인자 값으로 받은 값이 스택구조에서 몇번째에 있는지를 반환하는 것이다. 

<img src = "../img/스크린샷 2020-08-29 오전 1.31.50.png" width = "100%">

참고주소: [https://velog.io/@lshjh4848/Java-%EC%8A%A4%ED%83%9DStack-%ED%81%B4%EB%9E%98%EC%8A%A4-%EC%A0%95%EB%A6%AC](https://velog.io/@lshjh4848/Java-스택Stack-클래스-정리)

