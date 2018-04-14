function setup() {
  createCanvas(windowWidth,windowHeight);
  background(255/2);
  textSize(50)
  textAlign(CENTER)
  noCursor()

}
var millisecond = millis();
var myMilli = map(millisecond,0,1000,0,1)
var sinetime = sin(myMilli) // cycles between -1 & 1

function myCycle(speed){
  return sin(map(millisecond,0,1000*speed,0,1))
}


function timeWave(){
  return sin(map(millis(),0,1000,0,1))
}

function minuteWave(){
  return sin(map(millis(),0,1000*60,0,1))
}

function invertRange(input1){
  return abs(map(input1,0,1,1,0))
}

function draw() {
background(255/2,255/2,255/2,255/3)







  stroke(0);
  let glideX = map(timeWave(),-1,1,0,width)
  let glideX2 = map(timeWave(),-1,1,width,0)
  let glideY = map(timeWave(),-1,1,0,height)
  let glideY2 = map(timeWave(),-1,1,height,0)
  let circleBlossom = map(timeWave(),-1,1,height,height/10)
  let circleBlossomMinute = map(minuteWave(),-1,1,height,height/10)
  let sineHustle = map(timeWave(),-1,1,0,1)

  // sinewave
  var sineCount = 0.0;
  var inc = TWO_PI / 25.0;
  let period=map(width,0,width,1,50);
  strokeWeight(50)
  strokeCap(SQUARE)
  // translate(width/2,0)
  for (var sCounter = 0; sCounter < width; sCounter++) {
    // stroke(map(sin(i*.2),-1,1,0,255));
    stroke(240,20,50);
    line(sCounter * period, height, sCounter * period, height/2 + sin(sineCount) * map(sineHustle,0,1,-height/8,height/8));
    sineCount = sineCount + inc;
  }


// Time text
fill(255)
strokeWeight(0)
var h = hour();
var theyear = year();
var minutes = minute();
var seconds = second();

// hours


for(a=1;a<10;a++){
  fill(255/2)
  textSize(50) // #
text(h,(width/10)*a,50);
}
fill(0)
textSize(10)
for(a2=1;a2<40;a2++){ // string
text("hours ",(width/40)*a2,30);
}

textSize(20)
text("minutes",60,height/1.4)
text("seconds",width-60,height/1.4)

// years
 // #
for(yCounter=1;yCounter<10;yCounter++){
  fill(255,0,255)
  textSize(50)
text(theyear,(width/10)*yCounter,height-20);
fill(0,255,0)
blendMode(DIFFERENCE)
textSize(25)
text("year",(width/10)*yCounter+(width/20),height-30);
}

// for(a3=1;a3<40;a3++){ // string
//
// }

// minutes
fill(255)
textSize(50)
for(mCount=1;mCount<10;mCount++){
  text(minutes,60,(height/10)*mCount);
}

// seconds
for(sCount=1;sCount<10;sCount++){
  text(seconds,width-60,(height/10)*sCount);
}
  blendMode(LIGHTEST);

// timer lines
noFill()
for(i=1;i<2;i++){
  strokeWeight(10)
  stroke(0,250,20)
  line(glideX/i,0,glideX/i,height)
  line(glideX2/i,0,glideX2/i,height)
  line(0,glideY/i,width,glideY/i)
  line(width,glideY2/i,0,glideY2/i)
}
// scale(50,50)
// for(i=1;i<2;i++){
//   strokeWeight(2)
//   stroke(20,250,40)
//   line(glideX/i,0,glideX/i,height)
//   line(glideX2/i,0,glideX2/i,height)
//   line(0,glideY/i,width,glideY/i)
//   line(width,glideY2/i,0,glideY2/i)
// }
// noFill()
// line(glideX,0,glideX,height)
// line(glideX2,0,glideX2,height)
// line(0,glideY,width,glideY)
// line(width,glideY2,0,glideY2)
  // console.log(invertRange(glideX));

  // circle
// for(w=1;w<2;w++){
//   strokeWeight(.4*height/w)
//   stroke(0,100,240)
//   blendMode(DARKEST);
//   ellipse(width/2,height/2,circleBlossomMinute/w,circleBlossomMinute/w)
// }

// if(mouseClicked()){strokeWeight(2)
// }else{strokeWeight(10)}
for(q=1;q<seconds;q++){
  strokeWeight(2)
  stroke(250,0+((255/120)*q),150-((255/120)*q),255-((255/60)*q))
  blendMode(DIFFERENCE);
  ellipse(((width)+((mouseX-width/2)/10)*q)/2,((height)+((mouseY-height/2)/10)*q)/2,(height/60)*q)
}
  blendMode(NORMAL);
}

// if(q=30){q=q-1}if(q=0){q++}
