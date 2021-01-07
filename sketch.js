
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var box,boxImage;
var paperObject,paperImage;

function preload()
{
	paperImage = loadImage("paper.png");
 
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	var options={
		isStatic:false,
		restitution:0.2,
		friction:1.0,
		density:1.5
	}
	paperObject=Bodies.circle(100,640,17,options);
	World.add(world,paperObject);

	ground = new Ground(750,660,1500,10);


box = new Box(1150,620,20,100);
}

	function draw(){
  Engine.update(engine);
	rectMode(CENTER);
  background("lightblue");
  

  

 // imageMode(CENTER)
//image(boxImage,box2.position.x,box2.position.y,100,100);

 imageMode(CENTER)
  image(paperImage,paperObject.position.x,paperObject.position.y,50,50);

  
 ground.display();
 box.display();
  drawSprites();



}

function keyPressed(){

	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject,paperObject.position,{x:85,y:-85});
	}
}

