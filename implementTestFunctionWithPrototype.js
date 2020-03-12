
function expect1() {
}

expect1.prototype.second = function(w){
    console.log(this.d)
    this.actual = w
    return this;
}
expect1.prototype.toBe = function(expected) {
    // console.log(this.actual)
  if (typeof this.actual === "object") {
    return JSON.stringify(this.actual) === JSON.stringify(expected);
  } else if (typeof this.actual === "function") {
    return actual() === expected;
  } else {
    return this.actual === expected;
  }
};
const first = new expect1();
const expect = function(a){
    return first.second(a)
};
console.log(typeof expect)
console.log(expect(2).toBe(2))
// expect(5)