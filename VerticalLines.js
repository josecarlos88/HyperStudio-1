// Map & Basic Animation
let ellipseYpos = 0 // top
let ellipseXpos = 0 // left
let ellipseX2pos = 0 // left
// let myStrokeWidth = 22

function   randomNumber(hi,lo){
  return random(hi,lo)
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
  // noFill()
  // stroke(255)
}

function draw() {
  // strokeWeight(22);
  randomSeed(99);
  for (var i = 0; i < width; i) {
    stroke(2);
    line(i, 0, i, height);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
