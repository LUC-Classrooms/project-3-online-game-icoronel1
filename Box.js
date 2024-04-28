function Box(_x, _y){
  this.x = _x;
  this.y = _y;

  this.xSpeed = 0;
  this.ySpeed = random(1, 2); // 1 - 2 (falling)
  this.rSpeed = random(-.02, .02); // rotation speed

  this.angle = 0;
  this.r = random(0, 255); // random red value
  this.g = random(0, 255); // random green value
  this.b = random(0, 255); // random blue value


  /* choose a color scheme at random
  if(random(100) > 50){ // 50-50 chance
    this.boxColor = color(random(100, 255), 0, 0); // red
    this.ribbonColor = color(0, random(100, 255), 0); // green
  } else {
    this.boxColor = color(0, random(100, 255), 0); // green
    this.ribbonColor = color(random(100, 255), 0, 0); // red
  }*/

  this.display = function(){

    push();
    translate(this.x, this.y);
    rotate(this.angle);

    fill(this.r, this.g, this.b)

    beginShape()
    vertex(0, 24)
    vertex(6, 6)
    vertex(30, 6)
    vertex(12, -6)
    vertex(18, -24)
    vertex(0, -12)
    vertex(-18, -24)
    vertex(-12, -6)
    vertex(-30, 6)
    vertex(-6, 6)
    vertex(0, 24)
    endShape();
    
    pop();

  }

  this.move = function() {
    this.y += this.ySpeed; // spin
  }

  this.spin = function() {
    this.angle += this.rSpeed; // spin
  }



}