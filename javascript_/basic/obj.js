const superman = {
    name: 'clark',
    age: 33,
}

const name = 'clark'
const age = 33

const superman2 = {
    name,
    age,
}

console.log(superman);
console.log(superman2);
console.log('age' in superman); // prop 여부 확인

superman.hairColor = 'black'
superman['hobby'] = 'soccer'

// 객체 순회 반복문
for(let key in superman) {
    console.log(key)
    console.log(superman[key])
}

delete superman.age;

console.log(superman);

function makeSuperman(name, age) {
    return {
        name,
        age,
    }
}

const Mike = makeSuperman('mike', 30);
console.log(Mike);

function isAdult(user) {
    if (!('age' in user) || user.age < 20) {
        return false 
    }
    return true
}

console.log(isAdult(Mike));