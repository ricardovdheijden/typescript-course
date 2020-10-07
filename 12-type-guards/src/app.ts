// typeof
{
    type Input = string | number

    function printToConsole(input: Input) {
        typeof input === "string" ? console.log(input.toUpperCase()) : console.log(input * 5)
    }

    console.log('--- typeof ---')
    printToConsole('Hello type guard')
    printToConsole(5)
}

// 'prop' in obj
{
    type Car = { numberOfWheels: number }
    type Truck = { numberOfWheels: number, cargoAmount: number}
    type Vehicle = Car | Truck

    function printInfo(vehicle: Vehicle) {
        console.log('wheels: ', vehicle.numberOfWheels)
        if ('cargoAmount' in vehicle) {
            console.log('cargo: ', vehicle.cargoAmount)
        }
    }

    console.log('--- prop in obj ---')
    const car: Car = { numberOfWheels: 4 }
    printInfo(car)
    const truck: Truck = { numberOfWheels: 12, cargoAmount: 300 }
    printInfo(truck)
}

// instanceof
{
    class Car { constructor(public numberOfWheels: number) {} }
    class Truck { constructor(public numberOfWheels: number, public cargoAmount: number) {} }
    type Vehicle = Car | Truck

    function printInfo(vehicle: Vehicle) {
        console.log('wheels: ', vehicle.numberOfWheels)
        if (vehicle instanceof Truck) {
            console.log('cargo: ', vehicle.cargoAmount)
        }
    }

    console.log('--- instanceof ---')
    printInfo(new Car(4))
    printInfo(new Truck(4, 400))
}

// discriminated unions
{
    type Car = {
        type: 'car'
        numberOfWheels: number
    }
    type Truck = {
        type: 'truck'
        numberOfWheels: number
        cargoAmount: number
    }
    type Vehicle = Car | Truck

    function printInfo(vehicle: Vehicle) {
        console.log('wheels: ', vehicle.numberOfWheels)
        if (vehicle.type === 'truck') {
            console.log('cargo: ', vehicle.cargoAmount)
        }
    }
    console.log('--- discriminated unions ---')
    printInfo({ type: 'car', numberOfWheels: 4 })
    printInfo({ type: 'truck', numberOfWheels: 12, cargoAmount: 500 })
}
