// this 지정

const mike = {
    name: "mike"
};

const tom = {
    name: "tom"
}

function showThisName() {
    console.log(this.name);
}

showThisName.call(mike)

function update(birthYear, occupation) {
    this.birthYear = birthYear
    this.occupation = occupation
}

update.call(mike, 1999, 'singer')
console.log(mike);