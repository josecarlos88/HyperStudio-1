let x = 0;
let y = 0;
let i = 0;
let limit = 0;

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight)
    background (100);
    angleMode(DEGREES)
}

function draw() {

background(200)
  // what is the exit condition? ... once it reaches the edge
  // what do you want to repeat? ... the shape
  // what do you want to change? ... the location

  // x = x + 50; // manual For Loop

  for (var i=0; i<limit; i++){
     angle = i*map(mouseX,0,width,0,1);
     noFill();
     translate(width/2, height/2);
     rotate(angle);
     translate(-width/2, -height/2);
     ellipse(width/2,height/2,400, i*map(mouseY,0,height,1,100));
   }

if (random(1) < )


//   for(x=0 ; x < 100 ; x++){
//     for(y=0 ; y < 100 ; y++){
//     ellipse(x*10,y*10,2);
//   } // close y
// } // close x

} // close draw

function keyPressed() {
  if(keyCode === UP_ARROW) {
    limit++
  }
  if(keyCode === DOWN_ARROW) {
    limit = limit -1
  }
}
