function   randomNumber(hi,lo){
  return random(hi,lo)
}

  let repeats = 10

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(250);
        // blendMode(ADD)
  // noFill()
  // noCursor()



  // stroke(255)
}

function draw() {

function Repeater(repeats){
  for (i=1;i<repeats;i++){
  }
}


var millisecond = millis();
var myMilli = map(millisecond,0,1000,0,1)
var sinetime = sin(myMilli) // cycles between -1 & 1
function myCycle(speed){
  return sin(map(millisecond,0,1000*speed,0,1))
}

function CircleLink(repeats){
for (i=1;i<repeats;i++){
  ellipse(i*(width/repeats),height/2,width/repeats);
}}

function CircleGrowth(size,times,ratio){
  // if (myColor==null){stroke(255)}else{stroke(myColor)}
  for (x=1;x<=times;x++){
    fill(map(x,1,times,0,255)*myCycle(.2),map(x,1,times,255,1)/myCycle(2),map(myCycle(.5),-1,1,0,200)) // gradient color
    CircleLink(size^(x*ratio))
    blendMode(DIFFERENCE)
  }
}
strokeWeight(width/50)
background(255*myCycle(1),255*myCycle(.5),255*myCycle(1.5))
// beautiful transition - blended cubes
for(y=1;y<10;y++){
for (i=1;i<10;i++){

  fill(map(y,1,10,0,255),map(y,1,10,0,255),map(y,1,10,0,255),200)
  // nofill()
    stroke(map(i,1,10,0,255))
  rect(i*width/10-width/20,y*height/10-height/20,width/10-20,height/10-20)
}}


// CircleGrowth(2)
// CircleGrowth(4)
// fill(255,0,0)
// CircleGrowth(1,10,1)
push()
translate(0,100)
// fill(150,150,20)
// CircleGrowth(1,3,1)
pop()
// fill(255)
translate(0,-100)
// CircleGrowth(3,20,1)


// blendMode(DARKEST)
// CircleLink(1.25)
// CircleLink(2.5)
// CircleLink(5)
// CircleLink(10)
// CircleLink(20)
// CircleLink(40)
// CircleLink(80)

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
