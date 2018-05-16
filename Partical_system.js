 function ParticleSystem(loc){
  this.loc = createVector(loc.x, loc.y);
  this.particles = [];
  this.clr = color(random(100, 250),random(100, 255), random( 150, 250) )
//  i =  this.particle;

   this.addParticle = function(){

    var p = new Particle(this.loc, this.clr);
    this.particles.push(p);

  }

   this.run = function(){
    for(var i = 0 ; i < this.particles.length; i++){
      var p = this.particles[i];
      p.update();
      if(p.isDead()){
        this.particles.splice(i , 1);
      }
    }
  }
}
