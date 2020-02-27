'use strict'
// function test(){
//     console.log(this)
// }
//window.test()
//delete test
// var a = 100
// delete a
// console.log(a)
// if(true){
//     function test(){
//     console.log(this)
// }
// test()
// }
//let num = 0123 // add letter o behind 0 
let obj = {}
Object.defineProperty(obj,'msg',{
    value:'fixed',writable:false
})

obj.msg = 123






