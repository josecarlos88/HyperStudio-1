// Map & Basic Animation
let ellipseYpos = 0 // top
let ellipseXpos = 0 // left
let ellipseX2pos = 0 // left
// let myStrokeWidth = 22

function   randomNumber(hi,lo){
  return random(hi,lo)
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
  // noFill()
  noCursor()
  // stroke(255)
}



function draw() {

  // mouse10 = map(mouseY,0,width,0,10);
  // let weight = mouseY;
  stroke(25)
  background(map(sin(second()),-1,1,0,255))

  // Radiating Lines from 4 sides
  strokeWeight(0);
  randomSeed(millis());
  for (var i = -60; i < width+60; i=i+10) { // bottom
    var r = random(0, 255);
    // stroke(randomNumber(0,255));
    line(mouseX, mouseY, i+60, height);
  }
  randomSeed(millis());
  for (var i = -60; i < width+60; i=i+10) { // top
    var r = random(0, 255);
    // stroke(randomNumber(0,255));
    line( i, 0,mouseX, mouseY);
  }
  randomSeed(millis());
  for (var i = -60; i < height+60; i=i+10) { // left
    var r = random(0, 255);
    // stroke(randomNumber(0,255));
    line( 0, i,mouseX, mouseY);
  }
  randomSeed(millis());
  for (var i = -60; i < height+60; i=i+10) { // right
    var r = random(0, 255);
    // stroke(randomNumber(0,255));
    line( width, i,mouseX, mouseY);
  }


// blendMode(DIFFERENCE)
// fill(0)
// stroke(255,0,0)
//   ellipse(width/4,height/2,300)
//   stroke(0,255,0)
//     ellipse(width/2,height/2,300)
//       stroke(0,255,255)
//         ellipse(width-width/4,height/2,300)
  // blendMode(LIGHTEST)
  // noStroke()
  // fill(randomNumber(0,255))



  // Discs
  strokeWeight(5)
  noFill()
  // for (i=10; i < width ; i = i +20){
  //     ellipse(width/2,height/2,i)
  // }
  function RadiateurMouse(dist,strokeWid,iterations){
    // if (dist=0||null){i=1};
    // if (strokeWide==null)
    // {strokeWeight(1)};
    // else
    // {strokeWieght(strokeWid)};
    strokeWeight(strokeWid)
    for (i=10, click=0; click < iterations ; i = i+dist, click++){

        ellipse(mouseX,mouseY,i)
  }}

function Radiateur(dist,strokeWid,iterations,x,y,colorStroke){
  // if (dist=0||null){i=1};
  // if (strokeWide==null)
  // {strokeWeight(1)};
  // else
  // {strokeWieght(strokeWid)};
  stroke(colorStroke)
  strokeWeight(strokeWid)
  for (i=10, click=0; click < iterations ; i = i+dist, click++){

      ellipse(x,y,i)
}}


for(x=1;x<width;x=x+100){
Radiateur(25,5,10,x,mouseY,map(sin(x),-1,1,0,255))
}

// function map(sin(x),-1,1,0,255)

textSize(32);
text(sin(x), 10, 30);



  // strokeWeight(2)
  // noFill()
  // ellipse(mouseX,mouseY,1212)
  // stroke(randomNumber(0,255),randomNumber(0,255),randomNumber(0,255));

  // strokeWeight(50)
  // noFill()
  // ellipse(mouseX,mouseY,555)
  // stroke(randomNumber(0,255),randomNumber(0,255),randomNumber(0,255));
  // strokeWeight(25)
  // noFill()
  // ellipse(width/mouseX,mouseY,555/3)
  // stroke(randomNumber(0,255),randomNumber(0,255),randomNumber(0,255));
  // strokeWeight(10)
  // noFill()
  // ellipse(mouseX,mouseY,555/8)
}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
