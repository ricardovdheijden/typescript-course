interface Animal {
    name: string

    greet: () => void
}


const pig: Animal = {
    name: 'Bacon',
    greet: () => console.log('Oink Oink!')
}
pig.greet()


class Dog implements Animal {
    name: string

    constructor(n: string) {
        this.name = n
    }

    greet() {
        console.log('Woof Woof!')
    }

}
const dog = new Dog('Spike')
dog.greet()
