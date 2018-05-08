 function Particalsystem(loc){
  this.loc = loc.copy();
  this.particles = [];

   this.addParticle = function(){
    //var p = new Particle(this.loc);
    //this.particles.push(p);
    //.log(this.particles.length);
  };

   this.run = function(){
    for(var i = this.particles.length-1 ; i > 0; i++){
      var p = this.particles[i];
      p.update();
      if(p.isDead()){
        //this.particles.splice(i , 1);
      }
    }
  }
}
