class Dustbin {
  constructor(x,y,width,height) {
     var options = {
        isStatic: true,
    } 
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.image = loadImage("bin.png");
    World.add(world, this.body);
  }
  display(){
    push();
        //translate(this.body.position.x, this.body.position.y);
        //rotate(angle);
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.width, this.height);
    pop();
  }
};