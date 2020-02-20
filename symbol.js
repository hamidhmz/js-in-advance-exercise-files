// symbol is 7th primitive data type in js
const symbol1 = Symbol(1);
const symbol2 = Symbol('1');
const symbol3 = Symbol();
const symbol4 = Symbol('w');
const symbol5 = Symbol('w');
if (symbol4 !== symbol5) console.log('yeah they are not the same')
console.log()
let collection = {
    a:1,
    a:2,
    b:2,
    c:3,
    [Symbol('a')]:4,
    [Symbol('a')]:2,
}

console.log(collection)

let symbol_array = Object.getOwnPropertySymbols(collection)
console.log(symbol_array)
console.log(collection[symbol_array[0]])
console.log(collection[symbol_array[1]])