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
  background(0)
  // mouse10 = map(mouseY,0,width,0,10);
  // let weight = mouseY;

  strokeWeight(2);
  stroke(0,0,255)
  // randomSeed(millis());
  for (var i = 20; i < width; i=i+5) {
    // var r = random(0, 255);
    // stroke(randomNumber(0,255));
    jammer = mouseX*sin(i)
    stroke(255*sin(2),100,255*tan(millis()*2))
    ellipse(mouseX*sin(i)+width/2, mouseY+height/2, i, height);
  }
  stroke(255,0,0)
  // for (var i = 20; i < width; i=i+20) {
  //   // var r = random(0, 255);
  //   // stroke(randomNumber(0,255));
  //   ellipse(width/2, height/2, width/2);
  // }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
