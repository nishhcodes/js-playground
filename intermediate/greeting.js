function User(name, age) {
    this.name = name,
    this.age = age
} 

User.prototype.greeting = function() {
    return `Hello! I'm ${this.name}. I'm ${this.age} years young!`
}

const user1 = new User('Manish', 24);
const user2 = new User('Issac', 26);

console.log(user1.greeting());
console.log(user2.greeting());