const superman = {
    name: 'clark',
    age: 33,
    fly() {
        console.log("i can fly!");
    }
}

const user = {
    name: 'mike',
    sayHello() {
        console.log(`hello, i'm ${this.name}`); // this - 실행 시점에 결정됨
    }
}

// 화살표 함수는 this 를 가지지 않음, 따라서 화살표 함수 내부에서 this 사용 시 외부에서 값을 가져옴