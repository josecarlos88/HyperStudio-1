function setup (){
  createCanvas(windowWidth,windowHeight);
  background(255/2);
  textSize(50)
  textAlign(CENTER)
  noCursor()
  rectMode(CENTER)
  noStroke()
}

let y = 0;

function draw(){

background(200)
// conditional operators:
// >    greater than
// <    less than
// >=   greater than or equals
// <=   less than or equal to
// !=   not equal
// ==   equals to
// === strict equals to

//  EXAMPLE: if
// rect(width/2,y, 100,100)
// y = y +10
//
// if (y<200 || y>height-200){
//   rect(width/2,y,50,50)
// }
//
// if (y>200 && y<height-200){
//   ellipse(width/2,y,100,100)
// }
//
// if (y > height){ // reset at the top
//   y = 0;
// }

// EXAMPLE: if / then / else
if (y<height/2){
  background(map(y,0,height/2,0,255));
}
if (y>height/2) {
  background(255-map(y,height/2,height,0,255))
}

y+=10
for(i=1;i<10;i++){
if (y < height/2){
  fill(255,25*i,0)
  ellipse(width/10*i,y-25*i,100,100)
}else{
  fill(0,255,25*i)
  rect(width/10*i,y-25*i,100,100)
}}




if (y < height / 2){
  fill(0,255,0)
  ellipse(width/2,y,100,100)
}
if (y > height / 2){
  fill(255,0,0)
  rect(width/2,y,100,100)
}



if (y > height){ // reset at the top : hit detection
  y = 0;
}



}
