var PLAY=1;
var END=0;
var gameState=1;
var sword,swordImage;
var fruit,fruit1,fruit2,fruit3,fruit4,fruitGroup;
var enemyGroup,enemy,alienImage,gameoverImage;
var score=0;
var sound,sound1;


function preload(){
 swordImage =loadImage("sword.png");
  alienImage=loadAnimation("alien1.png","alien2.png");
  fruit1=loadImage("fruit1.png");
  fruit2=loadImage("fruit2.png");
  fruit3=loadImage("fruit3.png");
  fruit4=loadImage("fruit4.png");
  gameoverImage=loadImage("gameover.png");
  sound=loadSound("knifeSwooshSound.mp3");
  sound1=loadSound("gameover.mp3");

 
}

function setup(){
 createCanvas(600,600);
  sword=createSprite(40,200,20,20);
  sword.addImage(swordImage);
  sword.scale=0.7;
  
  fruitGroup=createGroup();
  enemyGroup=createGroup();
  
  
}


function draw(){

  
 background("lightblue");
 
  if(gameState===PLAY){
    
  fruits();
  enemy();
    sword.y=World.mouseY;
    sword.x=World.mouseX;
     
   
    if (fruitGroup.isTouching(sword)){
      fruitGroup.destroyEach();
      sound.play();
      score = score + 2
     
    }
    else
  {
   if (enemyGroup.isTouching(sword)){
     gameState = END;
     sound1.play();
     
     fruitGroup.destroyEach();
     enemyGroup.destroyEach();
     fruitGroup.setVelocityXEach(0);
     enemyGroup.setVelocityXEach(0);
     
     sword.addImage(gameoverImage);
     sword.x = 300;
     sword.y = 300;
   }
      
        
      }
    
  }
  drawSprites(); 
   text("Score: "+ score,300,30);
  
  }
  function fruits(){
    if(World.frameCount%80===0){
      position = Math.round(random(1,2));
      
      
    fruit = createSprite(400,200,20,20);
      console.log(position);
      fruit.scale = 0.2;
     
     if(position == 1)
      {
      fruit.x = 400;
       fruit.velocityX  = -(7 + (score/4));
      
      }
      else
      {
        if(position == 2){
          fruit.x = 0;
          fruit.velocityX = (7 +(score/4));
        }
        }   
        
       fruit.scale = 0.2;
       fruit.debug = false;
    
    
    r = Math.round(random(1,4));
    if(r == 1){
      fruit.addImage(fruit1);
    }else if(r == 2){
      fruit.addImage(fruit2);
    }else if(r == 3){
      fruit.addImage(fruit3);
    }else{
      fruit.addImage(fruit4);
    }
    
    fruit.y = Math.round(random(50,340));
    //fruit.setLifetime = 100;
    //fruit.velocityX = -4;
    fruitGroup.add(fruit)
  
}
}

function enemy(){
  if(World.frameCount %200 === 0){
    virus = createSprite(400,200,20,20);
    virus.addAnimation("moving",alienImage);
    virus.y = Math.round(random(100,300));
    virus.velocityX = -(8 + (score/10));
    virus.setLifetime = 50;
    
    enemyGroup.add(virus);
  }
}
    
    
    
    
    
    
    
    
    
      
    
    
  

  



