
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.constraint;

var Bob1;
var world;


function setup() {
	createCanvas(1600, 700);
	
	bob1 = new Bob(200,450,40);



	engine = Engine.create();
	world = engine.world;
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(0);
 
bob1.display();
  
  
 
}





