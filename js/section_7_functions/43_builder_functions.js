// function Name(name, surname) {
//     this.name = name
//     this.surname = surname

//     this.completeName = () => {
//         completeName = `${this.name} ${this.surname}`
//         return completeName
//     }
// }

// const gabriel = new Name("Gabriel", "Castro")
// const pietra = new Name("Pietra", "Madalena")

// console.log(gabriel.completeName())
// console.log(pietra.completeName())

function Calculadora() {
    this.sum = (n1, n2) => {
        return `${n1+n2}`
    }
    
    this.subtraction = (n1, n2) => {
        return `${n1-n2}`
    }
}

myCalculator = new Calculadora()
console.log(myCalculator.sum(1,2))
console.log(myCalculator.subtraction(1,2))