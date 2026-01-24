// Mona Lisa Test 02

let img;
let size;
//let asciiChar = "█▓▒░ ";
//let asciiChar = "$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\\|()1{}[]?-_+~<>i!lI;:,\"^`'. ";
let asciiChar = "@%#*+=-:. ";
let video;
let vidw = 64;
let vidh = 48;
let scl = 10;
let charw;
let charh;

function preload() {
  //img = loadImage("img/cats.png");
  img = loadImage("img/test.jpg");
}

function setup() {
  //createCanvas(vidw * scl, vidh * scl);
  createCanvas(windowWidth, windowHeight);
  //img.resize(100, 0);
  //size = width / img.width;

  video = createCapture(VIDEO);
  video.size(vidw*2,vidh*2);
  video.hide();
  charw = width / video.width;
  charh = height / video.height;
}

function draw() {
  background(220);

  // camera flip
  push();
  translate(width, 0);   // mueve el origen al borde derecho
  scale(-1, 1);          // invierte horizontalmente
  // camera flip

  video.loadPixels();
  //print(img.pixels.length);

  for (let i = 0; i < video.width; i++) {
    for (let j = 0; j < video.height; j++) {
      let pixelIndex = (i + j * video.width) * 4;
      let r = video.pixels[pixelIndex + 0];
      let g = video.pixels[pixelIndex + 1];
      let b = video.pixels[pixelIndex + 2];

      let bright = brightness(color(r, g, b));
      let tIndex = floor(map(bright, 0, 100, 0, asciiChar.length));

      let x = i * charw + charw / 2;
      let y = j * charh + charh / 2;
      let t = asciiChar.charAt(tIndex);
      textSize(charw * 0.75);
      textAlign(CENTER, CENTER);
      text(t, x, y);
    }
  }

}
