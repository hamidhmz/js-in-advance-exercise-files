function Car(brand,model){
    if(new.target){
        this.brand = brand
        this.model = model
    }else{
        throw 'Car is a constructor, new it!!!'
    }
    
}

let a = new Car('Petrol','Manual')
