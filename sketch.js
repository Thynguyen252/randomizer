// capitals in the world

let capitals = ["Berlin", "Paris", "Tokyo", "London", "Rome", "Keiv", "Vienna"];

function setup() {
  createCanvas(600, 600);
  background(200);

  // capitals[0] = "Berlin germany";
  // console.log(capitals);

  console.log("initial array is");
  console.log(capitals);

  capitals.pop();
  console.log("array after pop");
  console.log(capitals);

  capitals.push("Hanoi");
  console.log("array after push");
  console.log(capitals);
}

function draw() {}
