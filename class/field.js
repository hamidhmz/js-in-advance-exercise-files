class Car_class {
    /*************************************************
     * WE HAVE 2 TYPES OF FIELD : PRIVATE AND PUBLIC *
     *************************************************/

    /* ------------------------------- public field ------------------------------ */
    /******************************
     * WE CAN ACCESS PUBLIC FIELD *
     ******************************/
    plate = 'NE19 HAO';

    /* ------------------------------ private field ----------------------------- */
    /************************
     * WE CAN NOT ACCESS IT *
     ************************/
    /*********************************************
     * FOR SET PRIVATE FIELD WE CAN USE ACCESSOR *
     *********************************************/
    #id = 100;

    constructor(engine, gearbox) {
        this.engine = engine;
        this.gearbox = gearbox;
        this.brand;
        /***********************************
         * BEST WAY TO SET PRIVATE INFO IS *
         ***********************************/
        let _vin = 1984; //visibility is just for constructor function
        //for access to this variable we should add method to access to it
        this.access_vin = function() {
            return _vin;
        };
    }

    start = function() {
        /***************************************************
         * FOR ACCESS PUBLIC FIELD INSIDE FUNCTION BY THIS *
         ***************************************************/

        console.log(this.plate + ' is on...');
    };

    rev_engine() {
        /***********************************************
         * FOR ACCESS PRIVATE FIELD WE SHOULD USE THIS *
         ***********************************************/
        console.log(this.#id + ' is on...');
    }

    static shout_engine() {
        return this;
    }
    get access_engine() {
        return this.engine;
    }
    set access_engine(arg) {
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

console.log('car_2.plate', car_2.plate);

/* ------------------------ public filed description ------------------------ */

console.log(
    'Object.getOwnPropertyDescriptor(car_2,plate)',
    Object.getOwnPropertyDescriptor(car_2, 'plate')
);

/* ----------------------- problem with private field ----------------------- */

console.log('car_2', car_2); // in chrome we can see private field
