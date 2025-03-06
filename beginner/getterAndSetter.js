const person = {
  firstName: "Manish",
  lastName: "Biswakarma",

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  set fullName(item) {
    const parts = item.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

person.fullName = "Anira Rai";

console.log(person.fullName);
