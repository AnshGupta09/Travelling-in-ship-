var seaImg , ship_running , edges ;

function preload(){
seaImg = loadImage("sea.png");
ship_running = loadAnimation("ship-1.png","ship-2.png");
}

function setup(){
  createCanvas(700,500);
  sea = createSprite(10,200,600,10);
  sea.addImage(seaImg);
  sea.x=width/2;
  sea.velocityX=-2
  

  ship = createSprite(110,300,20,50)
  ship.addAnimation("running",ship_running);
  ship.scale=0.3;

  edges = createEdgeSprites ;
}

function draw() {
  background("blue");
  drawSprites();

  if(sea.x<0){
    sea.x=width/2;
  }

 
}