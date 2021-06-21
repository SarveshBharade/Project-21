
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;
var Ground;
var left;
var right;
var bucket1;
var bucket2;

function preload()
{
	
}

function setup() {
	createCanvas(800, 650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var ball_options ={
	isStatic : false,
	restitution : 0.3,
	friction : 0,
	density : 1.2
};

var bucket_options ={
	isStatic : true
};

ball = Bodies.circle(260,200,10,ball_options);
World.add(world,ball);

bucket1 = Bodies.rectangle(450,570,15,110,bucket_options);
World.add(world,bucket1);

bucket2 = Bodies.rectangle(600,570,15,110,bucket_options);
World.add(world,bucket2);

Ground = new ground(400,640,800,20);
left = new ground(10,325,20,650);
right = new ground(790,325,20,650);

	rectMode(CENTER);
	ellipseMode(RADIUS);

}


function draw() {
  
  Engine.update(engine);
  background(0);
  
  Ground.show();
  left.show();
  right.show();

  push();
  fill("white");
  ellipse(ball.position.x,ball.position.y,10);
  rect(bucket1.position.x,bucket1.position.y,15,120);
  rect(bucket2.position.x,bucket2.position.y,15,120);
  pop();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0, y:0},{x:0.75, y:0})
	}
}