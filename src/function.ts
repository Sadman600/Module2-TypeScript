function add(a: number, b: number): number {
  return a + b;
}

add(5, 5);

const newAdd = (c: number, d: number): number => {
  return c + d;
};

const arr = [2, 4, 6];
const newArr = arr.map((narr: number) => narr * narr);

const account: {
  name: string;
  blance: number;
  addBlance(newBlance: number): number;
} = {
  name: "Jhon",
  blance: 25,
  addBlance(newBlance: number) {
    return this.blance + newBlance;
  },
};

function newFunc(num1: number, num2: number = 10): void {
  console.log(`${num1} and ${num2}`);
}

newFunc(10);

const boys = ["a", "b", "c"];
const girls = ["d", "e", "f", "g"];

boys.push(...girls);
console.log(boys);

function restFunc(...f: string[]): void {
  return f.forEach((fr) => console.log(fr));
}

restFunc("Jhon", "Deo", "Mosh", "Mery");
