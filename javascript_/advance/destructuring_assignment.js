// 구조 분해 할당

// let [a, b, c] = [1, 2]
// let [a=3, b=4, c=5] = [1, 2] // default

// let [user1, , user2] = ['mike', 'tom', 'jane', 'tony']

let d = 1;
let f = 2;
[d, f] = [f, d]

// let user = {name: 'mike', age: 30}
// let {name, age} = user


let [a, b, c] = "abc"; // ["a", "b", "c"]
let [one, two, three] = new Set([1, 2, 3]);

let user = {
    name: "John",
    age: 30
  };
  
// 객체의 키와 값 순회하기
for (let [key, value] of Object.entries(user)) {
    console.log(`${key}:${value}`); // name:John, age:30이 차례대로 출력
}

let user2 = new Map();
user2.set("name", "John");
user2.set("age", "30");

for (let [key, value] of user2) {
    console.log(`${key}:${value}`); // name:John, then age:30
}

let options = {
    title: "Menu",
    // width: 100,
    // height: 200
  };
  
// { 객체 프로퍼티: 목표 변수 }
// let {width: w, height: h, title} = options;
let {width = 100, height = 200, title} = options;

// width -> w
// height -> h
// title -> title

console.log(title);  // Menu
console.log(w);      // 100
console.log(h);      // 200


let options2 = {
    title2: "Menu",
    height: 200,
    width: 100
  };
  
// title = 이름이 title인 프로퍼티
// rest = 나머지 프로퍼티들
let {title2, ...rest} = options;

// 함수에 전달할 객체
let options3 = {
    title: "My menu",
    items: ["Item1", "Item2"]
};

// 똑똑한 함수는 전달받은 객체를 분해해 변수에 즉시 할당함
function showMenu({title = "Untitled", width = 200, height = 100, items = []}) {
// title, items – 객체 options에서 가져옴
// width, height – 기본값
}
showMenu(options);

function showMenu2({
    title = "Untitled",
    width: w = 100,  // width는 w에,
    height: h = 200, // height는 h에,
    items: [item1, item2] // items의 첫 번째 요소는 item1에, 두 번째 요소는 item2에 할당함
}) {

}


function showMenu3({ title = "Menu", width = 100, height = 200 } = {}) {
}
  
showMenu3(); // Menu 100 200