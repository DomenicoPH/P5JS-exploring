// Mona Lisa Test 01

let img;
let size;
//let asciiChar = "█▓▒░▪· ";
//let asciiChar = "$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\\|()1{}[]?-_+~<>i!lI;:,\"^`'. ";
//let asciiChar = "GNOMONOgnomono....";
let asciiChar = "@%#*+=-:. ";

function preload() {
  img = loadImage("img/aboutme.jpg");
}

function setup() {
  createCanvas(1248/2, 832/2);
  img.resize(120,0);
  size = width / img.width;
  print(size);
  print(asciiChar);
}

function draw() {
  background(220);
  
  //image(img, 0, 0);

    for(let i=0; i < img.width; i++){
        for(let j=0; j < img.height; j++){
            let pixelVal = img.get(i, j);
            let c = brightness(pixelVal);
            let tIndex = floor(map(c, 0, 100, 0, asciiChar.length));
            
            let x = i * size + size/2;
            let y = j * size + size/2;
            let t = asciiChar.charAt(tIndex);
            textSize(size);
            textAlign(CENTER, CENTER);
            text(t, x, y);
        }
    }
}
