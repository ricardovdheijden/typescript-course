function mergeWithGenerics<T, U>(objA: T, objB: U) {
    return Object.assign(objA, objB)
}

type ObjectA = {
    prop1: number
}

type ObjectB = {
    prop2: number
}

const a: ObjectA = { prop1: 1 }
const b: ObjectB = { prop2: 2 }

const combined = mergeWithGenerics(a, b)
console.log(combined)
