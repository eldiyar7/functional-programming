// our formula: 
// (A + C) * B + (A * B)  

class Formula {
    constructor(n) {
        this.result = n; 
    }
    add(other) {
        this.result += other.result; 
        return this;
    }
    multiply(other) {
        this.result = this.result * other.result; 
        return this;
    } 
}
const a = new Formula(4);
const b = new Formula(2);
const c = new Formula(0);
const result = a
    .add(c) // 4
    .multiply(b) // 8
    .add(a.multiply(b)) // a.multiply(b) = 16 
    .result;
console.log(result); // 32, needs to be 16

// Functional approach:
const add = (x, y) => x + y;
const multiply = (x, y) => x * y;

const _a = 4;
const _b = 2;
const _c = 0;

// const res = add(multiply(add(_a, _c), _b), multiply(_a, _b)); OR
const res = multiply(_a, add(_b, _b));
console.log(res); 

// associative
// add(add(x, y), z) === add(x, add(y, z));
// commutative
// add(x, y) === add(y, x);
// identity
// add(x, 0) === x;
// distributive
// multiply(x, add(y,z)) === add(multiply(x, y), multiply(x, z));









