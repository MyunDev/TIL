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

\3. 문자형 -> 각각 숫자형

float f = Float.parseFloat(String str);  // String to float

double d = Double.parseDouble(String str); // String to double

byte b = Byte.parseByte(String str); // String to byte

long l = Long.parseLong(String str); // String to long

short s = Short.parseShort(String str); // String to short

\5. 각종 변수형 --> 문자형

String str = String.valueOf(boolean b); // true 또는 false가 str에 저장됩니다.

String str = String.valueOf(char c); // char to String

String str = String.valueOf(char[] data); // char array to String

String str = String.valueOf(double d); // double to String

String str = String.valueOf(float f); // float to String

String str = String.valueOf(long l); // long to String

String str = String.valueOf(Object o); // Object to String , o == null이면 "null" 이 되고 o != null이면 o.toString() 함수의 반환값이 str이 된다.

String str = String.valueOf(char[] data, int offset, int count); // offset 의 index부터 count 개의 문자로 부분문자열 생성



\5. 형식에 맞춰서 문자열로 변환 ( c언어의 printf )

int i; float f;

String str = String.format("%d %f",i,f);



출처 : [http://babytiger.tistory.com/entry/JAVA-%EB%AC%B8%EC%9E%90%EC%97%B4String%EA%B3%BC-%EB%8B%A4%EB%A5%B8-%EB%B3%80%EC%88%98%EB%A1%9Cshort-int-long-float-double-byte%EC%9D%98-%EB%B3%80%ED%99%98](http://babytiger.tistory.com/entry/JAVA-문자열String과-다른-변수로short-int-long-float-double-byte의-변환)



출처: https://sourcestudy.tistory.com/153 [study]