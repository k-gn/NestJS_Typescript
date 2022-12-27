abstract class cCar { // 추상 클래스 (new 로 생성 불가)

    // #name: string = "car" // private
    readonly name: string = "car"

    static wheels = 4; // static variable

    // color: string
    constructor(public color: string, name: string) {
        this.color = color
        this.name = name
    }

    start() {
        console.log("Start")
    }

    abstract doSomething():void
}

class cBmw extends cCar {
    constructor(color: string) {
        super(color, "gyul")
    }

    doSomething(): void {
        console.log(cCar.wheels)
    }
}

console.log(cCar.wheels)

const z4 = new cBmw("black")