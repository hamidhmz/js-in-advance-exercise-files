let msg =
    'Apple! apple? orange. orange, Orange; milk; milk, milk, orange? banana, and milk...';
let reg_punc = /[\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?]/g;
let new_msg = msg.replace(reg_punc, '');
let arr = new_msg.toLowerCase().split(' ');
let obj = {};
arr.forEach(word => {
    if (obj[word]) {
        obj[word] = obj[word] + 1;
    } else {
        obj[word] = 1;
    }
});
let max = 0;
for (let k in obj) {
    if (max < obj[k]) {
        max = obj[k];
    }
}
let most = [];
for (let k in obj) {
    if (max == obj[k]) {
        most.push(k);
    }
}

let min = max;
for (let k in obj) {
    if (min > obj[k]) {
        min = obj[k];
    }
}
let least = [];
for (let k in obj) {
    if (min == obj[k]) {
        least.push(k);
    }
}
