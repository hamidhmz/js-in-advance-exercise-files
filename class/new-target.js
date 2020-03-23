class Car_basics {
    constructor() {
        if (Car_basics === new.target) throw 'Parent class cannot be newed'; // making parent class become un newable
        this.engine = 'Petrol';
        this.gearbox = 'CVT';
    }
    start() {
        console.log('Engine on...');
    }
}

class My_car extends Car_basics {
    constructor() {
        super();
        this.owner = 'me';
        this.plate = 'NE19 HAO';
    }
}

let Child = new My_car();
