// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for this video: https://youtu.be/BV9ny785UNc

// Written entirely based on
// http://www.karlsims.com/rd.html

// Also, for reference
// http://hg.postspectacular.com/toxiclibs/src/44d9932dbc9f9c69a170643e2d459f449562b750/src.sim/toxi/sim/grayscott/GrayScott.java?at=default

var grid;
var next;

var dA = 1;
var dB = 0.5;
var feed = 0.055;
var k = 0.062;

function setup() {
  createCanvas(200, 200);
  pixelDensity(1);
  grid = [];
  next = [];
  for (var x = 0; x < width; x++) {
    grid[x] = [];
    next[x] = [];
    for (var y = 0; y < height; y++) {
      grid[x][y] = {
        a: 1,
        b: 0
      };
      next[x][y] = {
        a: 1,
        b: 0
      };
    }
  }

  for (var i = 100; i < 110; i++) {
    for (var j = 100; j < 110; j++) {
      grid[i][j].b = 1;
    }
  }

}

function draw() {
  background(51);

  for (var x = 1; x < width - 1; x++) {
    for (var y = 1; y < height - 1; y++) {
      var a = grid[x][y].a;
      var b = grid[x][y].b;
      next[x][y].a = a +
        (dA * laplaceA(x, y)) -
        (a * b * b) +
        (feed * (1 - a));
      next[x][y].b = b +
        (dB * laplaceB(x, y)) +
        (a * b * b) -
        ((k + feed) * b);

      next[x][y].a = constrain(next[x][y].a, 0, 1);
      next[x][y].b = constrain(next[x][y].b, 0, 1);
    }
  }


  loadPixels();
  for (var x = 0; x < width; x++) {
    for (var y = 0; y < height; y++) {
      var pix = (x + y * width) * 4;
      var a = next[x][y].a;
      var b = next[x][y].b;
      var c = floor((a - b) * 255);
      c = constrain(c, 0, 255);
      pixels[pix + 0] = c;
      pixels[pix + 1] = c;
      pixels[pix + 2] = c;
      pixels[pix + 3] = 255;
    }
  }
  updatePixels();


  swap();


}


function laplaceA(x, y) {
  var sumA = 0;
  sumA += grid[x][y].a * -1;
  sumA += grid[x - 1][y].a * 0.2;
  sumA += grid[x + 1][y].a * 0.2;
  sumA += grid[x][y + 1].a * 0.2;
  sumA += grid[x][y - 1].a * 0.2;
  sumA += grid[x - 1][y - 1].a * 0.05;
  sumA += grid[x + 1][y - 1].a * 0.05;
  sumA += grid[x + 1][y + 1].a * 0.05;
  sumA += grid[x - 1][y + 1].a * 0.05;
  return sumA;
}

function laplaceB(x, y) {
  var sumB = 0;
  sumB += grid[x][y].b * -1;
  sumB += grid[x - 1][y].b * 0.2;
  sumB += grid[x + 1][y].b * 0.2;
  sumB += grid[x][y + 1].b * 0.2;
  sumB += grid[x][y - 1].b * 0.2;
  sumB += grid[x - 1][y - 1].b * 0.05;
  sumB += grid[x + 1][y - 1].b * 0.05;
  sumB += grid[x + 1][y + 1].b * 0.05;
  sumB += grid[x - 1][y + 1].b * 0.05;
  return sumB;
}



function swap() {
  var temp = grid;
  grid = next;
  next = temp;
}


// var grid;
// var next;
//
// var dA = 1;
// var dB = 0.5;
// var feed = 0.055;
// var k = 0.062;
//
// function setup() {
//   // put setup code here
//   createCanvas(200, 200);
//   pixelDensity(1);
//
//   grid = [];
//   next = [];
//
//   for (var x = 0; x < width; x++) { // double-nested for loop
//     grid[x] = []; // says grid index of x is an array
//     next[x] = [];
//     for (var y = 0; y < height; y++) {
//       grid[x][y] = { a: 0, b: 0 };
//       next[x][y] = { a: 0, b: 0 };
//     }//close y for loop
//   }// close x for loop
//
// }// close setup
//
//
// function draw() {
//   background(51);
//
//   for (var x = 0; x < width; x++) { // double nested loop
//     for (var y = 0; y < height; y++) {
//       var a = grid[x][y].a;
//       var b = grid[x][y].b;
//       next[x][y].a = a +
//                     (dA + laplaceA()) -
//                     (a * b * b) +
//                     (feed * (1 - a)); // chemical A
//       next[x][y].b = b +
//                     (dB + laplaceB()) +
//                     (a * b * b) -
//                     ((k + feed) * b); // chemical A
//     }
//   }
//
//
//
//   loadPixels();
//   for (var x = 0; x < width; x++) {
//     for (var y = 0; y < height; y++) {
//       var pix = (x + y * width)*4;
//       pixels[pix + 0] = floor(grid[x][y].a*255);
//       pixels[pix + 1] = 0;
//       pixels[pix + 2] = floor(grid[x][y].b*255);
//       pixels[pix + 3] = 255;
//
//     }//close y for loop
//   }// close x for loop
//
//   updatePixels();
//
//
//   swap();
// }
//
//
// function swap(){
//   var temp = grid; // need this to swap without fumbling it
//   grid = next;
//   next = grid;
// }
//
//
// // reaction-diffusion /////
// // they react and diffuse
// // based on how they are arranged, they make new patterns
// // A vs B becomes Black and White
//
// // chemical A fills the canvas, and then we pour chemical B into it
//
// // feed rate: how fast we're pouring in the new chemical
// // kill rate: they rate chemical B is being removed
//
// // each cell is going to have a value for each chemical, 0-1.0, which sets the color
//
// // each spot in the data structure keeps track of one cell (pixel/pixel group)
//
// // A1 = f(A0,B0)
// // A1 = avg(a0+b0)/2 ? its more complex
//
// // we apply a convolution of a 3x3 matrix
// // what are its new values, based on itself as well as its neighbors
// // convolution means, multiply cells by its neighbors, using a matrix.
// // for each cycle/frame of draw we get a new A & B value
