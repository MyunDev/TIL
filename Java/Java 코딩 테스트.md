자바 접두사 접미사 비교

https://jamesdreaming.tistory.com/86



자바

String.valueOf

arr.parseInt("1004")



문자형 숫자를 형변환하는 메소드 





\1. 문자형 -> 정수형

int i = Integer.parseInt(String str);

\2. 정수형 -> 문자형

String str = Integer.toString(int i);

String str = String.valueOf(int i);  



```java

//배열 정렬하기
Arrays.sort(arr); //오름차순
Arrays.sort(arr, Collections.reverseOrder()); //내림차순

//배열 선언하기
int[] a = new int[8];
int[] b = {1,2,3,4,5};

//배열 특정 범위 빼내기
Arrays.copyOfRange(arr, 2 ,4 ); // 2번째 인자(포함)부터 3번째 인자(미포함) 앞까지 추출)

//문자열 선언
String str = "";

//문자열 시작, 끝 판단
str.startWith(a); // 특정 문자로 시작하는지 판단
str.endWith(a);  //특정 문자로 끝나는지 판단

str.equals(a);  //같은지 아닌지 판단
str.indexOf("a");  //a가 몇번째 위치하는지 숫자를 return함

String[] strArr = str.split("") : 문자열 1개씩 나누어 배열로 반환, 넣는 값을 기준으로 나눌수도있음 (str.split(" ") 
- str.substring(0, 2); : 0부터 1까지 문자열 출력한다
- str.toLowerCase : 모든문자 소문자 변환
- str.toUpperCase : 모든문자 대문자 변환

- str.trim(); : 문자열 빈칸 제거
- String.valueOf(int i) : i를 문자열로 변환  

- str.charAt(i) : i번째 문자 추출

- StringBuilder sb -> sb.toString : StringBuilder을 문자열로 변환 
- sb.append(); : 문자열 뒤에 붙임 

```

