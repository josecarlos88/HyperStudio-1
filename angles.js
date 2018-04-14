// 2 - 13 - 2018
// ben moren tutorial
// MCAD
// Joseph Berns

// variables
let angle = 0.0;
let sinVal = 0;
let speed = 0.05;

function setup() {

  var cnv = createCanvas(windowWidth,windowHeight)
  cnv.style('display','block');

}

function backg(){
  return map(sinVal,-1,1,50,200)
}

function draw() {
  // background(map(sinVal,-1,1,100,200));
  background(backg());

  sinVal = sin(angle);
  angle += speed;

  text(sinVal,50,50)

}
