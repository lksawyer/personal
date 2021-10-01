// Program simplified to focus on concept of method overriding

// Intermediate function Inheritance
function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

// Simple Shape constructor
function Shape(color) {}

// Duplicate method defined on Shape.prototype
Shape.prototype.duplicate = function () {
  console.log("duplicate");
};

// Simple Cirlce construcotr
function Circle() {}

// Circle inherits from shape
extend(Circle, Shape);

// Method overwritting
Circle.prototype.duplicate = function () {
  console.log("duplicate circle");
};

// Create new Circle obj
const c = new Circle();
