/*
falsy value:
1. FALSE
2. undefined, null, NaN
3. all kinds of 0: 0, 0.0, '0', big int 0n
4. zero-length str.
truthy value: anything else
*/

/* -------------------------------------------------------------------------- */
/*                                  undefined                                 */
/* -------------------------------------------------------------------------- */
let msg

function test(){
    // return nothing
}

console.log('msg: ',msg)
console.log('test(): ',test())


console.log('null == undefined: ',null == undefined)
console.log('null === undefined: ',null === undefined)

/* -------------------------------------------------------------------------- */
/*                                     NaN                                    */
/* -------------------------------------------------------------------------- */

console.log('Number(hello):',Number('hello'))

console.log('1 + undefined: ',1 + undefined)