var pSystems = [];

function setup() {
    pSystems.push(new ParticleSystem (createVector(width/2, height/2)));
  var cnv = createCanvas(1100, 800);
  cnv.position((windowWidth - width)/2 , 30);
  frameRate(20);
  count = 1;

}

function draw(){

  fill(127, 50 , 90);
  background(21, 2);
  for( var i = 0; i < pSystems.length; i++){
    pSystems[i].addParticle();
    pSystems[i].run();


  }


}
function mouseClicked(){
//  var mouseloc = createVector(mouseX, mouseY);
pSystems.push(new ParticleSystem (createVector(mouseX, mouseY)));
}
