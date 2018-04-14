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
  noCursor()
  // stroke(255)
}



function draw() {
  background(0)
  // mouse10 = map(mouseY,0,width,0,10);
  // let weight = mouseY;
  strokeWeight(1);
  randomSeed(millis());
  for (var i = -60; i < width+60; i=i+10) {
    var r = random(0, 255);
    stroke(randomNumber(0,255));
    line(mouseX, mouseY, i+60, height);
  }
  randomSeed(millis());
  for (var i = -60; i < width+60; i=i+10) {
    var r = random(0, 255);
    stroke(randomNumber(0,255));
    line( i, 0,mouseX, mouseY);
  }
  randomSeed(millis());
  for (var i = -60; i < height+60; i=i+10) {
    var r = random(0, 255);
    stroke(randomNumber(0,255));
    line( 0, i,mouseX, mouseY);
  }
  randomSeed(millis());
  for (var i = -60; i < height+60; i=i+10) {
    var r = random(0, 255);
    stroke(randomNumber(0,255));
    line( width, i,mouseX, mouseY);
  }
// blendMode(DIFFERENCE)
// fill(0)
// stroke(255,0,0)
//   ellipse(width/4,height/2,300)
//   stroke(0,255,0)
//     ellipse(width/2,height/2,300)
//       stroke(0,255,255)
//         ellipse(width-width/4,height/2,300)
  // blendMode(LIGHTEST)
  // noStroke()
  // fill(randomNumber(0,255))
  strokeWeight(100)
  noFill()
  ellipse(mouseX,mouseY,1212)
  stroke(randomNumber(0,255),randomNumber(0,255),randomNumber(0,255));
  strokeWeight(50)
  noFill()
  ellipse(mouseX,mouseY,555)
  stroke(randomNumber(0,255),randomNumber(0,255),randomNumber(0,255));
  strokeWeight(25)
  noFill()
  ellipse(mouseX,mouseY,555/3)
  stroke(randomNumber(0,255),randomNumber(0,255),randomNumber(0,255));
  strokeWeight(10)
  noFill()
  ellipse(mouseX,mouseY,555/8)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
