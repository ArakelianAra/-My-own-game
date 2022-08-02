class Player{
    constructor(){
      this.player=createSprite(1320,height-40,20,20)
      this.player.addAnimation("left", wizardLeft)
      this.player.addAnimation("right",wizardRight)
      this.player.addAnimation("back",wizardBack)
      this.player.addAnimation("front",wizardFront)
      this.playerDirection="left"
      this.player.debug = true;
      this.player.scale=0.8;
      this.power=0
      this.health = 150;
    }

    movement(){
      if(keyDown(UP_ARROW)){
        this.player.y-=3
        this.player.changeAnimation("back");
        this.playerDirection="up"
      }
    
      if(keyDown(DOWN_ARROW)){
        this.player.y+=3
        this.player.changeAnimation("front");
        this.playerDirection="down"
      }
    
      if(keyDown(RIGHT_ARROW)){
        this.player.x+=3
        this.player.changeAnimation("right");
        this.playerDirection="right"
      }
    
      if(keyDown(LEFT_ARROW)){
        this.player.x-=3
        this.player.changeAnimation("left");
        this.playerDirection="left"
      }

      this.player.collide(wallGroup)
    }

    attack(){
      if(keyWentDown("space")){
        var spell=createSprite(this.player.x,this.player.y,20,20)
        
        switch(this.playerDirection){
          case "up": spell.velocityY=-4
                      break

          case "down": spell.velocityY=4
                      break

          case "left": spell.velocityX=-4
                      break
                      
          case "right": spell.velocityX=4
                      break
        }
        
        spellGroup.add(spell)
        
      }


    }

    hit(){
      if(this.player.isTouching(enemyGroup)){
        if(this.health>37.5 ){
          this.health=this.health-37.5
        }
        else{
          this.health=0
        }
        switch(this.playerDirection){
          case "up": this.player.y+=20
                      break

          case "down": this.player.y-=20
                      break

          case "left": this.player.x+=20
                      break
                      
          case "right": this.player.x-=20
                      break
        }
      }
      
      console.log(this.health);
    }
}

function playerPower(){
  
  /* POWER BAR */
  fill("white")
  rect(width-180,7,150,10)

  if(player.power!==0){
    fill("red")
    rect(width-180,7,player.power*30,10)
  }
  fill("white");
  text("Power Level",width-265,15)

  /* HEALTH BAR */
  fill("white");
  text("Health",20,15)

  fill("white")
  rect(70,7,150,10)
  if(player.health!==0){
    fill("green")
    rect(70,7,player.health,10)
  }
  
}
