

let prevNumber = 0;
let newNumber = random(10);

function setup(){
  createCanvas(windowWidth,windowHeight);
  fill(250)
  textSize(20)
  // background(200);
}

function draw() {
  // background(200);
  prevNumber = newNumber;

  // while (prevNumber==newNumber) { // use this to prevent twice in a row
  //   newNumber = random(10);
  // }  // close while

  text('fdfadf',mouseX,mouseY)

} // close draw
