// Factory function
function createCricle(radius) {
  return {
    // With ES6 if key/value are the same, we can use this syntax
    // - prio to ES6, this code would be radius: radius,
    radius,
    draw: function () {
      console.log("draw");
    },
  };
}

// Call the factory function to create a new circle
const circle = createCricle(1);
// Access circle obj members using dot notation
circle.draw();

// Obj literal syntax ={};
// - simple way to define an obj
const circle = {
  // Properties
  // - used to hold values
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  // Method
  // - used to define logic
  draw: function () {
    console.log("draw");
  },
};

// Access circle obj members using dot notation
circle.draw();
