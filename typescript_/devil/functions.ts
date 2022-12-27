function hello(name?: string) {
    return `Hello, ${name}`
}

function hello2(name = "world") { // default
    return `Hello, ${name}`
}

// function hello3(age?: number, name: string) { // optional 한 값은 먼저올 경우 기본적으로 예외가 발생함
//     return `Hello, ${name}`
// }

function hello3(age: number | undefined, name: string) { // 먼저 쓰고 싶으면 이렇게 바꿔야한다.
    return `Hello, ${name}`
}

hello3(undefined, "Sam ")

function add(...nums: number[]) {
    return nums.reduce((result, num) => result + num, 0)
}

add(1, 2, 3)


interface Boy {
    name: string
}

const Sam: Boy = {name: 'Sam'}

function showName(this: Boy, age: number) {
    console.log(this.name, age)
}

const bindSam = showName.bind(Sam) // this 를 Sam 으로 강제
bindSam(26)

interface Girl {
    name: string
    age: number
}

function join(name: string, age: string): string;
function join(name: string, age: number): Girl;
function join(name: string, age: number | string): Girl | string {
    if (typeof age === "number") {
        return {
            name,
            age
        }
    } else {
        return "나이는 숫자로 입력하세요."
    }
}

