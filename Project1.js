// Tue, Feb 20th, 2018
// Ben Moren + Joseph Berns
// MCAD Coding Concepts
// Object Oriented Programming

// let population = 10
let bbs = [];
var tempo = 0
var currentBeat = 1
var measure = 8
var backgroundColor = [200,20,140]

// 15 modulo = 120 bpm

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
    ellipse(0,(height/currentBeat)*i,width/2,height/currentBeat)
    fill(255,0,0)
    // ellipse((0,height/currentBeat)*i,width/currentBeat,height/8*i)
  }
}

function setup() {
  createCanvas(windowWidth,windowHeight)
  noStroke()
  frameRate(30)
  //create sliders
  tempoSlider = createSlider(15,15);
  tempoSlider.position(20,20)
  // blendMode(MULTIPLY)
  // when we call New, it 'constructs' it.
  // bb = new brownianBuddy(500,500,6,20,color(255,0,0))
  // bb2 = new brownianBuddy(300,500,2,60,color(0,255,0))

  for (let i = 0 ; i < 50 ; i++){
    let brownbud = new brownianBuddy(i*(width/50),height/2,5,100);
    bbs.push(brownbud);
  }
  console.log(bbs)

  // for (let i = 0 ; i < population ; i++){
  //   bb = new brownianBuddy()
  // }
}


function draw() {
    background(255)

    timeKeeper()

    push()
      // scale(.5)
      drawBeat()
    pop()
    // push()
    //   // rotate(PI/4)
    //   scale(.5)
    //   translate(width,0)
    //
    //   drawBeat()
    // pop()

    // set tempo
    tempo = tempoSlider.value()
    fill(50)
    text(tempo,20,50)
    text(currentBeat,20,100)

    // blendMode(DIFFERENCE)
  // console.log(bb)
  // bb.display() // runs the method of this class
  // bb.trapped()
  // bb2.display()
  for (let i = 0 ; i < bbs.length ; i++){
    // bbs[i].display()
    bbs[i].trapped()
  }

}

// This ... it's programming's universal pronoun
// its the topic of the moment, a way to refer to the instance
// it affects only the current instance - avoiding global variables.

// class is the blueprint
// object is the instance
// buddy.display() is the method
class brownianBuddy{
  constructor(tempX,tempY,tempSpeed,tempSize){
    this.x = tempX;
    this.y = tempY;
    this.speed = tempSpeed;
    this.size = tempSize;
    // this.color = color(random(255),random(255),random(255),random(255))
    this.color = color(255,0,0)
  } // close Constructor

  trapped(){
    this.x = constrain(this.x,0,width)
    this.y = constrain(this.y,0,height-mouseY)
  }

  display(){ // check your 'this dots'
      // this.x+= random(-this.speed,this.speed)
      // this.y+= random(-this.speed,this.speed)
      this.y += 1
      fill(this.color)
      ellipse(this.x,this.y,this.size,this.size)
  } // close Display
  // age(){
  //   this.lifespan--
  // }

} // close Class

function mouseClicked(){

}

// array[i.x] .. passing data between elements on the Arrays
