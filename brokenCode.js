// Map & Basic Animation
let ellipseYpos = 0 // top
let ellipseXpos = 0 // left
let ellipseX2pos = 0 // left

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0)
}

function draw() {
  blendMode(OVERLAY)
  background(0)
    print("mouse X = ", mouseX, "mouse Y =", mouseY);

    // ellipse(width/2,ellipseYpos-999,999,999)
    // ellipseYpos = ellipseYpos + mouseX/50;
    // if (ellipseYpos > height+999){ // resets ball at the top of the screen
    //   ellipseYpos = 0;
    // }

    ellipse(ellipseXpos-999,height/2,999,999)
    ellipseXpos = ellipseXpos + mouseY/20;
    if (ellipseXpos > width+999){ // resets ball at the top of the screen
      ellipseXpos = 0;
    }

    ellipse(ellipseX2pos-999,height/2,999,999)
    ellipseX2pos = ellipseX2pos - mouseY/20;
    if (ellipseX2pos < 0){ // resets ball at the top of the screen
      ellipseX2pos = width+999;
    }


}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
