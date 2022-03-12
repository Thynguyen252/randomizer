// capitals in the world

let capitals = [
  {name: "Berlin", color: "red"},
  {name: "Paris", color: "blue"},
  {name: "Tokyo", color: "pink"},
  {name: "London", color: "green"},
  {name: "Rome", color: "brown"},
  {name: "Keiv", color: "purple"},
  {name: "Vienna", color: "gray"},
];
 let randomIndex;
function setup() {
  createCanvas(600, 600);
  background(200);

  // capitals[0] = "Berlin germany";
  // console.log(capitals);

  /*console.log("initial array is");
  console.log(capitals);

  capitals.pop();
  console.log("array after pop");
  console.log(capitals);

  capitals.push("Hanoi");
  console.log("array after push");
  console.log(capitals);*/

  // conslole.log(capitals[0].name);

  // console.log(capitals[int(random(3))]);

/*randomIndex = int(random(capitals.length));
  console.log(capitals[randomIndex].name);
  text(capitals[randomIndex].name, 200, 200);

capitals.splice(randomIndex,1);
console.log(capitals);*/


}

function draw() {
}

function mousePressed(){
  background(random(200, 255));
  randomIndex = int(random(capitals.length));
  text(capitals[randomIndex].name, 200, 200);
  capitals.splice(randomIndex,1);
}
