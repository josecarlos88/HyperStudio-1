// brownian motion
// hit detection
// 2 - 13 - 2018
// ben moren tutorial
// MCAD
// Joseph Berns

let x = 500;
let y = 500;
let size = 100;
let speed = 55;
let direction;

// oscillator
var osc;
var playing = false;

function setup() {
  noStroke()
  createCanvas(windowWidth,windowHeight)

  // oscillator
  osc = new p5.Oscillator();
  osc.setType('sine');
  osc.freq(240);
  osc.amp(0);
  osc.start();
}

function draw() {
  background(255,255,255,22)
  x += random(-speed,speed);
  y += random(-speed,speed);
  fill(random(255),random(255),random(255))
  ellipse(x,y,size);

x = constrain(x,size/2,width - size/2)
y = constrain(y,size/2,height - size/2)

}

function mouseClicked() {
  if (mouseX > 0 && mouseX < width && mouseY < height && mouseY > 0) {
    if (!playing) {
      // ramp amplitude to 0.5 over 0.05 seconds
      osc.amp(0.5, 0.05);
      playing = true;
      // backgroundColor = color(0,255,255);
    } else {
      // ramp amplitude to 0 over 0.5 seconds
      osc.amp(0, 0.5);
      playing = false;
      // backgroundColor = color(255,0,255);
    }
  }
}
