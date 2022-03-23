// randomize film photography

let film = [];
let numFilm = 5;
let button1;
function preload(){
  let film1 = loadImage('images/subway-01.jpg');
  let film2 = loadImage('images/subway-02.jpg');
  let film3 = loadImage('images/subway-03.jpg');
  let film4 = loadImage('images/subway-04.jpg');
  let film5 = loadImage('images/subway-05.jpg');


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

  button1 = createButton('“If I am looking for a story at all, it is in my relationship to the subject — the story that tells me, rather than that I tell” - Bruce Davidson');
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
