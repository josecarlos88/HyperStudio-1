var canvas;
// var mic;
var bgX;
var bgY;
var img;
// var y = 0;
// var x = 0;
let history = 100;
let spacing = 30;
let x = [];
let y = [];

function windowResized() {
  // console.log('resized');
  resizeCanvas(windowWidth, windowHeight);
}

function mouseBackgroundColor() {
   bgX = map(mouseX,0,width,0,255);
   bgY = map(mouseY,0,height,0,255);
}

function setup() {
  canvas = createCanvas(windowWidth,windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  // mic = new p5.AudioIn();
  // mic.start();
  img = loadImage("assets/monster-truck.gif");

  for ( var i = 0 ; i < history ; i++){
    x[i] = 0
    y[i] = 0
  }
noStroke()

}



function draw() {
  mouseBackgroundColor()

  background(bgX,bgY,200);
  // var vol = mic.getLevel();

  // rewriting history, shifting it forward
  for (let i = history ; i > 0 ; i--){
    x[i] = x[i - 1];
    y[i] = y[i - 1];
  }

  x[0] = mouseX
  y[0] = mouseY

  for (let i = 0; i < history ; i++){
    fill(255-i*4,200,100+i*2,255-i*4);
    ellipse(x[i],y[i],5*i,5*i)
    }

// for(i=1;i<width;i++){
  // image(img, width-x, height-200, img.width/12, img.height/12);
// }

// y+=10;
// if (y > height){ // reset at the top : hit detection
//   y = 0;
// }
// x+=5;
// if (x > 200+width){ // reset at the top : hit detection
//   x = 0;
// }

}

// function resize
