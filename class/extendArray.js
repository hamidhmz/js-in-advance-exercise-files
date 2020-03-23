let arr2 = Array('apple', 'banana');
class My_Array extends Array {
    capitalized_pop() {
        return this.pop().toUpperCase();
    }
    static get [Symbol.species](){ // for solving map problem
        return Array
    }
}

let arr = new My_Array('apple', 'banana');


console.log('arr[0]: ',arr[0])
console.log('arr.length: ',arr.length)
console.log('arr.capitalized_pop(): ',arr.capitalized_pop())


let arr = new My_Array('apple','banana')

let new_arr = arr.map(item=>item)

// new_arr wouldn't point to the array it would point to the my_array