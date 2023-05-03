"use strict";
function add(a, b) {
    return a + b;
}
add(5, 5);
const newAdd = (c, d) => {
    return c + d;
};
const arr = [2, 4, 6];
const newArr = arr.map((narr) => narr * narr);
const account = {
    name: "Jhon",
    blance: 25,
    addBlance(newBlance) {
        return this.blance + newBlance;
    },
};
function newFunc(num1, num2 = 10) {
    console.log(`${num1} and ${num2}`);
}
newFunc(10);
const boys = ["a", "b", "c"];
const girls = ["d", "e", "f", "g"];
boys.push(...girls);
console.log(boys);
function restFunc(...f) {
    return f.forEach((fr) => console.log(fr));
}
restFunc("Jhon", "Deo", "Mosh", "Mery");
