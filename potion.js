class Potion{
    constructor(x, y){
        this.potion=createSprite(x, y,20,20)
        this.potion.addImage(potionImg)  
        this.potion.scale=0.1
        potionGroup.add(this.potion)
    }
    
    static collect(){
        player.player.collide(potionGroup, function(pl,po){
            po.destroy()
            player.power++
        })
    }
}