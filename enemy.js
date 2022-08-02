class Enemy{
    constructor(x, y){
        this.enemy=createSprite(x, y,20,20)
        this.enemy.shapeColor = "blue";
        this.enemy.addAnimation("left", enemyLeft)
        this.enemy.addAnimation("right",enemyRight)
        this.enemy.addAnimation("back",enemyBack)
        this.enemy.addAnimation("front",enemyFront)
        this.enemy.scale=0.4
        

        enemyGroup.add(this.enemy)
    }
    wallCollide(){
        this.enemy.bounceOff(wallGroup)

        
        if(this.enemy.velocityX < 0){
            this.enemy.changeAnimation("left")
        }
    
        if(this.enemy.velocityX > 0){
            this.enemy.changeAnimation("right")
        }

        if(this.enemy.velocityY < 0){
            this.enemy.changeAnimation("back")
        }

        if(this.enemy.velocityY > 0){
            this.enemy.changeAnimation("front")
        }

        
    }

    static death(){
        enemyGroup.isTouching(spellGroup,function(e,s){
            var potionX=e.x
            numberOfHits++
            if(player.power===0 && numberOfHits===6){
                e.destroy()
                numberOfHits=0
                createPotion(potionX)
            }
            else if(player.power===1 && numberOfHits===5){
                e.destroy()
                numberOfHits=0
                createPotion(potionX)
            }
            else if(player.power===2 && numberOfHits===4){
                e.destroy()
                numberOfHits=0
                createPotion(potionX)
            }
            else if(player.power===3 && numberOfHits===3){
                e.destroy()
                numberOfHits=0
                createPotion(potionX)
            }
            else if(player.power===4 && numberOfHits===2){
                e.destroy()
                numberOfHits=0
                createPotion(potionX)
            }
            else if(player.power===5 && numberOfHits===1){
                e.destroy()
                numberOfHits=0
                createPotion(potionX)
            }
            s.destroy()

           
        })
    }

   
} 

function createPotion(potionX){
    if(potionX >= 111 && potionX <= 251){
        potion1=new Potion(51, 250)
    }
    else if(potionX===1320){
        potion2=new Potion(1073, 314)
    }

    if(potionX===70){
        potion3=new Potion(387,455)
    }
   
    if(potionX===980){
        potion4=new Potion(977,420)
    }
    
    if(potionX>=616 && potionX <=754){
    potion5=new Potion(722,350)
    }

}