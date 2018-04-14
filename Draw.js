// events and interactivity examples + practice
// there is a difference between with () and without

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  rectMode(CENTER)
  noStroke()

}

let mp = false
let brushSize = 5;

function draw() {

  // put drawing code here

  // super basic
  // ellipse(mouseX,mouseY,5)

  // basic logic
  // if(mouseX > width/2){
  //   ellipse(mouseX,mouseY,20)
  // }else{
  //   rect(mouseX,mouseY,20,20)
  // }

  if (mouseIsPressed == true){



  if (key=='a'){
    for(i=1;i<50;i++){
        rect(mouseX+(i*width/50),mouseY,5,5);
        rect(mouseX-(i*width/50),mouseY,5,5);
    }
  } else{
      rect(mouseX,mouseY,brushSize,brushSize);
  }

} // mouse press

if (keyIsPressed == true){

  // color selection
  if(key=='r'){
    fill(255,0,0)
  }
  if(key=='g'){
      fill(0,255,0)
    }
    if(key=='b'){
      fill(0,0,255)
    }
    if(key=='k'){
      fill(0,0,0)
    }
    if(key=='w'){
      fill(255)
    }
    if(key=='e'){
        background(250,250,250,250)
    }



    // size selection
    if(key=='1'){
      brushSize=1;
    }
    if(key=='2'){
      brushSize=3;
    }
    if(key=='3'){
      brushSize=6;
    }
    if(key=='4'){
      brushSize=9;
    }
    if(key=='5'){
      brushSize=12;
    }
    if(key=='7'){
      brushSize=50;
    }
    if(key=='8'){
      brushSize=100;
    }
    if(key=='9'){
      brushSize=150;
    }
    if(key=='6'){
      brushSize=25;
    }
    if(key=='0'){
      brushSize=300;
    }



    else{}
// rect(mouseX,mouseY,50,50);
}

}


function mouseClicked(){
  // mp = !mp

}
