function makeCounter() {
    let num = 0;

    return function() { // 내부 함수는 외부 함수의 변수를 기억한다.
        return num++
    }
}

let counter = makeCounter()

console.log(counter());
console.log(counter());
console.log(counter());