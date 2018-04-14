function setup() {
  createCanvas(windowWidth,windowHeight);
  background(100);
  // noFill()
  noCursor()
  // stroke(255)
}

function draw(){


  // function timing(speed){
  //   for (var timer=1;timer<100000;timer=timer+speed) {return timer}
  //   else {timer=1}
  // }


  var millisecond = millis();
  var myMilli = map(millisecond,0,1000,0,1)
  var sinetime = sin(myMilli)
  function timerBoy(speeed) {juice = sinetime + speeed; return juice;}

text('Milliseconds \nrunning: \n' + myMilli + '\n sinetime:' + sin(myMilli), 5, 40);

background(0,255,255*sinetime)

strokeCap(SQUARE);

  var a = 0.0;
  var inc = TWO_PI / 25.0;
  let period=map(mouseX,0,width,1,50);
  // strokeWeight(5)
// translate(width/2,0)
  for (var i = 0; i < width; i++) {
    stroke(map(sin(i*sinetime),-1,1,0,255),map(sinetime,-1,1,0,255),200);
    // stroke(map(sinetime,-1,1,0,255));
    strokeWeight(map(sinetime,-1,1,10,0));
    line(i*10,height-sinetime*300, i*10+sinetime*500, 0);
    a = a + inc;
  }

  function repeatingVertBars(period){
    stroke(map(sinetime,-1,1,0,255),map(sin(i*timerBoy(5)),-1,1,0,255),255);
      for (var i = 0; i < height; i++) {
      line(0,sinetime*500+i*period, width, i*timerBoy(10));
  }}

  repeatingVertBars(10);

  // for (var i = 0; i < width; i++) {
  //   // stroke(map(sin(i*.2),-1,1,0,255));
  //   stroke(map(sinetime,-1,1,0,255),0,0),255,0;
  //   strokeWeight(map(sinetime,-1,1,0,20));
  //   line(i * period, 0, i * period, height/2 + sin(a) * map(mouseY,height/4,height-height/4,0,height/2));
  //   a = a + inc;
  // }
}
