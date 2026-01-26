let x;
let y;
let xspeed = 5;
let yspeed = 5.5;
let xdirection = 1;
let ydirection = 1;
let d = 10;
let count = 0;

function setup() {
  createCanvas(400, 400);
  x = width/2;
  y = height/2;
  background(120);
}

function draw() {

  x = mouseX;
  y = mouseY;

  let colorX = map(mouseX, 0, width, 255);
  let colorY = map(mouseY, 0, height, 255);
  
  count += 0.01;
  count += 0.1;
  count += 1;

  translate(width/2, height/2);
  rotate(count);
  rectMode(CENTER);
  fill(random(255), random(255), random(255));
  rect(0, 0, 250, 250);
}
