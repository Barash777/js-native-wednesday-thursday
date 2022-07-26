function logPerson() {
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}

const person1 = {name: 'Alesha', age: 31, job: 'Google'}
const person2 = {name: 'Marina', age: 19, job: 'Evroopt'}

// console.log(logPerson.bind(person1)())
// console.log(logPerson.bind(person2)())

function myBind(context, f) {
    return (...args) => {
        f.apply(context, args)
    }
}

console.log(myBind(person1, logPerson)())