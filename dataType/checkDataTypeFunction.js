/* 
typeof: treats null as an object and does NOT 
differentiate array, map and set from object.

instanceof: does NOT work with primitive values and
searches the prototype chain.

null === undefined
*/

function check(data) {
    if (data === null) {
        return 'data type: null';
    } else {
        if (typeof data == 'function') {
            return 'data type: function';
        } else if (typeof data == 'object') {
            // array, map, set, obj.
            if (data instanceof Map) {
                return 'data type: map';
            } else if (data instanceof Set) {
                return 'data type: set';
            } else if (data instanceof Array) {
                return 'data type: array';
            } else {
                return 'data type: object';
            }
        } else {
            return typeof data;
        }
    }
}

