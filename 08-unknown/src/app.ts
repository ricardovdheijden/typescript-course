let input: any
// let input: unknown

let firstName: string

input = 2
input = 'Ricardo'

// Works with any
firstName = input

// Works with unknown
if (typeof input === 'string') {
    firstName = input
    console.log(firstName)
} else {
    console.log('not a string')
}
