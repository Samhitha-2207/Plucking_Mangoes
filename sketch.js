
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boyImg;
var boy;
var stoneObject;

function preload() {
	boyImg = loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
    world = engine.world;

	//Create the Bodies Here.

	boy = createSprite(100,600,10,10);
	boy.addImage("boy.png",boyImg);
	boy.scale = 0.1;

	stoneObject = new Stone(50,580,10);

	ground = new Ground(400,650,1000,10);

	tree = new Tree(500,400,20,20);
	
	//mangoObject1 = new Mango(600,200,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  stoneObject.display();
  ground.display();
  tree.display();
  //mangoObject1.display();
 
}



