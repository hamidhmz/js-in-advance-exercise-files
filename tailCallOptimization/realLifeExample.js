function fact(num,total) {
    'use strict'
    if(num == 1){
        return total;
    }else{
        return fact(num - 1,num*total);
    }
}
console.log(fact(100,1))