function showName(name) {
    console.log(name);
}

showName('mike')
showName('mike', 'tom')

function showNames(age, ...names) {
    console.log(age);
    console.log(names);
}

showNames(30, 'mike')
showNames(25, 'mike', 'tom')

let user = {name: "mike"}
let info = {age: 30}
let fe = ["js", "ts"]

user = {
    ...user,
    ...info,
    skills: [...fe]
}
console.log(user);