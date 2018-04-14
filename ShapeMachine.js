function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 100);
  background(random(0,100), random(0,100), random(50,100));
  setShakeThreshold(50);

  noLoop();
}

function draw() {

  // nice color palette + set background (move these to setup to avoid redraws)


  background(random(0,100), random(0,100), random(50,100));
  // fill(random(0,100), random(0,100), random(50,100));

  // background('black');
  // fill('white');

  noStroke();

  // stroke(random(0,100), random(0,100), random(50,100));
  // noFill();

  // curve tightness
  // curveTightness(random(0,50));



  // transformations
  scale(random(0.25,0.55));
  translate(windowWidth, windowHeight);
  rotate(random(0,360));

  var shapeArray = [TRIANGLE_STRIP, undefined, undefined, undefined, undefined];
  var randomShape;


// text(randomShape, 10, 10);

for(var shaper = 1; shaper < random(2,8); shaper++) {
  fill(random(0,100), random(0,100), random(50,100));
  rotate(random(0,TWO_PI));
  scale(random(0.5,1.5));

  randomShape = random(shapeArray);

  console.log(randomShape);

  beginShape(randomShape);

    for(var i = 1; i < 3 ; i++)  {
        curveTightness(random(-2,0));
      curveVertex(windowWidth/2-random(0,windowWidth/2), windowHeight/2-random(0,windowHeight/2));
    }

    for(var j = 1; j < 2 ; j++)  {
        curveTightness(random(-0.1,0.1));
      curveVertex(windowWidth/2+random(0,windowWidth/2), windowHeight/2-random(0,windowHeight/2));
    }

    for(var k = 1; k < 2 ; k++)  {
        curveTightness(random(-0.1,0.1));
      curveVertex(windowWidth/2+random(0,windowWidth/2), windowHeight/2+random(0,windowHeight/2));
    }

    for(var l = 1; l < 3 ; l++)  {
        curveTightness(random(-2,0));
      curveVertex(windowWidth/2-random(0,windowWidth/2), windowHeight/2+random(0,windowHeight/2));
    }

  endShape();
}

// for(var shaperb = 1; shaperb < random(1,3); shaperb++) {
//   fill(random(0,100), random(0,100), random(50,100));
//   rotate(random(0,TWO_PI));
//   scale(random(0.5,1.5));

//   beginShape(TRIANGLE_STRIP);

//     for(var ib = 1; ib < 3 ; ib++)  {
//         curveTightness(random(-2,0));
//       curveVertex(windowWidth/2-random(0,windowWidth/2), windowHeight/2-random(0,windowHeight/2));
//     }

//     for(var jb = 1; jb < 2 ; jb++)  {
//         curveTightness(random(-0.1,0.1));
//       curveVertex(windowWidth/2+random(0,windowWidth/2), windowHeight/2-random(0,windowHeight/2));
//     }

//     for(var kb = 1; kb < 2 ; kb++)  {
//         curveTightness(random(-0.1,0.1));
//       curveVertex(windowWidth/2+random(0,windowWidth/2), windowHeight/2+random(0,windowHeight/2));
//     }

//     for(var lb = 1; lb < 3 ; lb++)  {
//         curveTightness(random(-2,0));
//       curveVertex(windowWidth/2-random(0,windowWidth/2), windowHeight/2+random(0,windowHeight/2));
//     }

//   endShape();
// }

//   redraw rate
 // frameRate(.1);

}


// Mobile Redraw Functions

function deviceShaken() {
  redraw();
}

function touchEnded() {
  redraw();
}

// Keep the drawing full-screen
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
