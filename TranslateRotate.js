let angle = 0.0;
let x = 0;

function setup() {
  createCanvas(windowWidth,windowHeight)
}


function draw() {
  // background(255)

// translate and rotate a shape around its origin point

push()
  translate(mouseX,mouseY); // sequence of Translate + Rotate will change dynamic
  rotate(angle);
  // rect(0,0,200,250)
  angle += 0.01;
for(x=0;x<4;x++){
  rect(0,0,200,250)
  rotate(30*x);

}
pop()


// rotate, translate: rotates the shape around it supper left corner at its place away from the origin

}
