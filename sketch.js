var bg, bgImg
var car,upImg,rightImg,leftImg,downImg
var zombie,zombieImg
var edges
var zombieGroup
var crushZombie
var score
var heart,heartImg


function preload(){
  bgImg= loadImage("background.jpg")
  zombieImg = loadImage("zombie.png")
  upImg = loadImage("car.png")
  downImg = loadImage("down.png")
  rightImg = loadImage("Right.png")
  leftImg = loadImage("left.png")
  crushZombie = loadImage("Crushed.png")
  //preload the heartImg
  heartImg = loadImage("Heart.png")
}



function setup(){

  createCanvas(900,500);

  bg= createSprite(450,250)
  bg.addImage(bgImg)
  bg.scale = 1.4

  car = createSprite(450,250)
  car.addImage("up",upImg)
  car.addImage("down",downImg)
  car.addImage("left",leftImg)
  car.addImage("right",rightImg)
  car.scale =0.5

  score = 0

  

  zombieGroup = createGroup()

  edges= createEdgeSprites()


    
}

function draw(){

  background("black");
    
  drawSprites();
  car.bounceOff(edges)
  zombieGroup.bounceOff(edges)
  
  for(var i = 0; i<zombieGroup.length;i++){
    if(car.isTouching(zombieGroup[i])){
      
      zombieGroup[i].velocityX = 0
      zombieGroup[i].velocityY = 0
      score = score + 2;
      zombieGroup[i].destroy()
  }
}

  
  if(keyDown("w") ){
    car.velocityY = -5;
    car.velocityX =0;
    car.changeImage("up")

  }
  if(keyDown("s") ){
    car.velocityY = 5
    car.velocityX =0;
    car.changeImage("down")
  }
  if(keyDown("a")  ){
    car.velocityX = -5
    car.velocityY =0;
    car.changeImage("left")
  }
  if(keyDown("d")  ){
    car.velocityX = 5
    car.velocityY =0;
    car.changeImage("right")
  }
  
  spawnZombies()

  textSize(15)
  fill("black")
  text("SCORE : "+ score,25,25 )
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
}

function spawnZombies(){
  if(frameCount % 100 == 0){
    zombie = createSprite(random(50,850), random(50,450))
    zombie.addImage("zombie",zombieImg)
    zombie.addImage("crush",crushZombie)
    zombie.scale= 0.4
    zombie.velocityX = random(-4,4)
    zombie.velocityY = random(-4,4)
    zombieGroup.add(zombie)

  }
  
}