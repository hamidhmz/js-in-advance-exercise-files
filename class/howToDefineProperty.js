class Car_class {
    //declaring property and assigning submitted value
    constructor(engine, gearbox) {
        this.engine = engine;
        this.gearbox = gearbox;
        this.brand;
    }
    //methods:ins, proto,static

    /* ----------------------------- instance method ---------------------------- */

    start = function() {
        console.log(this.engine + ' is on...');
    };

    /* ---------------------------- prototype method ---------------------------- */

    rev_engine() {
        console.log(this.engine + ' is on...');
    }

    /* ------------------------------ static method ----------------------------- */

    static shout_engine() {
        return this; //this in here would point to the class it self
    }
    get access_engine(){
        return this.engine;
    }
    set access_engine(arg){
        this.engine = arg;
    }
}

Object.defineProperty(Car_class.prototype, 'mileage', {
    value: 1000,
    writable: false,
    enumerable: true,
    configurable: false
});

let car_2 = new Car_class('Electric', 'CVT');
Car_class.location = 'Newcastle';
console.log('new Car_class()', new Car_class());
console.log('car_2', car_2);
console.log('Object.getPrototypeOf(car_2)', Object.getPrototypeOf(car_2));
console.log('car_2.__proto__', car_2.__proto__);
console.log('car_2.__proto__.rev_engine', car_2.__proto__.rev_engine);
console.log('Car_class.shout_engine()', Car_class.shout_engine());
