function testF(a, b, c) {
    console.log('arguments: ', arguments);
    console.log('arguments.callee: ', arguments.callee);
    console.log('arguments.callee.caller: ', arguments.callee.caller);
}
testF();

function outer() {
    testF();
}

console.log(outer())
console.log('testF.length: ', testF.length);
console.log('testF instanceof Function: ', testF instanceof Function);
console.log(
    'testF.__proto__ === Function.prototype: ',
    testF.__proto__ === Function.prototype

);

const arrow = (a,b,c)=>{
    console.log('arguments: ', arguments);
}

arrow()