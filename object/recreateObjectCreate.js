let a = {
    msg : 'obj a',
    list: [1,2,3]
}

let b = Object.create(a);

function Outer(obj){
    function Inner(){
        Inner.prototype = obj
        return new Inner
    }
}

let c = Outer(a)