// setTimeout(function () {
//     console.log("timer 3000")
// }, 3000)

// console.log(1)

// setTimeout(function () {
//     console.log("timer 2000")
// }, 2000)

// console.log(2)


// setTimeout(function () {
//     console.log("timer 1000")
// }, 2)

// console.log(3)

//1 2 3 1000 2000 3000


// setTimeout(function timeout() {
//     console.log(1)
// }, 4000);

// setTimeout(function timeout() {
//     console.log(2)
// }, 1000);


// setTimeout(() => {
//     console.log(3)
// }, 1)


// new Promise((resolve) => {
//     console.log(4)
//     resolve()
//     console.log(5)
// }).then(() => {
//     console.log(6)
// })

// console.log(7);

//4 5 7 6 3 2 1

//============================

// setTimeout(function () {
//     console.log("s1")
// }, 1);


// setTimeout(function () {
//     console.log("s2")
// }, 1000);


// new Promise(function (resolve) {
//     console.log("p1");
//     resolve();
//     console.log("p2");
// }).then(function () {
//     console.log("p3");
// });

// console.log("w1");

// async function test1() {
//     console.log("a1");
//     await test2()
//     console.log("a2");
//     console.log("lala")
// }

// async function test2() {
//     console.log("a3");
// }

// test1();

// console.log("w2")

//p1 p2 w1 a1 a3 w2 p3 a2 lala s1 s2

// /============================


// console.log(1);


// setTimeout(() => {
//     console.log(2);
//     Promise.resolve()
//         .then(() => {
//             console.log(3)
//         });
// }, 2000);

// new Promise((resolve) => {
//     console.log(4)
//     resolve(5)
// }).then((data) => {
//     console.log(data);

//     Promise.resolve()
//         .then(() => {
//             console.log(6)
//         })
//         .then((data) => {
//             console.log(7)

//             setTimeout(() => {
//                 console.log(8)
//             }, 1000);
//         });
// })

// setTimeout(() => {
//     console.log(9);
// }, 2000)

// console.log(10)

//1 4 10 5 6 7 8 2 3 9

//1 4 10 5 6 7 2 3 9 8


// console.log("Start")

// setTimeout(function timeout() {
//     console.log('timeout');
// }, 2);

// let p = new Promise(function (resolve) {
//     console.log('Create promise');
//     resolve();
// });

// p.then(function () {
//     console.log('Handle promise');
// });

// console.log('End');

//Start create promise End Handle promise timeout


// console.log(1);

// setTimeout(() => console.log(2), 1000);

// Promise.resolve().then(() => console.log(3));

// Promise.resolve()
//     .then(() => setTimeout(() => console.log(4), 4000))
//     .then(() => console.log(5))

// Promise.resolve().then(() => console.log(6));

// Promise.resolve().then(() => console.log(7));

// setTimeout(() => console.log(8), 2000);

// console.log(9);



//1 9 3 6 7 5 2 8 4
