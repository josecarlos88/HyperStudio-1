function setup() {
  createCanvas(600,600);
  strokeCap(SQUARE);
}

function draw() {
  background(65, 8, 170);
fill(23);
stroke(65, 50, 170);
strokeWeight(50);
ellipse(300,300,600);

// fill(229, 41, 157)
stroke(255,255,255);
noFill();
strokeWeight(10);
beginShape();
vertex(300,50);
vertex(300,120);
vertex(200,200); // tip of nose
vertex(300,220);
vertex(300,240);
vertex(260,270); //upper lip
vertex(330,290); // inside of mouth
vertex(260,320); // bottom lip
vertex(300,346);
vertex(300,400); // chin
vertex(500,450); // start of neck
vertex(400,550);
endShape();

// visor
stroke(255,0,0);
strokeWeight(30)
line(100,80,500,100);


// eyes
// fill(255, 207, 153);
// ellipse(400,100,50);
// fill(25, 207, 153,160);
// ellipse(420,100,70);
// fill(255, 255, 255,160);
// ellipse(450,100,90);

}
