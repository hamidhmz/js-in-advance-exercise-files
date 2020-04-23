/*************************************************************************************
 * WE CAN DEFINE PROPERTY AND METHOD IN 4 WAYS: INSTANCE, PROTOTYPE ,STATIC, PRIVATE *
 *************************************************************************************/
function Car_constructor(engine, gearbox) {
    this.engine = engine.toUpperCase(); //instance
    this.gearbox = gearbox.toUpperCase();
    this.start = function () {
        console.log('engine on ...');
    };
    this.rev_engine = function () {
        console.log('vroom...');
    };
    this.get_location = function () {
        console.log(this.constructor.location);
    };
    this.get_location = function () {
        console.log(this.constructor.location);
    };
    let _vin = 1984;
    this.get_vin = function () {
        return _vin;
    };

    /* -------------------------------------------------------------------------- */
    /*                  set getter and setter inside constructor                  */
    /* -------------------------------------------------------------------------- */

    Object.defineProperty(this, 'access_vin', {
        //do not set writable,value
        enumerable: true,
        configurable: true,
        set: function (arg) {
            _vin = arg;
        },
        get: function () {
            return _vin;
        },
    });
}

/* -------------------------------------------------------------------------- */
/*                             set static property                            */
/* -------------------------------------------------------------------------- */
Car_constructor.location = 'Newcastle'; //static

Object.defineProperty(Car_constructor.prototype, 'mileage', {
    //prototype
    value: 1000,
    writable: false,
    enumerable: true,
    configurable: false,
});
let car_obj = new Car_constructor('Hybrid', 'Automatic');

/****************************
 * WE CANNOT CHANGE MILEAGE *
 ****************************/
console.log('car_obj.mileage', car_obj.mileage);
car_obj.mileage = 10;
console.log('car_obj.mileage after change: ', car_obj.mileage);

/* -------------------------------------------------------------------------- */
/*                          access to static property                         */
/* -------------------------------------------------------------------------- */
console.log('car_obj.constructor.location: ', car_obj.constructor.location);

function myFactory1() {
    this.p2 = 2;
    this.p3 = 3;
}
myFactory1.prototype.p1 = 10;
myFactory1.p4 = 11;
const test2 = new myFactory1();

console.log('test2.p1: ', test2.p1);
console.log('test2.p2: ', test2.p2);
console.log('test2.p3: ', test2.p3);
console.log('test2.p4: ', test2.p4);
console.log('test2.constructor.p4: ', test2.constructor.p4);
console.log(
    'test2.constructor === myFactory1: ',
    test2.constructor === myFactory1
);
