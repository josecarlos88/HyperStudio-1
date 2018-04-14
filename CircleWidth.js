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
  background(250);
  noFill()
  noCursor()
  // stroke(255)
}



function draw() {
  // background(0)
  // mouse10 = map(mouseY,0,width,0,10);
  // let weight = mouseY;
  strokeWeight(1);
  randomSeed(millis());
  for (var i = -60; i < width+60; i=i+10) {
    var r = random(0, 255);
    stroke(randomNumber(0,255));
    ellipse(width/2, height/2, i+5, height);
  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
