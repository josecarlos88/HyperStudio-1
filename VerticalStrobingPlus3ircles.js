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
  // mouse10 = map(mouseY,0,width,0,10);
  // let weight = mouseY;
  strokeWeight(10);
  randomSeed(millis());
  for (var i = 0; i < width; i=i+10) {
    var r = random(0, 255);
    stroke(randomNumber(0,255),randomNumber(0,255),randomNumber(0,255));
    line(i, 0, i+20, height);
  }
// blendMode(DIFFERENCE)
fill(0)
stroke(255,0,0)
  ellipse(width/4,height/2,300)
  stroke(0,255,0)
    ellipse(width/2,height/2,300)
      stroke(0,255,255)
        ellipse(width-width/4,height/2,300)
  // blendMode(LIGHTEST)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
