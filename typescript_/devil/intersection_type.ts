interface interCar {
    name: string
}

interface interMob {
    name: string
    color: string
}

// 교차타입
const mobCar: interCar & interMob = {
    name: "car",
    color: "red"
}