function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight)
  textSize(40);
  background(0,230,20)
  fill(5,240,100)
  strokeWeight(120)
  stroke(0,200,53,200)
  // let myNum = 50
}

// let randomNumber1 = random(0,10);
// let myNum = 50

let number = 0;
let previousNum = 0;
let userPoints = 0;
// number = round(random(1,6));
// let pnum = num; // saves previous number
// let num = random(1,6) // generate random number

function generateNewNum(){
  previousNum = number;
  number = round(random(1,6));

}

function draw() {
  background(230,20,20) // reset background

// graphics

fill(0,50,50)
rect(0,0,width/2,height/2) // higher box
fill(0,255,0) // green
textSize(200)
text('higher',width/4,height/4)
fill(50,50,0)
stroke(0,250,23,150)
rect(0,height/2,width/2,height/2) // lower box
fill(0,255,255) // green
text('lower',width/4,height-height/4)
// text('roll the dice',100,500)
// text('it is' + number,100,700)
// text(previousNum,100,900)
fill(255,0,0) // red
textSize(20)
text(userPoints, width-width/4, height/4)
textSize(50)
// text("new number:" + number + "  old number" + previousNum,width-width/4,height-height/4)
text(number,width-width/4,height-height/4)

console.log(number + "...." + previousNum)

// if


// take user input
// false = lower
// true = higher


// evaluate it against the number
// if (previousNum < number){ // previous number is less than new number
//   if (choice==false){
//     // user loses
//   }
//   if (choice==true){
//     // user wins
//   }else{
//     // number is same
//   }
// }

// display result


} // close draw

function keyPressed(){

  if(key=='h'){ // higher
    generateNewNum()
  }else{}

}

function mouseClicked(){
  generateNewNum()

  if (mouseY<height/2 && previousNum<number){
    userPoints++
  } if (mouseY<height/2 && previousNum>number){
    userPoints = 0;
  }  if (mouseY>height/2 && previousNum>number){
      userPoints++
    } if (mouseY>height/2 && previousNum<number){
      userPoints = 0;
    }


//   if (previousNum>number){
//   userPoints++
// } else {
  // userPoints=0;
// }
} // close mouseClicked
