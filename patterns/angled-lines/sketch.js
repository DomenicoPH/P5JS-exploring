size = 25;
let rez = 0.008;

function setup(){
  createCanvas(windowWidth - 20, windowHeight - 70);
  strokeWeight(5);

  let saveButton = createButton("Save jpg");

  saveButton.position(10, height + 15);
  saveButton.mousePressed(saveArt);
  
  background(185);

  for(x = 0; x < width; x += size + 0){
    for(y = 0; y < height; y += size + 0){
      n = noise(x * rez, y * rez) - 0.2;
      c = random(2);
      //c = n * 4;

      if(c < 1){
        line(x, y, x + size, y + size)
      } else if (c < 2){
        line(x, y + size, x + size, y)
      } else if (c < 3){
        line(x, y, x, y + size)
      } else if (c < 4){
        line(x, y, x + size, y)
      }
    }
  }
};

// save
function saveArt(){
  save("canvas.jpg");
}