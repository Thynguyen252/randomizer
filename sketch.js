// randomize film photography

let film = [];
let numFilm = 9;

function preload(){
  let film1 = loadImage('images/sunset-01.jpg');
  let film2 = loadImage('images/sunset-02.jpg');
  let film3 = loadImage('images/sunset-03.jpg');
  let film4 = loadImage('images/sunset-04.jpg');
  let film5 = loadImage('images/smoke-01.jpg');
  let film6 = loadImage('images/smoke-02.jpg');
  let film7 = loadImage('images/smoke-03.jpg');
  let film8 = loadImage('images/smoke-04.jpg');
  let film9 = loadImage('images/smoke-05.jpg');

  film = [film1, film2, film3, film4, film5, film6, film7, film8, film9];

}

function setup() {
  createCanvas(600, 700);
  noLoop();



}

function draw() {
  background(250);
  let randoImg = random(film)
  imageMode(CORNER);
  image(film, 0, 0, width, film.height*width/film.width);
  image(film, 0.5*width, 0.5*height, scale*width, scale*film.height*width/film.width);
}


function mousePressed(){
  background(random(film));
  randomIndex = int(random(film));
  img(film[randomIndex].film, 0, 0);
  film.splice(randomIndex);
}
