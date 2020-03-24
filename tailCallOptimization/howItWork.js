function outer(){
    "use strict"
    console.log('Outer Func. starts')
    
    console.log('Outer Func. ends')
    return inner()
}
function inner(){
    console.log('  Inner Func.')
}

outer()
