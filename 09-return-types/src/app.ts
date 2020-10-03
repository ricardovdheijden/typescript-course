function addNumbers(n1: number, n2: number) {
    return n1 + n2
}

function logUtil(message: string): void {
    console.log(message)
}

function throwApplicationError(message: string): never {
    throw Error(message)
}

console.log('addNumbers(): ' + addNumbers(2,3))
console.log('logUtil(): ' + logUtil('logging'))
console.log('throwApplicationError(): ' + throwApplicationError('error!'))
