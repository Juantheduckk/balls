function Particle(loc, clr){
  this.loc = loc.copy();
  this.acc = createVector(random(-.005, .005), random( -.005, .005));
  this.vel = createVector(random(-5.1 , 5.1), random(-5.1 , 5.1));
  this.angle = random(PI/4);
  this.clr = clr;

  this.lifespan = 200.0;

   this.update = function(){
    this.angle += 0.1;
    this.vel.add(this.vel);
    this.vel.limit(1.2);
    this.loc.add(this.vel);
    this.lifespan -= 3;
    this.render();
  };
this.render = function(){

    stroke(random(100, 200),random(100, 255), 255);
    strokeWeight(3);
    noFill();
    var distToCenter = this.loc.dist(createVector(width/2, height/2))
    push();
    translate(this.loc.x, this.loc.y)
    rotate(this.angle);
    arc(0, 0, distToCenter, distToCenter, 0, PI/4);
    pop();
  };
 this.isDead = function(){
    if(this.lifespan < 0.0 ){
      return true;
    }else{
      return false;
    };
  };
}
