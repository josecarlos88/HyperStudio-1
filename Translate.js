let x = 0;

function setup() {
  createCanvas(windowWidth,windowHeight)
}


function draw() {
  background(255)

push()
  translate(mouseX,mouseY);
  ellipse(0,0,20,20)
pop()

  ellipse(0,0,20,20)

}
