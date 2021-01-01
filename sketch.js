
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var leg1,leg2,leg3,leg4,leg5;
var Constrainedback;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
leg1=new ball1(400,500,10);
leg2=new ball2(400,500,10);
leg3 =new ball3(400,500,10);
leg4=new ball4(400,500,10);
leg5=new ball5(400,500,10);
Constrainedback=new ground(800,700);
var options={
bodyA: ball1.body,
bodyB : Constrainedback.body,
bodyC: ball2.body,
bodyD:  Constrainedback.body,
bodyE:ball3.body,
bodyF: Constrainedback.body,
bodyG:ball4.body,
bodyH: Constrainedback.body,
bodyI:ball5.body,
bodyJ: Constrainedback.body,
}

	
  var chain = Constraint.create(options);
  World.add(world.chain);
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  ground.display();
  Constrainedback.display();
  drawSprites();
 
}



