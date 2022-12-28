function User(name, age) {
    this.name = name;
    this.age = age;

    this.sayName = function() {
        console.log(this.name);
    }
}

const Mike = new User("mike", 30)
console.log(Mike);