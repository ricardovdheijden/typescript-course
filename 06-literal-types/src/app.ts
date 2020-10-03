const ten = 10
const firstName = 'ricardo'

function printValue(value: number, setting: 'print-as-string' | 'print-as-number') {
    if (setting === "print-as-number") {
        console.log(value)
    } else {
        console.log(''+value)
    }
}

printValue(2, "print-as-number")
printValue(5, "print-as-string")
// printValue(3, 'print-as-boolean')
