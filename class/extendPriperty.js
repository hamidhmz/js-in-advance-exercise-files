class Car_basics {
    constructor(engine) {
        this.engine = engine;
        this.gearbox = 'Manual';
    }
    start = function() {
        console.log('Engine on...');
    };
    rev_engine() {
        console.log('Vroom...');
    }
    static shut_engine() {
        console.log('Engine shut...');
    }
}

class My_car extends Car_basics {
    // 5 Props: engine, gearbox, brand, model, plate
    // 3 Methods: start, rev_engine, shut_engine
    constructor(engine) {
        super(engine.toUpperCase());
        this.gearbox = 'new gearbox prop. val'; // we can overwrite them
        this.brand = 'Toyota';
        this.model = 'Supra';
        this.plate = 'NE19 HAO';
    }
    // start = function (params) {
    //     console.log('extended')
    // }
    // shut_engine() {
    //     console.log('Vroom1...');
    // }
}

let car = new My_car('Diesel');

console.log('car: ', car);
