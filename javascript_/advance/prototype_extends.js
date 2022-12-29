const car = {
    wheels: 4,
    drive() {
        console.log("drive...");
    }
}

const bmw = {
    color: "red",
}

const benz = {
    color: "black",
}

const audi = {
    color: "blue",
}

// 숨겨진 요소 느낌
// 중복 코드 제거 가능
// 프로토타입 체인 가능
bmw.__proto__ = car;
benz.__proto__ = car;
audi.__proto__ = car;

// console.log(bmw);
// console.log(bmw.hasOwnProperty());
// console.log(bmw.wheels);

// for (p in bmw) {
//     if (bmw.hasOwnProperty(p)) {
//         console.log(p);
//     } else {
//         console.log('x', p);
//     }
// }


const Jeep = function (color) {
    const c = color; // 생성 시에만 변경 가능함
    this.getColor = function() {
        return c
    }
    // this.color = color;
}

Jeep.prototype.wheels = 4;
Jeep.prototype.drive = function() {
    console.log("drive..");
}

// 이 방법은 constructor 가 사라져서 직접 명시해야함
// Jeep.prototype = {
//     constructor: Jeep,
//     wheels: 4,
//     drive() {
//         console.log("drive..");
//     }
// }

const r = new Jeep("red")
const b = new Jeep("blue")


console.log(r.getColor());
console.log(b.color);


// for (p in r) {
//     if (bmw.hasOwnProperty(p)) {
//         console.log(p);
//     } else {
//         console.log('x', p);
//     }
// }

// console.log(r instanceof Jeep);
// console.log(b instanceof Jeep);
// console.log(b.constructor === Jeep);