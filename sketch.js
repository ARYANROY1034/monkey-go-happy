
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600)
monkey=createSprite(80,315,20,20)
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1
  ground=createSprite(400,350,600,10)
  ground.velocityX=-4;
  bananaGroup=new Group()
  score=0;
}

function draw() {
  background("blue")
  console.log(monkey.y)
if (ground.x<0){
  ground.x=ground.width/2
}
  if(keyDown("space")&&monkey.y>=215){
    monkey.velocityY=-3;
  
  }
  monkey.velocityY=monkey.velocityY+0.8
  monkey.collide(ground)
  if(bananaGroup.isTouching(monkey)){
    score=score+1
    bananaGroup.destroyEach()
  }
  food();
  drawSprites ()
  text("score:"+score,520,50)
}
function food(){
  if(frameCount%80==0){
  banana=createSprite(300,250,50,50)
  banana.velocityX=-3
    banana.addImage(bananaImage)
    banana.scale=0.1
  bananaGroup.add(banana)
}
}




