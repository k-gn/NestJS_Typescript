
let car1:string = "bmw"
let car2 = "audi"

let age = 30
let isAdult = true
let a = [1,2,3]
let b:Array<number> = [1,2,3]

// tuple
let c:[string, number];
c = ['c', 1];

// void, never
function sayHello():void { // void 생략 가능
    console.log('hello')
}

// never : 영원히 끝나지 않거나, 예외를 던질 때 사용
function showError():never { // never 생략 가능
    throw new Error();
}

// enum
enum Os {
    Window = 3,
    Ios = 10,
    Android
}

// 타입 강제하기
let myOs:Os
myOs = Os.Window

// null, undefined
let f:null = null
let g:undefined = undefined
