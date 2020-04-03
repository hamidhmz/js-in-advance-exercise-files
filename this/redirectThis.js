let a = {
    msg: 'Hello',
    someMethod(a, b, c) {
        console.log('a', a);
        console.log('b', b);
        console.log('c', c);
        console.log('this.msg: ', this.msg);
        console.log('this: ', this);
    }
};

let b = {
    msg: 'draft'
};
let c = {
    msg: 'draft1'
};
let d = {
    msg: 'draft2'
};
a.someMethod();

/* ---------------------------------- bind ---------------------------------- */

a.someMethod.bind(b)();
a.someMethod.bind(b, 'first', 'second', 'third')();
a.someMethod.bind(b)('first', 'second', 'third');
const firstExample = a.someMethod.bind(b, 'first');
console.log('------------------firstExample(third)-------------------');
firstExample('second', 'third');

const secondExample = a.someMethod.bind(b, 'first', 'second');
console.log('------------------secondExample(third)-------------------');
secondExample('third');

/* ----------------------------- call and apply ----------------------------- */

a.someMethod.apply(c, ['first', 'second', 'third']);
a.someMethod.call(d, 'first', 'second', 'third');
