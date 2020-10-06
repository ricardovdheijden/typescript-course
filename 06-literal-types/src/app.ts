let one = 1
let lastName = 'van der Heijden'

const ten = 10
const firstName = 'ricardo'

// let birthYear: 1986 = 1990


function printValue(value: number, setting: 'print-as-string' | 'print-as-number') {
    if (setting === "print-as-number") {
        console.log(setting)
        console.log(value)
        console.log(typeof value)
    } else {
        console.log(setting)
        const result = '' + value
        console.log(result)
        console.log(typeof result)
    }
}

printValue(2, "print-as-number")
console.log('---')
printValue(5, "print-as-string")
console.log('---')
// printValue(3, 'print-as-boolean')
