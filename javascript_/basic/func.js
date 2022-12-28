let wel = "welcome"

function hello(name) {
    let newName = name || 'friend'
    let wel = "welcome~~"
    // if (name) {
    //     console.log(`hello ${name}! ${wel}`);
    // }
    console.log(`${newName} ${wel}`);
}

hello()
hello("gyul")
console.log(wel);

function say(name = 'friend') {
    console.log(`say ${name}`);
}
say()


function add(num1, num2) {
    return num1 + num2
}

const resultAdd = add(1, 2)
console.log(resultAdd);