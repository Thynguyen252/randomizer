// randomize film photography

let film = [];
let numFilm = 5;
let button1;
function preload(){
  let film1 = loadImage('images/landscape-01.jpg');
  let film2 = loadImage('images/landscape-02.jpg');
  let film3 = loadImage('images/landscape-03.jpg');
  let film4 = loadImage('images/landscape-04.jpg');
  let film5 = loadImage('images/landscape-05.jpg');

  film = [film1, film2, film3, film4, film5];

  let link = createA('index.html','Back');
  link.position(0, 760);
  link.style('font-size', '17px');
  link.style('color', '#232323');
  link.style('font', helvetica);

}
function randomPicture(){
  background(random(film));
  randomIndex = int(random(film));
  img(film[randomIndex].film, 0, 0);
  film.splice(randomIndex);
}

function setup() {
  createCanvas(600, 700);

  button = createButton('More');
  button.position(500, 750);
  button.mousePressed(randomPicture);

  button1 = createButton('“It is through living that we discover ourselves, at the same time as we discover the world around us.” - Henri Cartier-Bresson');
  button1.position(0, 750);
  button1.size(300, 120);
}

function draw() {
  background(250);
  let randoImg = random(film)
  imageMode(CORNER);
  image(film, 0, 0, width, film.height*width/film.width);
  image(film, 0.5*width, 0.5*height, scale*width, scale*film.height*width/film.width);
}
