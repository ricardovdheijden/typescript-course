interface Animal {
    name: string
    greet: () => void
}

type TypeAnimal = {
    name: string
    greet: () => void
}

// Using interface with object
const pig: Animal = {
    name: 'Bacon',
    greet: () => console.log('Oink Oink!')
}
pig.greet()

// Using interface with class
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

// Variable with type of the interface
let anotherDog: Animal
anotherDog = new Dog('Max')
anotherDog.greet()
