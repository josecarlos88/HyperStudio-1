let x=200;
let y=1;

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(255/2);
  textSize(100)
  textAlign(CENTER)
  noCursor()
  noStroke()
}

function mouseYcolor(){
  return map(mouseY,0,height,0,255)
}

function millisColor() {
  return map(sin(map(millis(),0,100,0,1)),-1,1,0,255)
}

function mouseXcolor(){
  return map(mouseX,0,height,0,255)
}

function draw(){
  fill(255,mouseXcolor(),255-mouseYcolor())
  background(millisColor()*.2,mouseYcolor(),255-mouseYcolor(),255-mouseYcolor())

  // rect(mouseX,mouseY,x,200+y)
    triangle(mouseX,mouseY,mouseX+200,mouseY+200,200,200)
    triangle(mouseX,mouseY,mouseX+200,mouseY+200,width-200,height-200)

    blendMode(DIFFERENCE)
    // fill(mouseXcolor(),255,255-mouseYcolor())
    text('Kombucha',mouseX,mouseY,width-100,height-100);
    blendMode(NORMAL)

  if(x>200){y++}
  else{
  x = x + 5;
}

}
