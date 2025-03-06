class Person {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    return `Hola, I'm ${this.name}`;
  }
}

const user = new Person("Manish Biswakarma");
console.log(user.sayHello());
