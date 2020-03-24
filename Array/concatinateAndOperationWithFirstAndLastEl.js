let a = [0, 1, 2, { num: 3 }];
let b = ['apple', { name: 'milk' }, 'water'];

let ab = a.concat(b);

console.log('a:', a);
console.log('a.shift():', a.shift());
console.log('a:', a);
console.log('a.pop():', a.pop());
console.log('a:', a);
console.log('a.push(last ele):', a.push('last ele'));
console.log('a:', a);
console.log('a.unshift(first ele):', a.unshift('first ele'));
console.log('a:', a);
