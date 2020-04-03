const arrayAsKey = [1, 2, 3];
const mapNew = new Map([
    ['hamid', 1],
    [null, 5],
    [arrayAsKey, 'value 3'],
    [undefined,'value 4'],
    [NaN, 'value 5'],
    ['','value 7']
]);
console.log(mapNew);

mapNew.set(52,'value 6')
console.log(mapNew);

console.log(mapNew.get(undefined))
console.log(mapNew.get(arrayAsKey))
console.log(mapNew.get(null))
console.log(mapNew.get(NaN))
console.log(mapNew.get(''))

mapNew.delete(52)
console.log('mapNew.entries(): ',mapNew.entries())
console.log(mapNew.has('hamid'))//return true or false
console.log('mapNew.size',mapNew.size)
console.log('mapNew.values(): ',mapNew.values())
console.log('mapNew.keys(): ',mapNew.keys())
const turnMapToArray = [...mapNew]
console.log(turnMapToArray)
turnMapToArray.from

mapNew.clear()