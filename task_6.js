#!/usr/bin/env node

let numbers = [2, 4, 6, 8, 10];

let squaredNumbers = numbers.map((num) => num * num);
console.log(squaredNumbers);

let totalSum = numbers.reduce((total, current) => total + current);
console.log(totalSum);

let maxValue = Math.max(...numbers);
console.log(maxValue);

let minValue = Math.min(...numbers);
console.log(minValue);
