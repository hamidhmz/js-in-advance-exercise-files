class Parent_class {
    instance_method = function() {
        console.log('Parent INSTANCE method');
    };
    prototype_method() {
        console.log('Parent PROTOTYPE method');
    }
    static static_method() {
        console.log('Parent STATIC method');
    }
}
class Child_class extends Parent_class {
    instance_method = function() {// instance methods cannot extend them 
        // super.instance_method();//error you cannot do it 
        console.log('Child INSTANCE method');
    };
    prototype_method() {
        console.log('Child PROTOTYPE method');
        super.prototype_method();
    }
    static static_method() {
        console.log('Child STATIC method');
        super.static_method();
    }
}

let obj = new Child_class();
obj.instance_method();
obj.prototype_method();
obj.constructor.static_method();
