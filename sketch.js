const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var plrBase, plr, comp, compBase


function setup() {
  canvas = createCanvas(1000, 500);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
  plrBase = new playerBase(200,400,200,200)
  compBase = new computerBase(800,400,200,200)
  plr = new player(200,225,75,200)
  comp = new computer(800,225,75,200)

 }

function draw() {

  background("grey");

  Engine.update(engine);

  // Title
  fill("purple");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
  plrBase.show()
  compBase.show()

   //display Player and computerplayer
  plr.show()
  comp.show()


}
