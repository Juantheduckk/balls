function Particle(loc){
  this.loc = loc.copy();
  this.acc = createVector(random(-.005, .005), random( -.005, .005));
  this.vel = createVector(random(-1 , 1), random(-1 , 1));
  this.lifespan = 255.0;
  this.clr = clr;
