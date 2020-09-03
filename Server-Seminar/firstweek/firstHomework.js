var randomBox = {
    box : "apple",
    tool: "hammer"
}

//객체 접근
console.log(randomBox.box);
console.log(randomBox['box']);

var students = [
    { name: '김김김', nickName: '웰시코기', age: 27},
    { name: '이이이', nickName: '치와와', age: 1},
    { name: '박박박', nickName: '마이크', age: 1},
    { name: '최최최', nickName: '하이', age: 1},
    { name: '정정정', nickName: '헬로우', age: 1}
];

//

//객체접근
//students[idx].key1
//students[idx]['key1']

students.forEach( 
    student => console.log(student.name+'이는 별명이 '+student.nickName+'이고, 나이가 '+student.age+'세입니다 ~')
    );


for (var item of students){
    return item;
}

for (var index in students){
    return students[index];
}

var randomBox = {
    box : apple,
    tool: hammer
}

console.log(randomBox.box);