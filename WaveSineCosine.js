// 2 - 13 - 2018
// ben moren tutorial
// MCAD
// Joseph Berns

// variables
let x = 0;
let y = 0;
let size = 10;
let angle = 0.0;
let speed = 0.05;
let y1, y2, y3;
let scalar = 100;
let yOffset = 500;
let xOffset = 500;
let amplitude = 2;


function setup() {

  var cnv = createCanvas(windowWidth,windowHeight)
  cnv.style('display','block');
  noStroke()

}


function draw() {
  // background(200,180,210)

// y1 = yOffset + sin(angle) * scalar;

// fill(randomRGBfill())
fill(returnColorFromArray())

x = xOffset + sin(angle) * amplitude;
y = yOffset + cos(angle) * amplitude;

  ellipse(x,y,size,size)

  angle += speed
  // 
  // size = pow(size,1.001)
  // amplitude = pow(amplitude,1.1)

} // end draw
