function getSize<T>(arr: T[]): number {
    return arr.length
}

interface Mobile<T> {
    name: string
    price: number
    option: T
}

function showNames<T extends {name: string}>(data: T): string {
    return data.name
}
