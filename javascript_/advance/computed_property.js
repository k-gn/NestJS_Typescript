let a = "age";

const user = {
    name: "Mike",
    [a]: 30,
}

function makeObj(key, val) {
    return {
        [key]: val
    }
}

console.log(user);

// Object.assign() : 객체 복제 or 병합
const cloneUser = Object.assign({}, user);


const user2 = {
    name: 'Mike',
    age: 30,
    gender: 'male'
}

// Object.keys() : 키 배열 반환
console.log(Object.keys(user));

// Object.values() : 값 배열 반환
console.log(Object.values(user));

// Object.entries() : 키/값 배열 반환
console.log(Object.entries(user));

// Object.fromEntries() : 키/값 배열을 객체로
console.log(Object.fromEntries([ [ 'name', 'Mike' ], [ 'age', 30 ] ]));
