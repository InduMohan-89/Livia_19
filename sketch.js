var jungle;
var boy,  boy_running;
var wood,bg;

function preload(){
  backgroundImg = loadImage("jungle.jpg");
  boy_running = loadAnimation("boy1.png","boy2.png","boy3.png","boy4.png","boy5.png","boy6.png","boy7.png","boy8.png");
  woodImage = loadImage("wood.png");
}
function setup() {
  createCanvas(1000, 700);

  //background sprite for making the background move
  bg = createSprite(550, 400, 1200, 700);
  bg.addImage(backgroundImg);
  bg.scale = 1.8;
  bg.velocityX = -2;

  boy = createSprite(90,height-180,20,50);
  boy.addAnimation("boy",boy_running);
  boy.scale = 0.9;
  
edges = createEdgeSprites();
}

function draw() {
  background(0);

  //infinitely scrolling background
  if(bg.x <440){
    bg.x = 520;
  }

  //space button to make boy jump
if(keyDown("space")){
  boy.velocityY = -10;
}

//gravity to boy
boy.velocityY = boy.velocityY+0.5;

//boy shoule be supported by the bottom edge
boy.collide(edges[3]);
  spawnWoods();
  
  
  
  
  
  
  
  
  
  
  drawSprites();
}
function spawnWoods() {

  if (frameCount % 180 === 0) {
    
    var wood= createSprite(600,height-100,40,10);
   // wood.y = Math.round(random(120,200));
    wood.addImage(woodImage);
    wood.scale = 0.5;
    wood.velocityX = -3;
    wood.lifetime =300;
  }
}