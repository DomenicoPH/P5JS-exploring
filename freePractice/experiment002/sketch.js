let x = 0;
let y = 0;
let xspeed = 5;
let yspeed = 5.5;
let xdirection = 1;
let ydirection = 1;
let d = 25;
let count = 0;

function setup() {
  createCanvas(400, 400);
  x = width/2;
  y = height/2;
  background(20);
}

function draw() {
  
  count += 1;
  if(count == 255){
    count = 0;
  }

  x = x + xspeed * xdirection;
  y = y + yspeed * ydirection;

  stroke(0,0);
  fill(random(255), random(255), random(255));
  ellipse(x, y, d, d);

  if (y > height - d/2 || y < d/2) {
    yspeed *= -1;
  }
  if (x > width - d/2 || x < d/2) {
    xspeed *= -1;
  }
}
