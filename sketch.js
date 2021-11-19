

var runner, runner_img;
var ground, invisibleGround, groundImage;


function preload(){
  runner_img =   loadAnimation("runner 1.png","runner 2.png");
  
 groundImage = loadImage("street.jpg");
  

}

function setup() {
  createCanvas(displayWidth, displayHeight);;
  
 
  
  ground = createSprite(displayWidth,displayHeight);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  
  

 
  runner= createSprite(50,height-70,20,50);
  

  runner.addAnimation("running", runner_img);
  runner.scale = 0.5;
   
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
 
 
  
  
}

function draw() {
  //trex.debug = true;
  //background(groundImage);
 
  
  
    
  
    if(keyDown("space") && runner.y >= 159) {
      runner.velocityY = -12;
    }
  
    runner.velocityY = runner.velocityY + 0.8
  
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
    runner.collide(invisibleGround);
    
  
  
    
  
  drawSprites();
}


    
    
  


