// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/17WoOqgXsRM

function Star() {// notice they're using negative width, center of image is (0,0)
  this.x = random(-width, width); // set starting locations
  this.y = random(-height, height);
  this.z = random(width);
  this.pz = this.z;

  this.update = function() { // // th
    this.z = this.z - speed;
    if (this.z < 1) {
      this.z = width;
      this.x = random(-width, width);
      this.y = random(-height, height);
      this.pz = this.z;
    }
  }

  this.show = function() {

    fill(random(255),random(255),random(255));
    noStroke();


    var sx = map(this.x / this.z, 0, 1, 0, width); // where the star is
    var sy = map(this.y / this.z, 0, 1, 0, height);

    var r = map(this.z, 0, width, 16, 0);
    ellipse(sx, sy, r^5, r^5); // size and location

    var px = map(this.x / this.pz, 0, 1, 0, width);
    var py = map(this.y / this.pz, 0, 1, 0, height);

    this.pz = this.z;

    stroke(255);
    line(px, py, sx, sy);

  }
}
