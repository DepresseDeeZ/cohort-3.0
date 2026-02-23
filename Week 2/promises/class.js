// classes
class Rectangle {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }
  area() {
    return this.width * this.height;
  }
  paint() {
    return `the color of  the Rectangle is ${this.color}`;
  }
}

const rect = new Rectangle(4, 6, "blue");
const color = rect.paint();
const area = rect.area();
console.log(area);
console.log(color);
