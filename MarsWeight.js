// Feb 13th, 2018
// MarsWieght
let backgroundColor = '#31154A'

function setup() {
  var cnv = createCanvas(windowWidth,windowHeight)
  cnv.style('display','block');
  textSize(30)
}


function draw() {
  background(backgroundColor);
// text(marsWeight(155),200,200)
  fill('#FF380E');
  ellipse(100,100,100);
}

function marsWeight(earthWeight){
  let mw = earthWeight * 0.38
  return mw;
}

function rollDie(sides,dc){
  let shake = round(random(1,sides))

  if(shake > dc){
    return true // success
  } else {
    return false // fail
  }
}

function mouseClicked() {
    text(rollDie(10,2),200,200)
}
