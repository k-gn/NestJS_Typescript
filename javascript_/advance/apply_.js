// this 지정 (매개변수를 배열로 받음)

const mike = {
    name: "mike"
};

const tom = {
    name: "tom"
}

function showThisName() {
    console.log(this.name);
}

showThisName.apply(mike)

function update(birthYear, occupation) {
    this.birthYear = birthYear
    this.occupation = occupation
}

update.apply(mike, [1999, 'singer'])
console.log(mike);