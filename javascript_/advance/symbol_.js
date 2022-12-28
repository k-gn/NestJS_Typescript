/*
    # Symbol 
    - 유일한 식별자 (유일성 보장)
    - new 를 붙이지 않고 생성한다.
*/

const a = Symbol();
console.log(a);

const b = Symbol('b');
console.log(b);

const id = Symbol('id');
const user = {
    name: 'mike',
    age: 30,
    [id]: 'myId'
}

for (let key in user) { // symbol 은 안보임
    console.log(`${key} is ${user[key]}`);
}

