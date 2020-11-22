class Box {
  constructor(x, y, width, height,friction) {
    var options = {
        restitution:0.5,
        friction:friction,
        density:1.0,
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    push();
    translate(pos.x,pos.y);
    rotate(this.body.angle);
    rectMode(CENTER);
    fill(255);
    stroke("red")
    strokeWeight(2);
    rect(0,0, this.width, this.height);
    pop();
  }
}
