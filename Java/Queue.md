### Java의 Queue

Java의 Queue는 인터페이스 형태이므로 LinkedList 또는 ArrayList를 통해 사용할 수 있습니다.

```java
public static void main(String[] args) {
        // TODO Auto-generated method stub
        Queue<Integer> queue = new LinkedList<Integer>();
        queue.offer(10);
        queue.offer(20);
        queue.offer(30);
        
        while(!queue.isEmpty()) {
            queue.remove();
        }
    }


// 출처: https://swalloow.tistory.com/32 [MyCloud]
```

```java
queue.peek() //큐의 맨 끝에 저장된 객체를 반환
```

