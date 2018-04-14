// 2 - 13 - 2018
// ben moren tutorial
// MCAD
// Joseph Berns

// variables
let x = 0;
let y = 0;
let size = 40;
let angle = 0.0;
let speed = 0.05;
let y1, y2, y3;
let scalar = 100;
let yOffset = 10;

function setup() {

  var cnv = createCanvas(windowWidth,windowHeight)
  cnv.style('display','block');

}


function draw() {
  // background(200,180,210)

y1 = yOffset + sin(angle) * scalar;
y2 = yOffset + sin(angle+0.5) * scalar;
y3 = yOffset + sin(angle+1) * scalar;

fill(randomRGBfill())
translate(mouseX,mouseY)
push()
  ellipse(x,y1,size,size)
  ellipse(x+size,y2,size,size)
  ellipse(x+size*2,y3,size,size)
pop()
fill(randomRGBfill())
push()
  rotate(5)
  ellipse(x,y1,size,size)
  ellipse(x+size,y2,size,size)
  ellipse(x+size*2,y3,size,size)
pop()
fill(randomRGBfill())
push()
  rotate(8)
  ellipse(x,y1,size,size)
  ellipse(x+size,y2,size,size)
  ellipse(x+size*2,y3,size,size)
pop()
fill(randomRGBfill())
push()
  rotate(2.5)
  ellipse(x,y1,size,size)
  ellipse(x+size,y2,size,size)
  ellipse(x+size*2,y3,size,size)
pop()

  angle += speed

} // close draw

// function keyPressed(){
//   if(keyCode===UP_ARROW){
//     save()
//     background(50)
//   }
// }
