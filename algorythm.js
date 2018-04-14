// 2 - 13 - 2018
// ben moren tutorial
// MCAD
// Joseph Berns

// instantiate variables
let x = 0;
let y = 0;
let probability = 0;
let help = true;

let colorArray = ['#B782D9','#49DBC8','#FEA1C7','#FFBE72']
// let xLimit = 0;
// let yLimit = 0;

function returnColorFromArray(){
  return colorArray[int(random(1,colorArray.length))];
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(200);
  frameRate(5)
  // noFill()
  // noCursor()
  noStroke()
  // stroke(255)
}

function mouseToProbability(){
  probability = map(mouseY,0,height,0,10)
}


function testMatrix(xLimit,yLimit) {
  mouseToProbability()
  // translate(width/20,height/20)
  // double nested loop
    for (x=0;x<xLimit;x++){
    for (y=0;y<yLimit;y++){
      if (random(probability) > 2) {fill(colorArray[1])}
      else if (random(probability) < 5){fill(colorArray[2])}
      else if (random(probability) > 6){fill(colorArray[3])}
      // else if (x>(xLimit/2)){fill(245,54,5)}

      else
      // {fill(map(mouseX,0,width,0,255))}
      // {fill(map(mouseX,0,width,0,255))}
      {fill(colorArray[0])}

      // render the big pixels
      // rect(x*(width/xLimit),y*(height/yLimit),20,20)
      rect(x*(width/xLimit),y*(height/yLimit),width/xLimit-map(mouseX,0,width,-10,20),height/yLimit-map(mouseX,0,width,-10,20))
  }}
}




function draw() {
  background(150)

text(second(),100,100)

// testMatrix(random(98,100),random(100,102));
testMatrix(random(1,100),random(1,102));



// on off controls
if (mouseX > width-100 && mouseY > height-100){
  help=true;
  }else{
    help=false;
}

// GUI interface / legend
if (help == true){
  translate(width-400,height-200)
  fill('#E2E2D3') // backdrop
  rect(0,0,400,200)
  fill('#76A968')// text color
  text("mouse X = seed",0,50)
  pop()}
    else {
      translate(width-200,height-100)
      fill(returnColorFromArray()) // backdrop
      rect(0,0,200,100)
      fill('#76A968')// text color
      text("hover here for information",0,50)
      pop()}




} // close draw


// resources // // resources // // resources // // resources //

// color palette assistant = https://coolors.co/
