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
  background(200,200,200,200)
  for (y=1;y<yHeight;y++){
for (i=1;i<xWidth;i++)
{
  point(mouseX/i,mouseY/y)
}}


} // draw


function keyPressed(){
  if (value===0){
    multiplier++;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
