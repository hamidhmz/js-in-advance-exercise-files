let text =
    'You need to calculate the total word count of a given paragraph and you also need to check how many times a given word has been used in this paragraph. What should you do?';

let arr = text.split(' ');

let result = text.toLowerCase().split('you');
const howManyTimesUsed = result.length - 1
console.log('howManyTimesUsed: ',howManyTimesUsed);
