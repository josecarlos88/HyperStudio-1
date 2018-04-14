// Joseph Carl Berns
// Sunday, February 25th
// Using sliders
// Controlling global variables


var x = 0
var y = 0
var tempo = 0
var currentBeat = 1
var measure = 8
var backgroundColor = [200,20,140]

let steps = []

function setup() {
  createCanvas(windowWidth,windowHeight)
  frameRate(60)
  textSize(20)
  noStroke()

  //create sliders
  tempoSlider = createSlider(1,30);
  tempoSlider.position(20,20)
}

function timeKeeper() {
  if(frameCount % tempo == 0){
    if(currentBeat == measure)
    {
      currentBeat = 1
    }else{
    currentBeat = currentBeat + 1;
  }
  }
}

function drawBeat() {
  for(i=1;i<currentBeat;i++){
    // ellipse(height/2,(width/currentBeat)*(width*i),50)
    // ellipse(100*i,height/2,50)
    fill(20,190,40)
    ellipse((width/currentBeat)*i,height/2,width/currentBeat,height/2)
    fill(255,0,0)
    ellipse((width/currentBeat)*i,height/2,width/currentBeat,height/8*i)
  }
}


function draw() {

  background(backgroundColor)

  timeKeeper()
  // drawBeat()




  tempo = tempoSlider.value()
  text(tempo,20,50)
  text(currentBeat,20,100)
// Frame-Count
//if frame count / 100's remainder is zero, then do the code
  // if(frameCount % tempo == 0){
  //   //every 100 frames do this
  //   console.log('hifdfdsfdfasdfadga');
  //
  //   x += 10
  //   y = (random(0,height) + height/2)/2
  //   fill(0,255,0)
  //
  // }

// if (x>width){x=0}
//
//   if(frameCount > 1000){
//     direction = -direction
//   }




  // console.log(frameCount)
  //
  // ellipse(x, y,200,200)

}
