#!/usr/bin/env node

function calculateCircleArea(r) {
  return r * r * Math.PI;
}

function calculateTriangleArea(b, h) {
  return b * h * 0.5;
}
console.log(calculateCircleArea(2));
console.log(calculateTriangleArea(3, 4));
