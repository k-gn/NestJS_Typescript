let num = 10;

// 진수
console.log(num.toString);
console.log(num.toString(2));
console.log(num.toString(16));

console.log(Math.PI);

let num1 = 5.1 
console.log(Math.ceil(num1)); // 올림
console.log(Math.floor(num1)); // 내림
console.log(Math.round(num1)); // 반올림

let rate = 30.1234
// 소수점 둘째다리까지 표현
console.log(Math.round(rate * 100) / 100);
console.log(Number(rate.toFixed(2)));

console.log(isNaN(Number('x')));

let redColor = '10.5f';
console.log(parseInt(redColor));
let padding = '18.5%';
console.log(parseFloat(padding));

console.log(Math.random());

console.log(Math.max(1,2,3,4,5));
console.log(Math.min(1,2,3,4,5));
console.log(Math.abs(-1)); // 절대값
console.log(Math.pow(2, 10)); // n 의 m 제곱
console.log(Math.sqrt(16)); // 제곱근
