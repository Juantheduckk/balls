var particleSystems = [];

function setup() {
    particleSystems.push(new Particalsystem (createVector(width/2, height/2)));
  var cnv = createCanvas(1100, 800);
  cnv.position((windowWidth - width)/2 , 30);
  frameRate(20);
  count = 1;

}

function draw(){
  //console.log("ps.length = " + particleSystems.length);
  fill(127, 50 , 90);
  background(21);
  for( var i = 0; i < particleSystems.length; i++){
    particleSystems[i].addParticle();
    particleSystems[i].run();
  }

  //text('Num Particles = '+ particle.length, 10, 30);

  function mouseClicked(){
    var moouseloc = createVector(mouseX, mouseY);
    particleSystems.push(new particleSystem(mouseloc));
  }


}
