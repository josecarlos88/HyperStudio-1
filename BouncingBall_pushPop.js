// 2 - 13 - 2018
// ben moren tutorial
// MCAD
// Joseph Berns

let size = 100;
let speed = 10
let angle = 0.0;
let x = size/2;
let direction = 1;
let bgColor = true

function mouseAngle(){
  return map(mouseY,0,height,0,360)
}

function bgColorBoolean(){
  if(bgColor == true){
    return 255;
  }else{
    return 0;
  }
}
// what might I want to "variabilize?"

function setup() {
  createCanvas(windowWidth,windowHeight)
}

// function BouncingBall()

function draw() {
  background(bgColorBoolean())
  // rotate(mouseAngle());

  x = x + speed * direction;
  ellipse(x,100,size,size)

  if (x > width - size/2 || x<0 + size/2){
    direction = -direction
    bgColor = -bgColor
  }



}
