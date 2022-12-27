const userName1 = "bob"
let userName2: string | number = "tom"

type Job = "police" | "developer" | "teacher" // | -> union

interface Workers {
    name: string
    job: Job
}

const user4: Workers = {
    name: "bob",
    job: "developer"
}


interface HighSchoolStudent {
    name: string
    grade: 1 | 2 | 3
}