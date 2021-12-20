
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var engine,world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    var ball_options = {
		isStatic : false,
		restitution : 0.3,
		friction : 0,
		density : 1.2
	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = Bodies.circle(100,100,100,ball_options)
	World.add(world,ball)
	Engine.run(engine);

}


function draw() {
	background(0);
	Engine.update(engine)
	groundObj = new Ground(width/2,670,width,20);
	fill("green")
	leftSide = new Ground(450,600,20,120);
	rightSide = new Ground(650,600,20,120)
	groundObj.display()
	leftSide.display()
	rightSide.display()
	rectMode(CENTER);
	ellipseMode(RADIUS)
    ellipse(ball.body.position.x,ball.body.position.y,100,100)
     
}



