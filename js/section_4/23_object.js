/*
    Object: Person (propertie) -> have NAME, AGE, and other attributes
*/

const myPeople = [
    {
        name: "Gabriel",
        age: "18",
        address: {
            country: "BR",
            state: "SP",
            city: "Olímpia",
            neighborhood: "Jardim Centenário",
            street: "Angêlo Gabriel Splimbergo",
            number: 123
        }
    },
    {
        name: "João",
        age: "18",
        address: {
            country: "BR",
            state: "SP",
            city: "Olímpia",
            neighborhood: "Jardim Centenário",
            street: "Angêlo Gabriel Splimbergo",
            number: 321
        }
    },
]

console.log(myPeople[0].address)