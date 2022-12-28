// 구조 분해 할당

// let [a, b, c] = [1, 2]
let [a=3, b=4, c=5] = [1, 2]

let [user1, , user2] = ['mike', 'tom', 'jane', 'tony']

let d = 1;
let f = 2;
[d, f] = [f, d]

let user = {name: 'mike', age: 30}
let {name, age} = user
