var img;

function preload() {
  img = loadImage("numberLegend.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(200);

}
  let shapeSize=100;
  let rotationVal = 0;
  let locX = mouseX
  let locY = mouseY


function draw() {

  image(img,0,0)

  if (keyIsPressed){
  if ((key == '1')) {
    fill(0,170,176)
  } if ((key == '2')) {
    fill(226,54,39)
  } if ((key == '3')) {
    fill(178,30,142)
  } if ((key == '4')) {
    fill(77,62,152)
  } if ((key == '5')) {
    fill(0,105,181)
  } if ((key == '6')) {
    fill(255,221,0)
  } if ((key == '7')) {
    fill(0,166,81)
  } if ((key == '8')) {
    fill(210,15,140)
  } if ((key == '9')) {
    fill(188,214,49)
  }
}

  let myWave = sin(map(millis(),0,1000,0,1))
  // fill(myWave*255)
  translate(mouseX,mouseY);
  // scale(shapeSize);
  rotate(rotationVal);
  rotationVal=rotationVal+.01

  if (mouseIsPressed){
    // ellipse(mouseX,mouseY,shapeSize);
    rect(0-shapeSize/2,0-shapeSize/2,shapeSize,shapeSize);
  };
}

function keyPressed() {
  if (keyCode === UP_ARROW) { // shrink brush
    shapeSize=shapeSize-10;
    // shapeSize++
  } else if (keyCode === DOWN_ARROW) { // expand brush
    shapeSize=shapeSize+10;
  } else if (keyCode === LEFT_ARROW) {
    // rotationVal=rotationVal+.1
    strokeWeight(0)
  } else if (keyCode === RIGHT_ARROW) {
    // rotationVal=rotationVal-.1
    strokeWeight(1)
  } else if (keyCode === ENTER) { // reset drawing
    background(200);
  }
}

function windowReshapeSized() {
  reshapeSizeCanvas(windowWidth, windowHeight);
}
