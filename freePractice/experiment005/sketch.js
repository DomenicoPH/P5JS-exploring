let x = 0;
let y = 0;
let xspeed = 5;
let yspeed = 5.5;
let xdirection = 1;
let ydirection = 1;
let d = 10;
let count = 0;
let color = 0;

function setup() {
  createCanvas(400, 400);
  x = width/2;
  y = height/2;
  background(40);
}

function draw() {

  x = x + xspeed * xdirection;
  y = y + yspeed * ydirection;

  stroke(0,0);
  fill(color);
  ellipse(x, y, d, d);

  if (y > height - d/2 || y < d/2) {
    yspeed *= -1;
    count += 1;
  }
  if (x > width - d/2 || x < d/2) {
    xspeed *= -1;
    count += 1;
  }

  // Ciclo de tono: 0 -> 125 -> 250 -> 0
  if(count > 38){
    if(color >= 250){
      color = 0;
    } else {
      color += 125;
    }
    count = 0;
  }
}
