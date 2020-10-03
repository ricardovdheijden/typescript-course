class Person {
    name: string
    private age: number

    constructor(n: string, a: number) {
        this.name = n
        this.age = a
    }

    get revealAge() {
        return this.age
    }
}

const me = new Person('Ricardo', 29)
console.log(me.name)
console.log(me.revealAge)
