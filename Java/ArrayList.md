### ArrayList

1. ArrayList란?

   * ArrayList는 List 인터페이스를 상속받은 클래스로 크기가 가변적으로 변하는 선형리스트입니다. 일반적인 배열과 같은 순차리스트이며 인덱스로 내부의 객체를 관리한다는점등이 유사하지만 한번 생성되면 크기가 변하지 않는 배열과는 달리 ArrayList는 객체들이 추가되어 저장 용량(capacity)을 초과한다면 **자동으로 부족한 크기만큼 저장 용량(capacity)이 늘어난다는 특징**을 가지고 있습니다

     //

2. ArrayList 선언

   * ```java
     ArrayList list = new ArrayList();//타입 미설정 Object로 선언된다.
     ArrayList<Student> members = new ArrayList<Student>();//타입설정 Student객체만 사용가능
     ArrayList<Integer> num = new ArrayList<Integer>();//타입설정 int타입만 사용가능
     ArrayList<Integer> num2 = new ArrayList<>();//new에서 타입 파라미터 생략가능
     ArrayList<Integer> num3 = new ArrayList<Integer>(10);//초기 용량(capacity)지정
     ArrayList<Integer> list2 = new ArrayList<Integer>(Arrays.asList(1,2,3));//생성시 값추가
     ```

   * ArrayList선언시 ArrayList list = new ArrayList()로 선언 후 내부에 임의의 값을 넣고 사용할수도 있지만 이렇게 사용할경우 값을 뽑아내기 위해서는 캐스팅(Casting) 연산이 필요하고 잘못된 타입으로 캐스팅을 한 경우에는 에러가 발생

   * ArrayList를 사용할시에는 ArrayList에 타입을 명시해주는것이 좋다. JDK 5.0이후부터 자료형의 안정성을 위해 제너릭스(Generics)라는 개념이 도입되었다. **ArrayLIst<String> list = new ArrayList<String>();** 이라고 되어있다면 String객체들만 add되어질수있고 다른 타입의 객체는 사용이 불가능하다.

3. ArrayList 값 추가

   * ```java
     ArrayList<Integer> list = new ArrayList<Integer>();
     list.add(3); //값 추가
     list.add(null); //null값도 add가능
     list.add(1,10); //index 1뒤에 10 삽입
     ```

   * ```java
     ArrayList<Student> members = new ArrayList<Student>();
     Student student = new Student(name,age);
     members.add(student);
     members.add(new Member("홍길동",15));
     ```

   * ArrayList에 값을 추가하려면 ArrayList의 add(index, value) 메소드를 사용.

   *  index를 생략하면 ArrayList 맨 뒤에 데이터가 추가

   *  index중간에 값을 추가하면 해당 인덱스부터 마지막 인덱스까지 모두 1씩 뒤로 밀려sksek 

     

4. ArrayList 값 삭제 

   * ```java
     ArrayList<Integer> list = new ArrayList<Integer>(Arrays.asList(1,2,3));
     list.remove(1);  //index 1 제거
     list.clear();  //모든 값 제거
     ```

   * ArrayList에 값을 제거하려면 ArrayList의 remove(index) 메소드를 사용하면 된다.  

   * 인덱스부터 마지막 인덱스까지 모두 앞으로 1씩 당겨짐. 

   * 모든 값을 제거하려면 clear() 메소드를 사용하면 된다.

     

5. ArrayList 크기 구하기

   * ```java
     ArrayList<Integer> list = new ArrayList<Integer>(Arrays.asList(1,2,3));
     System.out.println(list.size()); //list 크기 : 3
     ```

   * ArrayList.size() 메소드를 사용

     

6. ArrayList 값 출력

   * ```java
     ArrayList<Integer> list = new ArrayList<Integer>(Arrays.asList(1,2,3));
     
     System.out.println(list.get(0));//0번째 index 출력
     		
     for(Integer i : list) { //for문을 통한 전체출력
         System.out.println(i);
     }
     
     Iterator iter = list.iterator(); //Iterator 선언 
     while(iter.hasNext()){//다음값이 있는지 체크
         System.out.println(iter.next()); //값 출력
     }
     ```

   * ArrayList의 get(index) 메소드를 사용하면 ArrayList의 원하는 index의 값이 리턴된다. 

   * 전체출력은 대부분 for문을 통해서 출력을하고 Iterator를 사용해서 출력을 할수도 있습니다.

     

7. ArrayList 값 검색

   * ```java
     ArrayList<Integer> list = new ArrayList<Integer>(Arrays.asList(1,2,3));
     System.out.println(list.contains(1)); //list에 1이 있는지 검색 : true
     System.out.println(list.indexOf(1)); //1이 있는 index반환 없으면 -1
     ```

   * ArrayList에서 찾고자 하는 값을 검색하려면 ArrayList의 contains(value) 메소드를 사용. 

   * 만약 값이 있다면 true가 리턴되고 값이 없다면 false가 리턴. 

   * 값을 있는 index를 찾으려면 indexOf(value) 메소드를 사용하면 되고 만약 값이 없다면 -1을 리턴