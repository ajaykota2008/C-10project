var ship_moving;

var ship;

var sea;

function preload(){

  ship_moving = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

  sea = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  
  ocean = createSprite(0,199.5,800,130)
  ocean.addAnimation("ocean",sea);
  ocean. scale = 0.21

  ship = createSprite(38,262,64,45);
  ship.addAnimation("moving",ship_moving);
  ship.scale = 0.08;
  ship.velocityX = 3,0;
  
  
  
}

function draw() {
  background("blue");
  
  if(ship.x>400){
    ship.x = 38;
    ship.y = 262;
  }

  drawSprites();

}
