
/* ----------------------------- this in Object ----------------------------- */

let a = {
    msg:'Hello',
    someMethod(){
        console.log('this.msg: ',this.msg)
        console.log('this: ',this)
    }
}

let b = {
    msg:'draft'
}
a.someMethod()


/* ---------------------------- this in function ---------------------------- */

function testF(){
    console.log('this: ',this)
}

console.log(testF())// it would point to global obj

const example = new testF

/* -------------------------------------------------------------------------- */
/*                      arrow function does not have this                     */
/* -------------------------------------------------------------------------- */
