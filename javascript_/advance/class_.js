const User = function(name, age) {
    this.name = name
    this.age = age
    this.showName = function() {
        console.log(this.name)
    }
}

 const mike = new User("mike", 30)

 class User2 {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    showName() {
        console.log(this.name);
    }
 }

 const tom = new User2("tom", 19)

 console.log(mike);
 console.log(tom);

 class Car {
    constructor(color) {
        this.color = color
        this.wheels = 4
    }

    drive() {
        console.log("drive..");
    }
 }

 class Bmw extends Car {
    constructor(color) {
        super(color)
        this.navigation = 1
    }
    park() {
        console.log("park...");
    }
    drive() {
        super.drive()
        console.log("bmw drive..");
    }
 }

 const z4 = new Bmw('black')
 console.log(z4);
 z4.drive();