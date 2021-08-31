var astronaut 
var edges

function preload(){
  bg = loadImage("iss.png")
  bath = loadAnimation("bath1.png","bath2.png")
  brush = loadImage("brush.png")
  drink = loadAnimation("drink1.png","drink2.png")
  eat = loadAnimation("eat1.png","eat2.png")
  gym = loadAnimation("gym1.png","gym2.png")
  gym2 = loadAnimation("gym11.png","gym12.png")
  move = loadAnimation("move.png","move1.png")
  sleep = loadImage("sleep.png")
}
function setup() {
  createCanvas(800,400);
  astronaut = createSprite(400, 200, 50, 50);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale = 0.1;
}
  edges = createEdgeSprite();

function draw() {
  background(bg);  

  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 290;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming", gym);
    astronaut.changeAnimation("gymming");
    astronaut.y = 290;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("bathing", bath);
    astronaut.changeAnimation("bathing");
    astronaut.y = 290;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating");
    astronaut.y = 290;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("space")){
    astronaut.addAnimation("gymming2", gym2);
    astronaut.changeAnimation("gymming2");
    astronaut.y = 290;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("m")){
    astronaut.addAnimation("moving", move);
    astronaut.changeAnimation("moving");
    astronaut.y = 290;
    astronaut.velocityX = -3;
    astronaut.velocityY = 0;
  }
  drawSprites();
}