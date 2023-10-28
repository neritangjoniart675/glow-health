// Filename: SophisticatedCode.js
// Description: A sophisticated and elaborate code example showcasing advanced features

// Constants
const PI = 3.14159;

// Class: Shape
class Shape {
  constructor(color) {
    this.color = color;
  }

  // Method: getArea
  getArea() {
    throw new Error("Method not implemented");
  }

  // Method: getPerimeter
  getPerimeter() {
    throw new Error("Method not implemented");
  }
}

// Class: Circle (Inherits Shape)
class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }

  // Method: getArea (Overridden from Shape)
  getArea() {
    return PI * this.radius ** 2;
  }

  // Method: getPerimeter (Overridden from Shape)
  getPerimeter() {
    return 2 * PI * this.radius;
  }
}

// Class: Rectangle (Inherits Shape)
class Rectangle extends Shape {
  constructor(color, width, height) {
    super(color);
    this.width = width;
    this.height = height;
  }

  // Method: getArea (Overridden from Shape)
  getArea() {
    return this.width * this.height;
  }

  // Method: getPerimeter (Overridden from Shape)
  getPerimeter() {
    return 2 * (this.width + this.height);
  }
}

// Helper Function: generateRandomColor
function generateRandomColor() {
  const colors = ["red", "green", "blue", "yellow", "orange"];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

// Function: createRandomShapes
function createRandomShapes(count) {
  const shapes = [];

  for (let i = 0; i < count; i++) {
    const randomColor = generateRandomColor();
    const randomShape = Math.random() >= 0.5 ? new Circle(randomColor, Math.random() * 10) : new Rectangle(randomColor, Math.random() * 10, Math.random() * 10);
    shapes.push(randomShape);
  }

  return shapes;
}

// Usage Example:
const shapes = createRandomShapes(5);
console.log("Shapes created:", shapes);

shapes.forEach((shape, index) => {
  console.log(`Shape ${index + 1}:`);
  console.log("- Color:", shape.color);
  console.log("- Area:", shape.getArea());
  console.log("- Perimeter:", shape.getPerimeter());
});
