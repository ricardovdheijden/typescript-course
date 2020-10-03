let input: unknown
// let input: any

let firstName: string

input = 2
input = 'Ricardo'
firstName = input

if (typeof input === 'string') {
    firstName = input
    console.log(firstName)
} else {
    console.log('not a string')
}
