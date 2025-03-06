class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

const rectangle = new Rectangle(-100000, "Pizz");

console.log(rectangle.width);
console.log(rectangle.height);
