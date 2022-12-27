interface utilUser {
    id: number
    name: string
    gender?: "m" | "f"
}

type UserKey = keyof utilUser // == 'id' | 'name' | 'gender'
const uk:UserKey = "name"

let admin: Partial<utilUser> = { // 부분 선택
    id: 1,
    name: "bob"
}

let users: Required<utilUser> = { // 전부 필수
    id: 1,
    name: "bob",
    gender: "m"
}

let readUsers: Readonly<utilUser> = { // 읽기 전용
    id: 1,
    name: "bob",
    gender: "m"
}

type Grade = "1" | "2" | "3" | "4"
type GradeScore = "A" | "B" | "C" | "D" 

const scores: Record<Grade, GradeScore> = { // key-value
    1: "A",
    2: "C",
    3: "B",
    4: "D",
}


const pickAdmin: Pick<utilUser, "id" | "name"> = { // 속성 선택
    id: 0,
    name: "bob"
}

const omitAdmin: Omit<utilUser, "gender"> = { // 속성 제외
    id: 0,
    name: "bob"
}

// 타입 제외
type T1 = string | number
type T2 = Exclude<T1, number>

// nullable 제외
type T3 = string | null | undefined | void;
type T4 = NonNullable<T3>