// typeOf, instanceOf, .constructor
// Object.prototype.toString.call()/apply()

let symbol = Symbol();
let arr = [1, 2, 3];
let map = new Map();
let set = new Set();

function func() {
    console.log('func.');
}

func.constructor = { title: 'new val' };

/* -------------------------------------------------------------------------- */
/*                                   typeof                                   */
/* -------------------------------------------------------------------------- */

//it should only be used with primitive

console.log('typeof 123: ', typeof 123);

console.log('typeof null: ', typeof null);

console.log('typeof undefined: ', typeof undefined);

console.log('typeof arr: ', typeof arr);

console.log('typeof map: ', typeof map);

console.log('typeof set: ', typeof set);

console.log('typeof func: ', typeof func);

/* -------------------------------------------------------------------------- */
/*                                 instanceof                                 */
/* -------------------------------------------------------------------------- */

// it should only be used with reference type values

console.log('arr instanceof Array: ', arr instanceof Array);

console.log('arr instanceof Map: ', arr instanceof Map);

console.log('arr instanceof Object: ', arr instanceof Object);

console.log('map instanceof Object: ', map instanceof Object);

console.log('set instanceof Object: ', set instanceof Object);

console.log('func instanceof Object: ', func instanceof Object);

console.log('null instanceof Object: ', null instanceof Object);

console.log('undefined instanceof Object: ', undefined instanceof Object);

console.log('123 instanceof Number: ', 123 instanceof Number);

console.log('hello instanceof String: ', 'hello' instanceof String);

/* -------------------------------------------------------------------------- */
/*                                  toString                                  */
/* -------------------------------------------------------------------------- */

console.log(
    'Object.prototype.toString.call(arr): ',
    Object.prototype.toString.call(arr)
);

console.log(
    'Object.prototype.toString.call(map): ',
    Object.prototype.toString.call(map)
);

console.log(
    'Object.prototype.toString.call(symbol): ',
    Object.prototype.toString.call(symbol)
);

console.log(
    'Object.prototype.toString.call(set): ',
    Object.prototype.toString.call(set)
);

console.log(
    'Object.prototype.toString.call(func): ',
    Object.prototype.toString.call(func)
);

console.log(
    'Object.prototype.toString.call(null): ',
    Object.prototype.toString.call(null)
);

console.log(
    'Object.prototype.toString.call(undefined): ',
    Object.prototype.toString.call(undefined)
);

console.log(
    'Object.prototype.toString.call(123): ',
    Object.prototype.toString.call(123)
);

console.log(
    'Object.prototype.toString.call(hello): ',
    Object.prototype.toString.call('hello')
);
