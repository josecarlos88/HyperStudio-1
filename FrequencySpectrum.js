function preload(){
  sound = loadSound('assets/evil.wav');
}

function setup() {
  var cnv = createCanvas(windowWidth,windowHeight);
  cnv.mouseClicked(togglePlay);
  fft = new p5.FFT();
  sound.amp(0.2);
}

function draw() {
background(0);
stroke(0,255,0);
var spectrum = fft.analyze();
fill(0,255,0); // spectrum is green

//draw the FrequencySpectrum

for (var i = 0; i< spectrum.length; i++){
  var x = map(log(i), 0, log(spectrum.length), 0, width);
  var h = map(spectrum[i], 0, 255, 0, height);
  var rectangle_width = (log(i+1)-log(i))*(width/log(spectrum.length));
  rect(x, height, rectangle_width, -h)
}



var nyquist = 22050;

// get the centroid
spectralCentroid = fft.getCentroid();

// draw shape based on centroidplot

var centroidWidth = map(spectralCentroid,0,18000,0,width);
var centroidHeight = map(spectralCentroid,0,18000,0,height);
var centroid255 = map(spectralCentroid, 0, 1000,0,255);
fill(centroid255)
rect(222,222,444,444);

// the mean_freq_index calculation is for the display.
var mean_freq_index = spectralCentroid/(nyquist/spectrum.length);

centroidplot = map(log(mean_freq_index), 0, log(spectrum.length), 0, width);

stroke(255,0,0); // the showing where the centroid is

rect(centroidplot, 0, width / spectrum.length, height)
noStroke();
fill(255,255,255);
textSize(40);
text("centroid: "+round(spectralCentroid)+" Hz",10,40);


}//close draw

// fade sound if mouse is over canvas
function togglePlay() {
  if (sound.isPlaying()) {
    sound.pause();
  } else {
    sound.loop();
  }
}
