let days = ["월", "화"]
days.push('수')

console.log(days);
console.log(days.length);

days.pop()
console.log(days);

days.unshift('토', '일') // 앞에 추가
console.log(days);

days.shift() // 앞에 제거
console.log(days);

for(let i=0; i<days.length; i++) {
    console.log(days[i]);
}

days[1] = "mon"

for(let day of days) {
    console.log(day);
}