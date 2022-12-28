let arr = [1,2,3,4,5]
arr.splice(1,2); // 특정 요소 제거 - splice(시작, 개수, 추가 ...) / 추가될 요소들은 시작 인덱스에 들어감
console.log(arr);

let result = arr.splice(1, 2, 6, 7); // 특정 요소 제거 및 추가, 삭제 요소 반환
console.log(result);
console.log(arr);

let arr2 = [1,2,3,4,5]
arr.slice(1, 4) // n ~ m 까지 반환 (아무것도 안넣으면 배열이 복사된다)

arr.concat([6,7]); // 합쳐서 새 배열 반환

let names = ["mike", "tom", "jane"]
names.forEach((name, index, arr) => {
    console.log(name);
    console.log(index);
})

let arr3 = [1,2,3,4,5,6]
arr3.includes(2)
const result2 = arr3.find((num) => { 
    return num % 2 === 0 // true 일 때 멈춘다.
})

console.log(result2);

const result3 = arr3.filter((num) => { 
    return num % 2 === 0 
})

console.log(result3);

arr3.reverse(); // 역순 정렬

let userList = [
    {name: "mike", age: 30},
    {name: "tom", age: 10},
    {name: "jane", age: 27},
]

let newUserList = userList.map((user, index) => {
    return Object.assign({}, user, {
        isAdult: user.age > 19
    })
})

console.log(newUserList);

let arr4 = ["hi", "i'm", "gyunam"]
let result4 = arr4.join(" ");
console.log(result4); 
console.log(result4.split(" "));

console.log(Array.isArray(userList));


let arr5 = [1,3,5,4,2]
// 배열 재정렬 (인수로 함수를 받음)
function fn(a, b) {
    return a - b // b 가 작으면 앞으로 보내고 a 가 크면 뒤로 보냄
}
arr5.sort(fn) 
console.log(arr5);

// Lodash 같은 라이브러리로 실무에서 많이 배열 정렬 기능을 사용한다.

let arr6 = [1,2,3,4,5]
const result6 = arr6.reduce((prev, cur) => {
    return prev + cur
}, 0)
console.log(result6);