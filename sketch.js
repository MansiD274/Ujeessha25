var paper1,dustbin1,dustbin2,dustbin3,ground1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	 
	 paper1=new Paper(150,100,70);
	 dustbin1=new Dustbin(400,650,200,20);
	 dustbin2=new Dustbin(300,585,20,150);
	 dustbin3=new Dustbin(500,585,20,150);
	 ground1=new Ground(400,657,800,10);
	 //dustbinObj=new Dustbin(600,650);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  paper1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  //dustbinObj.display();
  ground1.display();
  
  
  
  drawSprites();
}

function keyPressed(){
	if (keyCode=== UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});
	}
}




