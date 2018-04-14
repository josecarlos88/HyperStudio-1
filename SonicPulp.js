function sonicPulp(link) {
  //load
  this.soundFile = loadSound(link);
  this.amplitude = new p5.Amplitude();
  this.fft = new p5.FFT();
  this.spectrum = this.fft.analyze();

  //sound properities
  this.level = function(){
    var level = this.amplitude.getLevel();
    return level;
  }
  this.energy = function(){
    var energy = this.fft.getEnergy('mid');
    return energy;
  }
  this.centroid = function(){
    var centroid1 = this.fft.getCentroid();
    return centroid1;
  }
  //call inside setup
  this.play = function(){
    this.soundFile.play();
    this.soundFile.loop();
  }
  //call inside draw
  this.update = function(){
    this.analyze();
  }
}
