
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var bin1,bin2,bin3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ball = new Paper(200,400);
  ground = new Ground(400,670,800,30);
  bin1 = new Bin(500,615,20,80);
  bin2 = new Bin(560,645,100,20);
  bin3 = new Bin(620,615,20,80);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.display();
  //ball.display();
  //ball.BounceOff();
  //Ball.collide();
  ground.display();
  bin1.display();
  bin2.display();
  bin3.display();
  drawSprites();
 
}


function keyPressed() {
  if (keyCode === UP_ARROW) {
     // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
   Matter.Body.applyForce( ball.body,ball.body.position ,{x:95,y:-95});
 
   }
 }


