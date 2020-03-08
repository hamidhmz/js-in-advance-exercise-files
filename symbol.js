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
    a:8,
    b:2,
    c:3,
    [Symbol('a')]:4,// a is description for this symbol or in the other words it would be tag on it
    [Symbol('a')]:2,
}

console.log(collection)

console.log()

for (const key in collection) {
    if (collection.hasOwnProperty(key)) {
        const element = collection[key];
        console.log(key+'  :  '+element)
    }   
}


console.log()

let symbol_array = Object.getOwnPropertySymbols(collection)
console.log(symbol_array)
console.log(collection[symbol_array[0]])
console.log(collection[symbol_array[1]])

let sf1 = Symbol.for('apple')
let sf2 = Symbol.for('apple')//this would search in global object for apple
if (sf1 == sf2) {
    console.log()
    console.log('yes sf1 and sf2 are the same ');
}








// str arr map set these are always iterable

let map = new Map([
    ['1a','ww'],['2a','rr'],['3a','jj']
])

console.log('map:',map)


Map.prototype[Symbol.iterator] = Map.prototype.values

for (const item of map) {
    console.log(item)
}

console.log('---------')

Map.prototype[Symbol.iterator] = Map.prototype.keys
for (const item of map) {
    console.log(item)
}

console.log('---------')

for (const item of map.entries()) {
    console.log(item)
}