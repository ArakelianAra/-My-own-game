var player, maze;
var wall1,wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12, wall13, wall14, wall15, wall16, wall17, wall18, wall19, wall20, wall21
var wall22,wall23,wall24,wall25,wall26,wall27,wall28,wall29,wall30,wall31,wall32,wall33,wall34
var wall35,wall36,wall37,wall38,wall39,wall40,wall41,wall42,wall43,wall44,wall45,wall46,wall47,wall48,wall49,wall50,wall51,wall52,wall53,wall54,wall55
var wall56,wall57,wall58,wall59,wall60,wall61,wall62,wall63,wall64,wall65,wall66,wall67,wall68,wall69,wall70
var enemy1, enemy2, enemy3, enemy4, enemy5; 
var wizardLeft, wizardRight, wizardFront, wizardBack;
var maze
var wallGroup
var enemyGroup
var enemyLeft, enemyRight, enemyFront, enemyBack
var potion1, potion2, potion3, potion4, potion5
var potionGroup
var spellGroup
var potionImg
var numberOfHits=0
var gamestate="start"
function preload(){
  maze=loadImage("Images/mazebg.webp")
  wizardLeft=loadAnimation("Images/left1.png", "Images/left2.png", "Images/left3.png", "Images/left4.png")
  wizardRight=loadAnimation("Images/right1.png", "Images/right2.png", "Images/right3.png", "Images/right4.png")
  wizardBack = loadAnimation("Images/back1.png", "Images/back2.png", "Images/back3.png", "Images/back4.png");
  wizardFront = loadAnimation("Images/front1.png", "Images/front2.png", "Images/front3.png", "Images/front4.png");


  enemyLeft=loadAnimation("Images/enemy left1.png","Images/enemy left2.png","Images/enemy left3.png","Images/enemy left4.png")
  enemyRight=loadAnimation("Images/enemy right1.png","Images/enemy right2.png","Images/enemy right3.png","Images/enemy right4.png")
  enemyFront=loadAnimation("Images/enemy front1.png")
  enemyBack=loadAnimation("Images/enemy back1.png","Images/enemy back2.png","Images/enemy back3.png","Images/enemy back4.png")

  potionImg=loadImage("Images/potion1.png")
 
  
}

function setup() {
  createCanvas(1370,620);
  player=new Player()
  
  enemyGroup=new Group()
  
  potionGroup=new Group()
  

  spellGroup=new Group()
  wallGroup= new Group()  
  createWalls()
}


function draw() {
  background(0);  

  if(gamestate==="start"){
    player.health=150
    player.power=0
    player.player.x=1320
    player.player.y=height-40
    enemy1 = new Enemy(150, 50);
    enemy1.enemy.velocityX=-3
    enemy2 = new Enemy(1320, 50);
    enemy2.enemy.velocityY=3
    enemy3 = new Enemy(70, 580);
    enemy3.enemy.velocityY=-3
    enemy4 = new Enemy(980, 600);
    enemy4.enemy.velocityY = -3;
    enemy5 = new Enemy( 650,420);
    enemy5.enemy.velocityX=3
    gamestate = "play"; 

  }
  else if(gamestate==="play"){
    enemy1.wallCollide()
    enemy2.wallCollide()
    enemy3.wallCollide()
    enemy4.wallCollide()
    enemy5.wallCollide()
    //PLAYER CONTROLS
    player.movement()
    player.attack()
    playerPower()
    player.hit()
    Enemy.death()
    Potion.collect()

    spellGroup.collide(wallGroup, function(s,w){
      s.destroy()
    })
    drawSprites();

    if(player.health===0){
      gamestate="end"
    }

  }
  else if(gamestate==="end"){
    
    text("Game Over",width/2-100,height/2)
    text("Press 'r' to Restart",width/2-100,height/2+100)
    enemyGroup.destroyEach()
    spellGroup.destroyEach()
    potionGroup.destroyEach()

    if(keyDown("r")){
      gamestate="start"
    }
    
  }
}