// Mona Lisa Test 02

let img;
let size;
let asciiChar =
  "$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\\|()1{}[]?-_+~<>i!lI;:,\"^`'. ";

function preload() {
  //img = loadImage("img/cats.png");
  img = loadImage("img/test.jpg");
}

function setup() {
  createCanvas(400, 400);
  img.resize(100, 0);
  size = width / img.width;
  print(size);
  print(asciiChar);
}

function draw() {
  background(220);
  img.loadPixels();
  //print(img.pixels.length);

  for (let i = 0; i < img.width; i++) {
    for (let j = 0; j < img.height; j++) {
      let pixelIndex = (i + j * img.width) * 4;
      let r = img.pixels[pixelIndex + 0];
      let g = img.pixels[pixelIndex + 1];
      let b = img.pixels[pixelIndex + 2];

      let bright = brightness(color(r, g, b));
      let tIndex = floor(map(bright, 0, 100, 0, asciiChar.length));

      let x = i * size + size / 2;
      let y = j * size + size / 2;
      let t = asciiChar.charAt(tIndex);
      textSize(size);
      textAlign(CENTER, CENTER);
      text(t, x, y);
    }
  }

}
