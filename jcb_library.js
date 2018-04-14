// Feb 13th, 2018
// introduction to functions
// joseph berns function library

function randomRGB() {
  return [random(255),random(255),random(255)]
}

function randomGrayscale() {
  return [random(255)]
}

function keyPressed(){
  // console.log(keyCode);
  // console.log(key);

  if(key==='S'){
    save()
  }
  if(key==='B'){
    backgroundColor = randomRGB();
  }
  if(key==='I'){
    blendMode(DIFFERENCE);
  }
}

// my ice cream color pallette
let colorArray = ['#B782D9','#49DBC8','#FEA1C7','#FFBE72']
function returnColorFromArray(){
  return colorArray[int(random(1,colorArray.length))];
}


function robot(x,y,w,h) {
  // translate(x,y)
  robotHead()
}

function robotHead(x,y,size) {
  push()
  translate(x,y)
  scale(size)
  rect(0,0,200,150)
  ellipse(50,50,50,50)
  ellipse(150,50,50,50)
  ellipse(100,100,50,50)
  pop()
}

function robotArmy(quantity){
  for(let i = 0; i<quantity ; i++){
  robotHead(random(width),random(height),random(.5,2));
}
}


// refresh the screen with SHIFT + CLICK
function mouseClicked() {
  if(keyIsDown(SHIFT)){
    // setup();
    backgroundColor = randomRGB();
  }
  // else if (keyIsDown(LEFT_ARROW)) {
  //   backgroundColor=randomRGB();
  // }
}
