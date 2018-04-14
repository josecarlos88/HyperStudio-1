// variables
let ellipseWidth = 500;


function setup() {
  createCanvas(windowWidth,windowHeight);
  background(250)
  stroke(240)
  noFill();
  print("width =", windowWidth, ", height =", windowHeight);
  noCursor();

}

function draw() {
  // ellipsemouseX = mouseX;
    print("mouse X = ", mouseX, "mouse Y =", mouseY);
    blendMode(MULTIPLY)
    background(100)
    strokeWeight(400)
    blendMode(DIFFERENCE)
    ellipse(width/2,height/2,mouseY/3,mouseX/3);
    ellipse(width/2,height/2,mouseX/3,mouseY/3);
    ellipse(width/2,height/2,mouseY/5,mouseX/5);
    ellipse(width/2,height/2,mouseX/5,mouseY/5);
    ellipse(width/2,height/2,mouseY/7,mouseX/7);
    ellipse(width/2,height/2,mouseX/7,mouseY/7);

    ellipse(width/4,height/2,mouseY/3,mouseX/3);
    ellipse(width/4,height/2,mouseX/3,mouseY/3);
    ellipse(width/4,height/2,mouseY/5,mouseX/5);
    ellipse(width/4,height/2,mouseX/5,mouseY/5);
    ellipse(width/4,height/2,mouseY/7,mouseX/7);
    ellipse(width/4,height/2,mouseX/7,mouseY/7);

    // ellipse(width/1.41421356237,height/2,mouseY/3,mouseX/3);
    // ellipse(width/1.41421356237,height/2,mouseX/3,mouseY/3);
    // ellipse(width/1.41421356237,height/2,mouseY/5,mouseX/5);
    // ellipse(width/1.41421356237,height/2,mouseX/5,mouseY/5);
    // ellipse(width/1.41421356237,height/2,mouseY/7,mouseX/7);
    // ellipse(width/1.41421356237,height/2,mouseX/7,mouseY/7);
// blendMODE(SCREEN)
      fill(242,123,25);
      stroke(20,133,240)

    ellipse(mouseX,mouseY,100);
    // noFill();

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
