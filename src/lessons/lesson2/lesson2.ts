console.log('lesson 2');

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// +++ https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// +++ https://learn.javascript.ru/currying-partials
// +++ https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// +++ https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// +++ https://learn.javascript.ru/recursion
// +++ https://www.youtube.com/watch?v=Kuq6oIN3PH0


// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9
/*function sum(n1: number) {
    return (n2: number) => {
        return n1 + n2
    }
}

console.log(sum(3)(6))*/

// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3

/*function makeCounter() {
    let count = 0
    return () => {
        console.log(++count)
    }
}

const counter = makeCounter();
counter(); // 1
counter(); // 2
const counter2 = makeCounter();
counter2(); // 1
counter(); // 3*/


// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

/*
function makeObjectCounter(count: number) {

    let _privateProperty = 10
    const _privateMethod = () => {
        return 'From method, property = ' + _privateProperty
    }

    return {
        increase: () => {
            return ++count
        },
        decrease: () => {
            return --count
        },
        reset: () => {
            count = 0;
            return count
        },
        set: (n: number) => {
            count = n;
            return count
        },
        show: () => {
            return count
        },
        getPrivateProperty: () => {
            return _privateProperty
        },
        callPrivateMethod: () => {
            return _privateMethod()
        },
    }
}

const a = makeObjectCounter(0)
console.log('create object with start number:', 0)
console.log('inc', a.increase())
console.log('inc', a.increase())
console.log('show', a.show())
console.log('reset', a.reset())
console.log('dec', a.decrease())
console.log('inc', a.increase())
console.log('set 5', a.set(5))
console.log('show', a.show())
console.log('dec', a.decrease())
console.log('dec', a.decrease())
console.log('show', a.show())
console.log('getPrivateProperty', a.getPrivateProperty())
console.log('callPrivateMethod', a.callPrivateMethod())
// const b = makeObjectCounter(31)
// console.log('show', b.show())
*/

// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

// @ts-ignore
/*function curry(fn, ...args) {
    // @ts-ignore
    return (..._arg) => {
        // @ts-ignore
        return fn(...args, ..._arg);
    }
}*/


// @ts-ignore
// function superSumBlyaha(n, ...args) {
//     if (n === 0) return 0
//
//     if (args.length === n) {
//         let sum = 0
//         for (let i = 0; i < Math.min(args.length, n); i++) {
//             // console.log('n = ', n, ', args.length = ', args.length, ', args[i] = ', args[i])
//             sum += args[i]
//         }
//         return sum
//     }
//
//     // @ts-ignore
//     return function curried(...args) {
//         console.log('In curried. args.length = ', args.length, ', args[0] = ', args[0], ', superSum.length = ', superSumBlyaha.length)
//         // @ts-ignore
//         if (args.length >= superSumBlyaha.length) {
//             // @ts-ignore
//             return superSumBlyaha.apply(this, [n, ...args]);
//         } else {
//             console.log('In ELSE')
//             // @ts-ignore
//             return function (...args2) {
//                 // @ts-ignore
//                 return curried.apply(this, args.concat(args2));
//             }
//         }
//     };
//
//
//     /*for (let i = 0; i < n; i++) {
//
//         // @ts-ignore
//         return (...args) => {
//
//             // @ts-ignore
//             superSum(arg[0])
//
//             let sum = 0
//             for (let i = 0; i < Math.min(args.length, n); i++) {
//                 sum += args[i]
//             }
//             return sum
//
//         }
//     }*/
//
//     // console.log(args)
//
//     /*
//
//     // @ts-ignore
//     return function sumFn(...args) {
//
//         // @ts-ignore
//         function curried(...args) {
//             // @ts-ignore
//             if (args.length >= this.length) { // (1)
//                 // @ts-ignore
//                 return sumFn.apply(this, args);
//             } else {
//                 // @ts-ignore
//                 return function pass(...args2) { // (2)
//                     // @ts-ignore
//                     return curried.apply(this, args.concat(args2));
//                 }
//             }
//         }
//
//     }
// */
//
// }

// @ts-ignore
/*function superSum(n, ...args) {
    let sum = 0

    if (n === 0) return 0

    console.log('n = ', n, ', args.length = ', args.length, ', args[0] = ', args[0])
    for (let i = 0; i < args.length; i++) {
        // @ts-ignore
        return sum + superSum(args[i])
    }

    return superSum.apply(superSum, [n, ...args]);
}*/


function superSum(n: number) {
    if (n <= 0) {
        return 0
    }
    return function curried(...args: number[]) {
        console.log('CARRIED: args.length = ', args.length, ', args[0] = ', args[0], ', n = ', n)
        if (args.length >= n) {
            return args.slice(0, n).reduce((acc, c) => acc + c)
        } else {
            return function pass(/*this: number[],*/ ...args2: number[]) {
                console.log('ELSE: args.length = ', args.length, ', args[0] = ', args[0], ', n = ', n,
                    ', args2.length = ', args2.length, ', args2[0] = ', args2[0])//, ', this = ', this)
                return curried.apply(null, args.concat(args2));
            }
        }
    };
}

// @ts-ignore
console.log(superSum(0), 0)
// @ts-ignore
console.log(superSum(3)(2)(5)(3), 10)
// @ts-ignore
console.log(superSum(3)(2)(5, 3), 10)
// @ts-ignore
console.log(superSum(3)(2, 5, 3), 10)
// @ts-ignore
console.log(superSum(3)(2, 5)(3), 10)
// @ts-ignore
console.log(superSum(3)(2, 5)(3, 9), 10)

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

// Task 05
// +++ решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion

/*
// Recursion tasks
// #1
function sumToCycle(n: number) {
    let sum = 0
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum
}

function sumToRecursion(n: number): number {
    return n === 1 ? n : n + sumToRecursion(n - 1)
}

function sumToProgression(n: number): number {
    return (n + 1) / 2 * n;
}

console.log('Cycle', sumToCycle(10))
console.log('Recursion', sumToRecursion(10))
console.log('Progression', sumToProgression(10))


// #2
function factorial(n: number): number {
    return n === 1 ? n : n * factorial(n - 1)
}

console.log('factorial', factorial(5))


// #3
function fib(n: number): number {
    let s1 = 1, s2 = 1, s = 1;

    for (let i = 3; i <= n; i++) {
        // console.log('i = ', i, ', s1 = ', s1, ', s2 = ', s2)
        s = s1 + s2;
        s2 = s1;
        s1 = s;
    }

    return s
}

console.log('fibonacci', fib(3))
console.log('fibonacci', fib(7))
console.log('fibonacci', fib(77))


// #4
let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printList(list: any) {
    console.log(list.value)
    if (list.next !== null) {
        printList(list.next)
    }
}

// let subdep of Object.values(department)
function printListCycle(list: any) {
    console.log(list.value)
    while (list.next !== null) {
        list = list.next
        console.log(list.value)
    }
}

printList(list)
console.log('-----------')
printListCycle(list)

console.log('REVERSE')

function printListReverse(list: any) {
    // console.log(list.value)
    if (list.next) {
        printListReverse(list.next)
    }
    console.log(list.value)
}

function printListCycleReverse(list: any) { // !!! didn't solve it !!!
    let arr = [];
    let tmp = list;

    while (tmp) {
        arr.push(tmp.value);
        tmp = tmp.next;
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}

printListReverse(list)
console.log('-----------')
printListCycleReverse(list)
*/


// Task 06
// +++ написать функцию, которая повторяет функционал метода flat массива на всю глубину.

/*function myFlat(ar: Array<any>) {

    // arr1.reduce((acc, val) => acc.concat(val), [])
    const res: any = ar.reduce((acc: any, el: any) => {
        return Array.isArray(el) ? acc.concat(myFlat(el)) : [...acc, el]
    }, [])

    return res
}

console.log(myFlat([1, 2, [3, 4]]))
console.log(myFlat([1, 2, [3, 4, [5, 6]]]))
console.log(myFlat([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]))
console.log(myFlat([1, 2, 3, [1, 2, 3, 4, [2, 3, 4]]]))*/

// just a plug
export default () => {
};



