function   randomNumber(hi,lo){
  return round(random(hi,lo))
}

  let repeats = 10;
  var colorArray = [[50,200,250],[255,200,0],[255,0,0],[176,50,250],[20,50,15]];
  let multiplier = 1;
  let xWidth = 300;
  let yHeight = 200;

function setup() {
  createCanvas(windowWidth,windowHeight);

}

function draw() {

  blendMode(NORMAL)
      background(100);
  for(y=1;y<yHeight;y++){
  for(i=1;i<xWidth;i++){
    if (i<xWidth/2)
    {
    // {stroke(colorArray[randomNumber(2,2)]);
  fill(colorArray[round(map(sin(i^y),-1,1,0,4))]);
        // strokeWeight(2);
    }
    if (y<yHeight/2 && i>xWidth/2) {
  // stroke(colorArray[randomNumber(0,3)]);
    // stroke(colorArray[round(map(sin(i/y),-1,1,0,3))]);
  fill(colorArray[round(map(sin(i*.50),-1,1,0,4))]);
    // stroke(colorArray[round(map(sin(i/y),-1,1,0,3))]);
  // background(255/2);
    // strokeWeight(5);
}
if (y<yHeight/2 && i<xWidth/2) {
// stroke(colorArray[randomNumber(0,3)]);
// stroke(colorArray[round(map(sin(i/y),-1,1,0,3))]);
fill(colorArray[round(map(sin(i*y),-1,1,0,4))]);
// stroke(colorArray[round(map(sin(i/y),-1,1,0,3))]);
// background(255/2);
// strokeWeight(5);
}
if (y>yHeight/2 && i<xWidth/2) {
// stroke(colorArray[randomNumber(0,3)]);
// stroke(colorArray[round(map(sin(i/y),-1,1,0,3))]);
fill(colorArray[round(map(sin(y^i*50),-1,1,0,4))]);
// stroke(colorArray[round(map(sin(i/y),-1,1,0,3))]);
// background(255/2);
// strokeWeight(5);
}
if (y>yHeight/2 && i>xWidth/2) {
// stroke(colorArray[randomNumber(0,3)]);
// stroke(colorArray[round(map(sin(i/y),-1,1,0,3))]);
fill(colorArray[round(map(sin(y^i),-1,1,0,4))]);
// stroke(colorArray[round(map(sin(i/y),-1,1,0,3))]);
// background(255/2);
// strokeWeight(5);
}

  noStroke()

  // strokeCap(SQUARE)
  // point((width/100)*i,(height/100)*y)
  rect((width/xWidth)*i,(height/yHeight)*y,width/xWidth,height/yHeight)
} // for : i
} // for : y

blendMode(DIFFERENCE)
fill(255)
rect(mouseX,mouseY,100,100)

} // draw


function keyPressed(){
  if (value===0){
    multiplier++;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
