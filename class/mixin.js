class Car_basics{
    constructor(){
        this.brand = 'Toyota'
        this.model = 'Camry'
    }
}

function Petrol_engine(cls){
    return class extends cls{
        constructor(){
            super()
            this.engine = 'Petrol'
        }
    }
}
function Hybrid_engine(){
    this.engine = 'Hybrid'
}

function Automatic_gearbox(cls){
    return class extends cls{
        constructor(){
            super()
            this.gearbox = 'Automatic'
        }
    }
}
function CVT_gearbox(){
    this.gearbox = 'CVT'
}

// target obj: brand, model, engine, gearbox

let Target_cls = Automatic_gearbox(Petrol_engine(Car_basics))
let car = new Target_cls

console.log('car: ',car)
