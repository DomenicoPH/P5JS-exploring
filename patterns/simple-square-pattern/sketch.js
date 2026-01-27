let x;
let y;
let space = 50;

function setup() {
  createCanvas(500, 500);
  background(200);
  fill(0);
  strokeWeight(3);
  rectMode(CENTER);

  for (x = 0; x < width + 50; x += space) {
    for (y = 0; y < height + 50; y += space) {
      line(x, y, x + space, y);
      line(x, y, x, y + space);
      spawnRedSquare();
      spawnBlueSquare();
    }
  }
}

function spawnBlueSquare(){
  //let size = random(5,10);
  let size = 20;
  fill(0,0,255);
  square(x + space / 2, y + space / 2, size);
}

function spawnRedSquare(){
  //let size = random(5,10);
  let size = 20;
  fill(255,0,0)
  square(x, y, size);
}
