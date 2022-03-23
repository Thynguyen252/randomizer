// randomize film photography

let film = [];
let numFilm = 5;
let button;

function preload(){
  let film1 = loadImage('images/animal-01.jpg');
  let film2 = loadImage('images/animal-02.jpg');
  let film3 = loadImage('images/animal-03.jpg');
  let film4 = loadImage('images/animal-04.jpg');
  let film5 = loadImage('images/animal-05.jpg');

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

  button1 = createButton('“Proficiency in photography techniques and composition will yield you just a good image. But, true passion and love for wildlife will make you a better wildlife photograpoher. – Alvis Lazarus');
  button1.position(0, 750);
  button1.size(300, 140);
}





function draw() {
  background(250);
  let randoImg = random(film)
  imageMode(CORNER);
  image(film, 0, 0, width, film.height*width/film.width);
  image(film, 0.5*width, 0.5*height, scale*width, scale*film.height*width/film.width);
}
