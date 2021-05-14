
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var side1 , side2, base  ;

var ground , paper ;

function preload()
{
	this.dustbinimage = loadImage("dustbin.png")
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    
	ground = new Ground(600,370,1200,20);

	paper = new Paper(400,300,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  imageMode(CENTER);
	image(dustbinimage,880,200,220,150);
	
  
  Engine.update(engine);


ground.display();
paper.display();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
  
	}
}



