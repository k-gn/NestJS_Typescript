// 문자열 리터럴 타입
type Score = 'A' | 'B' | 'C' | 'F'

// property 를 정의하여 객체로 표현하기 위해 interface 를 사용한다.
interface User {
    name: string
    age: number
    gender?: string
    readonly birth: number
    [grade: number]: Score 
}

let user: User = {
    name: 'xx',
    age: 30,
    birth: 2000,
    1: 'A',
    2: 'B',
}

user.age = 30;
user.gender = "male"

interface Add {
    (num1:number, num2:number): number
}

const addFun: Add = function(x, y) {
    return x + y
}

interface Car {
    color: string
    wheels: number
    start(): void
}

interface Toy {
    name: string
}

interface Benz extends Car {
    door: number
}

interface ToyCar extends Car, Toy {
    price: number
}

class Bmw implements Car {
    color
    wheels = 4
    constructor(c: string) {
        this.color = c
    }

    start() {
        console.log("go...")
    }
}

