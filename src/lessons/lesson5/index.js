//this, call, bind apply, function constructors


//!'use strict' this -> object


//1 global context

//2 functions (functions, arrow functions, object methods)

//3 .bind .call. apply

//4 function constructor


// =================== global context ===============


// console.log(this === window)

// this.a = 'a'

// console.log(window.a)


// ================= 2 FUNCTIONS ====================


// const alex = {
//     name: "Alex",

//     showName() {
//         console.log(this.name)
//     }
// }

// const hanna = {
//     name: 'Hanna',
//     showName: alex.showName
// }


// alex.showName() //this --> alex

// hanna.showName() //this --> hanna

// const showName = alex.showName

// showName() //this = undefined --> window


// function foo() {
//     console.log(this)
// }

// foo()


// const user = {
//     name: 'Alex',

//     showName: () => {

//         (() => {
//             console.log(this)
//         })()

//     }
// }


// user.showName()


// =========================== BIND CALL APPLY =====================

// const alex = {
//     name: 'Alex',
//     showName() {
//         console.log(this.name)
//     }
// }

// alex.showName.call({ name: 'second' })


// ===================== CONSTRUCTORS ================

// function User(name, age) {
//     this.name = name
//     this.age = age
// }


// const alex = new User("Alex", 23)
// const hanna = new User("Hanna", 23)


// class User {

// }

// function User() {
//     //return this
//     return () => {}
// }


// const alex = new User() //{name: 'test'}
