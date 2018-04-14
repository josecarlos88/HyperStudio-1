function setup() {
  createCanvas(600,600);
  strokeWeight(30);
}

function draw() {
  background(204);
  strokeJoin(ROUND);
  rect(200,200,200,200);
  strokeJoin(BEVEL);
  rect(275,100,50,50);
  strokeCap(SQUARE);
  line(200,50,200,500);
  strokeCap(ROUND);
  line(400,50,400,500);
}
