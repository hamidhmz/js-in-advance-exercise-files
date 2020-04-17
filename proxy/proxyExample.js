const targetObj = {
    first: 'this is first',
    second: 'this is second',
    third: 'this is third',
};
const proxyEg = new Proxy(targetObj, {
    get(target, property, receiver) {
        console.log('target[property]: ', target[property]);
        console.log('target: ', target);
        console.log('property: ', property);
        console.log('receiver: ', receiver);
        return target[property];
    }
});

proxyEg.forth;

console.log('-------------++++--------------');
 
proxyEg.first;

