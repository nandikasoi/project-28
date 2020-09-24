
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var Boy , boyImg , Ground ;
var Tree ,mango1, mango2, mango3, mango4 ,mango5 , mango6 ;
var constrainedStone;

function preload()
{
  boyImg = loadImage("boy.png");
  mango1 = loadImage("mango.png");
  mango2 = loadImage("mango.png");
  mango3 = loadImage("mango.png");
  mango4 = loadImage("mango.png");
  mango5 = loadImage("mango.png");
  mango6 = loadImage("mango.png");
  
}

function setup() {
	createCanvas(800, 700);
	
	boy = new Boy(200,100,50,50);

	mango1	 = new Mango1(50,100,10,10);
	mango2	 = new Mango2(100,100,10,10);
	mango3	 = new mango3(150,100,10,10);
	mango4	 = new Mango4(200,100,10,10);
	mango5	 = new Mango5(250,100,10,10);
	mango6	 = new Mango6(300,100,10,10);
	
	engine = Engine.create();
  world = engine.world;
  
  constrainedStone = new Stone(150,100.10,10);

	var options = {
      bodyA: boy.body,
      bodyB: constrainedStone.body,
      stiffness: 0.04,
      length: 10
  }

  var chain = Constrained.create(options);
  World.add(world,chain);
   
  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(33,35,25);
  
  boy.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();

  constrainedStone.display();

  strokeWeight(3);
  line(boy.body.position.x,boy.body.position.y,constrainedStone.body.position.x,constrainedStone.body.position.y);
   
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
 
}

function mouseDragged () {
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
 
}

function mouseReleased () {
    stone.fly();
}

function detectCollision (stone,mango) {
  mangoBodyPosition = mango.body.position ;
  stoneBodyPosition = stone.body.position ;

  var distance = dist(stone.body.position.x,stone.body.position.y,mango.body.position.x,mango.body.position.y);
   
  if(distance <= mango.r + stone.r) 
  {
    Matter.body.setStatic(mango.body,false);
  }
}

function keyPressed () {
  if (keyCode === 32) {
    Matter.body.setPosition(stone.body, {x:235 , y:425 })
    launcherObject.attach(stone.body);
  }

}
