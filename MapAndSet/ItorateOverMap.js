const mapNew = new Map([
    ['hamid', 1],
    [null, 5],
    [undefined,'value 4'],
    [NaN, 'value 5'],
    ['','value 7']
]);

/* ------------------------------- map foreach ------------------------------ */


mapNew.forEach((value,key,obj)=>{
    console.log('obj: ',obj)
    console.log('value: ',value)
    console.log('key: ',key)
})

/* ------------------------------- map for of ------------------------------- */

for (const iterator of mapNew) {
    console.log('iterator: ',iterator)
}
