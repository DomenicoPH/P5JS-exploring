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
      let c = random(4);   // ahora hasta 4 casos

      // color aleatorio para cada celda
      fill(random(255), random(255), random(255));
      stroke(0);

      if(c < 1){
        // diagonal ↘
        quad(x, y, x+size, y, x+size, y+size, x, y+size);
      } else if (c < 2){
        // diagonal ↙
        quad(x, y, x+size, y, x+size, y+size, x, y+size);
      } else if (c < 3){
        // vertical
        rect(x, y, size, size);
      } else {
        // horizontal
        rect(x, y, size, size);
      }
    }
  }
}

// save
function saveArt(){
  save("canvas.jpg");
}