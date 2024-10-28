#!/usr/bin/env node

class Person {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

  greet() {
    return `Hello, ${this.name}!`;
  }
}

let me = new Person("J", null, "j@fakemail.com");

console.log(me);
console.log(me.greet());
