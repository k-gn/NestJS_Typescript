let sayHello = function() {
    console.log("hello~~");
}

/*
    # arrow function

    1. 한줄이면 return + {} 생략 가능
    2. 한줄이면 () 도 생략 가능
    3. 인수가 하나면 () 생략 가능
    4. 인수가 없으면 () 생략 가능
    5. 여러줄이라면 return + {} 생략 불가능
*/
let arrowAdd = (num1, num2) => num1 + num2 
let arrowAdd2 = num1 => num1 + num1
let arrowAdd3 = num1 => {
    const result = num1 + num1
    return result
} 