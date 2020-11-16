const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1 , border1 , border2 , border3 , border3 ;
var paper1,dustbin,dustbinImage;

function preload()
{
	dustbinImage = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(1500, 600);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2,height-50,width,20);

	paper1 = new Paper(50,100,70);
	dustbin = createSprite(1230,390,140,270)
	dustbin.addImage(dustbinImage);

	border1 = new Border(width-270,height-110,300,20);
	border2 = new Border(width-130,380,20,320);
	border3 = new Border(width-410,380,20,320);
	border1 = createSprite(width-270,height-50,300,20);
	border2 = createSprite(width-130,380,20,320);
	border3 = createSprite(width-410,380,20,320);
    border1.shapeColor = "yellow" ;
	border2.shapeColor = "white" ;
	border3.shapeColor = "white" ;


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  ground.display();
  border1.display();
  border2.display();
  border3.display();
  paper1.display();

  border1.depth = dustbin.depth;
  dustbin.depth = dustbin.depth+1

  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Body.applyForce(paper1.body,paper1.body.position,{x:1550,y:-1100})
	}
}

