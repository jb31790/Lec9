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

class Student extends Person {
  constructor(name, age, email, studentID) {
    super(name, age, email);
    this.studentID = studentID;
  }

  displayInfo() {
    let keys = Object.keys(this);
    for (let i = 0; i < keys.length; i++) {
      console.log(`The students ${keys[i]} is ${this[`${keys[i]}`]}`);
    }
  }
}

let me = new Student("J", null, "j@fakemail.com", 1337);
me.displayInfo();
