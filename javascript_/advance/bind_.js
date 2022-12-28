// this 값을 영구히 바꿈

const mike = {
    name: "mike"
};

function update(birthYear, occupation) {
    this.birthYear = birthYear
    this.occupation = occupation
}

const updateMike = update.bind(mike)
updateMike(1980, 'police')

console.log(mike);