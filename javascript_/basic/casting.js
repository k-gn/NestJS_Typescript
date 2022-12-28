

const result1 = 10;
console.log(typeof result1);

const strResult1 = String(result1)
console.log(typeof strResult1);

const numResult1 = Number(strResult1) // 숫자가 아니라 문자면 NaN, null 은 0
console.log(typeof numResult1);

const autoResult1 = "6" / "2";
console.log(typeof autoResult1);

// 0, '', null, undefined, NaN => false
const boolResult1 = Boolean(autoResult1)
console.log(typeof boolResult1);

console.log(14 == '14');
console.log(14 === '14');