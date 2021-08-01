var bob, bobBody, bob1, bobBody1, bob2, bobBody2, bob3, bobBody3, bob4, bobBody4;
var ground, groundSprite;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{

}

function setup() {
	createCanvas(500, 350)

	bob=createSprite(width/2, height/2+100, 50,50);
	bob.scale=1

	bob1=createSprite(width/2, height/2+100, 50,50);
	bob1.scale=1

	bob2=createSprite(width/2, height/2+100, 50,50);
	bob2.scale=1

	bob3=createSprite(width/2, height/2+100, 50,50);
	bob3.scale=1

	bob4=createSprite(width/2, height/2+100, 50,50);
	bob4.scale=1

	groundSprite=createSprite(width/2, 100, width-100, 50);
	groundSprite.shapeColor=color(255);

	engine = Engine.create();
	world = engine.world;

	bobBody = Bodies.circle(width/2 , height/2+100 , 50 ,{restitution:0, isStatic:false});
	World.add(world, bobBody);

	bobBody1 = Bodies.circle(width/2+100 , height/2+100 , 50 ,{restitution:0, isStatic:false});
	World.add(world, bobBody1);

	bobBody2 = Bodies.circle(width/2+200 , height/2+100 , 50 ,{restitution:0, isStatic:false});
	World.add(world, bobBody2);

	bobBody3 = Bodies.circle(width/2-100 , height/2+100 , 50 ,{restitution:0, isStatic:false});
	World.add(world, bobBody3);

	bobBody4 = Bodies.circle(width/2-200 , height/2+100 , 50 ,{restitution:0, isStatic:false});
	World.add(world, bobBody4);


	var options={
		bodyA: bobBody,
		bodyB: ground,
		length: 175,
		stiffness:0.01
	}

	var constraint =Matter.Constraint.create(options);
	World.add(world, constraint)

	Engine.run(engine);

}

function draw() {
  rectMode(CENTER);
  background(190);

  bob.x= bobBody.position.x
  bob.y= bobBody.position.y

  bob1.x= bobBody1.position.x
  bob1.y= bobBody1.position.y

  bob2.x= bobBody2.position.x
  bob2.y= bobBody2.position.y

  bob3.x= bobBody3.position.x
  bob3.y= bobBody3.position.y

  bob4.x= bobBody4.position.x
  bob4.y= bobBody4.position.y
  groundSprite.x=ground.position.x
  groundSprite.y=ground.position.y
  bob.display();

  drawSprites();

}