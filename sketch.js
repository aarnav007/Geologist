
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer;
var ground;
var stone;
var rubber;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	hammer = new Hammer(400,200,100,35);
	ground = new Ground(600,height,1200,20);
	stone = new Stone(200,500,80,80);
	rubber = new Rubber(700,500,);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("cyan");
  
  ground.display();
  hammer.display();
  stone.display();
  rubber.display();
}



