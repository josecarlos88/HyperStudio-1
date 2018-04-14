function setup() {
  // Only happens one time.
  // How big the screen is,
  // Variables we don't want to change
  // "initialization for the cool stuff happens here"
  // function name: CreateCanvas .... argument names: w,h,[renderer]
  // 2 parenthesis follow every function. [] means optional
  createCanvas(600,600); // width + height + renderer: WebGL? etc.
  // take out RENDERER if unspecified
  // choose "YES SEMICOLON"
  background(255,10,80); // values between (0,255) for grey, or (R,G,B).
}

function draw() {

  // put drawing code here
  // Executing at 30 frames per second
  // this is how we make things move, add interactivity, because its on-going
  // "the cool stuff happens here"

  // using a CARTESIAN GRID SYSTEM. With the Top Left as 0,0, and everything moves down from there.
  noStroke();
  fill(255,0,255);
  ellipse(300,300,100,50);
  fill(255,255,255);
  ellipse(150,150,50,100);
  fill(255,255,255);
  ellipse(450,150,50,100);
  fill(0,0,255);
  ellipse(150,150,50,50);
  fill(0,0,255);
  ellipse(450,150,50,50);
  fill(0,0,0);
  ellipse(150,150,25,25);
  fill(0,0,0);
  ellipse(450,150,25,25);
  fill(255);
  ellipse(145,145,8,8);
  fill(255);
  ellipse(445,145,8,8);
  fill(0);
  triangle(200,400,400,400,300,550)
  line(200,380,400,380)

}
