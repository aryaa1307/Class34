const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint

var engine,world;
var ground;
var b;
var b1,b2,b3,b4,b5,b6,b7,b8,b9;
var rope;

function setup() {
  var canvas = createCanvas(1000,800);
  engine = Engine.create();
  world = engine.world;
  ground= new Ground(500,785,1000,30)
  b1=new Box (600,755,90,90)
  b2=new Box (640,755,90,90)
  b3=new Box (685,755,90,90)
  b4=new Box (600,710,90,90)
  b5=new Box (660,710,90,90)
  b6=new Box (640,665,90,90)
  b= new Ball (200,500,30) 
  rope= new Rope(b.body,{x:200,y:500})

  
}

function draw() {
  background("lightBlue"); 
  Engine.update(engine) ;
  ground.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b.display();
  rope.display();
  
}
function mouseDragged()
{
  Matter.Body.setPosition(b.body,{x:mouseX,y:mouseY})
}
function mouseReleased()
{
    rope.fly();
}