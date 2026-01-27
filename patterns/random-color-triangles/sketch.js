let size = 25;
let rez = 0.008;

function setup(){
  createCanvas(windowWidth - 20, windowHeight - 70);
  strokeWeight(2);

  let saveButton = createButton("Save jpg");
  saveButton.position(10, height + 15);
  saveButton.mousePressed(saveArt);
  
  background(185);

  for(let x = 0; x < width; x += size){
    for(let y = 0; y < height; y += size){
      let n = noise(x * rez, y * rez) - 0.2;
      let c = n * 4;

      noStroke();

      if(c < 1){
        // diagonal ↘ → dos triángulos
        fill(random(255), random(255), random(255));
        triangle(x, y, x+size, y, x+size, y+size);
        fill(random(255), random(255), random(255));
        triangle(x, y, x, y+size, x+size, y+size);

      } else if (c < 2){
        // diagonal ↙ → dos triángulos
        fill(random(255), random(255), random(255));
        triangle(x, y, x+size, y, x, y+size);
        fill(random(255), random(255), random(255));
        triangle(x+size, y, x+size, y+size, x, y+size);

      } else if (c < 3){
        // vertical → dos rectángulos
        fill(random(255), random(255), random(255));
        rect(x, y, size/2, size);
        fill(random(255), random(255), random(255));
        rect(x+size/2, y, size/2, size);

      } else {
        // horizontal → dos rectángulos
        fill(random(255), random(255), random(255));
        rect(x, y, size, size/2);
        fill(random(255), random(255), random(255));
        rect(x, y+size/2, size, size/2);
      }
    }
  }
}

// save
function saveArt(){
  save("canvas.jpg");
}