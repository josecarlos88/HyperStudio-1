// instantiate the variable names you'll be using for your sounds
var song,song2;

function preload(){

  // loads filepath of Sound File to play
  // constructs it into a new sonic pulp, complete with its methods
  song = new sonicPulp('assets/puretones.wav');
  song2 = new sonicPulp('assets/beepers.wav');

}

function setup(){
  createCanvas(windowWidth,windowHeight);

  // play the sound through its variable name
  song.play();
  song.amp(.2)
  song2.play();

  fill(200,40,40)
}

function draw(){
  background(200);

  song.update();
  song2.update();
  console.log('level  ' + song.level());
  console.log('maxSpectrum  ' + song.maxSpectrum());
  console.log('energy  ' + song.energy());

  text(song.centroid,200,200)
}
