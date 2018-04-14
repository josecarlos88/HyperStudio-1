// Tue, Feb 20th, 2018
// Ben Moren + Joseph Berns
// MCAD Coding Concepts
// Object Oriented Programming

// let population = 10
let bbs = [];

function setup() {
  createCanvas(windowWidth,windowHeight)
  noStroke()
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
    // blendMode(DIFFERENCE)
  // console.log(bb)
  // bb.display() // runs the method of this class
  // bb.trapped()
  // bb2.display()
  for (let i = 0 ; i < bbs.length ; i++){
    bbs[i].display()
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
    this.color = color(random(255),random(255),random(255),random(255))
  } // close Constructor

  trapped(){
    this.x = constrain(this.x,0,width)
    this.y = constrain(this.y,0,height-mouseY)
  }

  display(){ // check your 'this dots'
      this.x+= random(-this.speed,this.speed)
      this.y+= random(-this.speed,this.speed)
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
