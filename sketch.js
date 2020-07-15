
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var world,boy;
var launchingForce=100;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	stoneObj=new stone(100,100,60); 

	mango1=new mango(1100,100,40);
	mango2=new mango(1170,130,40);
	mango3=new mango(1010,140,40);
	mango4=new mango(1000,70,40);
	mango5=new mango(1100,70,40);
	mango6=new mango(1000,230,40);
	mango7=new mango(900,230,40);
	mango8=new mango(1140,150,40);
	mango9=new mango(1100,230,40);
	mango10=new mango(1200,200,40);
	mango11=new mango(1120,50,40);
	mango12=new mango(900,160,40);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	launcherObject=new launcher(stoneObj.body,{x:235,y:420})
	
	Engine.run(engine);
}

function draw() {

  background(230);
  textSize(25);
  text("Press Space to get a second Chance to Play!!",50 ,50);
  image(boy ,200,340,200,300);
  Engine.update(engine)

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  stoneObj.display();

  groundObject.display();
  launcherObject.display();
  detectollision(stoneObj.body,mango1.body,);
  detectollision(stoneObj.body,mango2.body);
  detectollision(stoneObj.body,mango3.body);
  detectollision(stoneObj.body,mango4.body);
  detectollision(stoneObj.body,mango5.body);
  detectollision(stoneObj.body,mango6.body);
  detectollision(stoneObj.body,mango7.body);
  detectollision(stoneObj.body,mango8.body);
  detectollision(stoneObj.body,mango9.body);
  detectollision(stoneObj.body,mango10.body);
  detectollision(stoneObj.body,mango11.body);
  detectollision(stoneObj.body,mango12.body);
}

function mouseDragged()
{
	Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launcherObject.fly();
    // distance=int(dist(stoneObj.x,stoneObj.y,mango1.x,mango1.y));
}

function keyPressed() {
	if (keyCode === 32) {
	  launcherObject.attach(stoneObj.body);
	}
  }

  function detectollision(lstone,lmango){
	var collision = Matter.SAT.collides(lstone,lmango);
	if(collision.collided){
		console.log("collided");
		Matter.Body.setStatic(lmango,false);	
	}
	//   if(distance<=lmango.r+lstone.r){
	// 	Matter.Body.setStatic(lmango.body,false);
	//   }
  }