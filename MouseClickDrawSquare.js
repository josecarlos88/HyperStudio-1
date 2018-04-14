function setup() {
  createCanvas(windowWidth,windowHeight);
  background(250);

}
  let shapeSize=100;
  let rotationVal = 0;
  let locX = mouseX
  let locY = mouseY


function draw() {

  translate(mouseX,mouseY);
  rotate(rotationVal);

  if (mouseIsPressed){
    // ellipse(mouseX,mouseY,shapeSize);
    rect(0-shapeSize/2,0-shapeSize/2,shapeSize,shapeSize);
  };
}

function keyPressed() {
  if (keyCode === UP_ARROW) { // shrink brush
    shapeSize=shapeSize-10;
  } else if (keyCode === DOWN_ARROW) { // expand brush
    shapeSize=shapeSize+10;
  } else if (keyCode === LEFT_ARROW) {
    rotationVal=rotationVal+.1
  } else if (keyCode === RIGHT_ARROW) {
    rotationVal=rotationVal-.1
  } else if (keyCode === ENTER) { // reset drawing
    background(200);
  }
}

function windowReshapeSized() {
  reshapeSizeCanvas(windowWidth, windowHeight);
}
