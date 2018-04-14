// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/17WoOqgXsRM

var stars = [];

var speed;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < 800; i++) { // how many stars?
    stars[i] = new Star();
  }
}

function draw() {
  speed = map(mouseX, 0, width, 0, 50);
  background(0);

  translate(width / 2, height / 2); // center the animation!
    // super helpful bit of code here

  for (var i = 0; i < stars.length; i++) {
    stars[i].update(); // update location
    stars[i].show(); // render them at that size and place
  }
}

function windowResized(){

}
