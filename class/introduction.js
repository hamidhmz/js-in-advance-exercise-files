//class is another type of constructor function
/**************************************************************************
 * WE HAVE 2 WAY TO DEFINE A CLASS: CLASS DECLARATION  , CLASS EXPRESSION *
 **************************************************************************/

/* -------------------------------------------------------------------------- */
/*                             class wont hoisted                             */
/* -------------------------------------------------------------------------- */

/* ---------------------------- class declaration --------------------------- */

class Class_name {}

console.log('typeof Class_name: ', typeof Class_name);

/* ---------------------------- class expression ---------------------------- */
let Var_name = class{}


class Car_class{
    //declaring property and assigning submitted value  
    constructor(engine,gearbox){
        this.engine = engine;
        this.gearbox = gearbox;
        this.mileage = 1000;
        this.brand
    }
    //methods
}
Car_class.location = 'NewCastle'

let car_2 = new Car_class('Electric','CVT')

console.log('Car_class.location: ',Car_class.location)
console.log('car_2.constructor.location: ',car_2.constructor.location)

console.log('car_2: ',car_2)