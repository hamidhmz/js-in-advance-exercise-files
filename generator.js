function* generator_example() {
    try {
        let i = 1
        console.log(`${i++} : verify user ID`);
        yield 'ID checked'
        console.log(`${i++} : connect to db`);
        yield 'db connected'
        console.log(`${i++} : send request to db`);
        yield 'request sent'
        console.log(`${i++} : receive db response`);
        yield 'response received'
        console.log(`${i++} : disconnect from db`);
        yield 'db disconnected'
    } catch (error) {
        console.log(`error message in generator exampe:${error}`);
    }
}

let go = generator_example()

console.log(go.next());
console.log(go.next());
console.log(go.next());
// console.log(go.return('this is returned value'));//stop and return the process
console.log(go.throw(new Error('something is wrong')));
console.log(go.next());


function* generator_example2 (obj) {
    try {
        let brand = yield 'customize my car'
        obj.brand = brand
        console.log(obj);
        let model = yield 'brand added'
        obj.model = model
        console.log(obj);
        let engine = yield 'model added '
        obj.engine = engine
        console.log(obj);
        let gearbox = yield 'engine added'
        obj.gearbox = gearbox
        console.log(obj);
        yield 'gearbox added'
        console.log('----------');
        console.log('-----test for add more line after last yield-----');
        console.log('-----it works-----');
        console.log('----------');
    } catch (error) {
        console.log(`error message in generator exampe:${error}`);
    }
}

let my_car = {owner:'me'}
let go1 = generator_example2(my_car)


console.log(go1.next())
console.log(go1.next('Honda'))
console.log(go1.next('NSX'))
console.log(go1.next('Hybrid'))
console.log(go1.next('Auto'))
console.log(go1.next())


console.log(`----------another example-----------`);
function* commodity_list(){
    yield 'fruit: '
    yield* ['apple','orange']
    yield 'vagetable: '
    yield* vagetable_list()
    yield 'Diary: '
}
function* vagetable_list(){
    let index = 1
    yield index++ +': celery'
    yield index++ +': cabbage'
    yield index++ +': mushroom'
}
let commodity = commodity_list()
for (const item of commodity) {
    console.log(item)
}