interface UnionCar {
    name: "car"
    color: string
    start(): void
}

interface UnionMobile {
    name: "mob"
    color: string
    call(): void
}

function getGift(gift: UnionCar | UnionMobile) {
}