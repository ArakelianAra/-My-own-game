class Maze{
    constructor(x,y,w,h){
       this.wall=createSprite(x,y,w,h)
       wallGroup.add(this.wall)
    }
    
}    

function createWalls(){
        //MAZE
        //top left
        wall1=new Maze(55,120,100,10)
        wall2=new Maze(100,95,10,45)
        wall3=new Maze(95,175,185,10)
        wall4=new Maze(180,150,11,170)
        wall5=new Maze(670,28,1400,10)
        wall6=new Maze(265,70,10,100)
        wall7=new Maze(385,70,260,10)
        wall8=new Maze(385,175,260,10)
        wall9=new Maze(385,120,260,10)
        wall10=new Maze(12,335,10,550)
        wall14=new Maze(220,230,100,10)
        wall15=new Maze(265,200,10,50)
        wall27=new Maze(470,230,275,10)
        //LEFT
        wall17 = new Maze(180, 418, 10, 175)
        wall18 = new Maze(135, 335, 100, 10)
        wall19 = new Maze(92, 447, 10, 225)
        wall11=new Maze(185,283,335,10)
        wall13=new Maze(95,253,10,50)
        //BOTTOM LEFT
        wall20 = new Maze(305, 555, 435, 10)
        wall21 = new Maze(520, 585, 10, 70)
        wall12=new Maze(265,475,10,165)
        wall16=new Maze(390,500,100,10)
        wall22=new Maze(700,610,1360,10)
        wall23=new Maze(310,390,100,10)
        wall24=new Maze(350,450,10,100)
        wall25=new Maze(435,420,15,150)
        wall26=new Maze(350,340,200,10)


        //middle
        wall27=new Maze(510,285,200,10)
        wall28=new Maze(605,180,10,220)
        wall29=new Maze(685,250,15,280)
        wall30=new Maze(690,70,170,10)
        wall31=new Maze(770,150,15,150)
        wall32=new Maze(770,420,10,280)
        wall33=new Maze(820,230,100,10)
        wall34=new Maze(820,280,100,10)
        wall35=new Maze(855,300,15,70)
        wall36=new Maze(855,200,15,70)
        wall37=new Maze(690,550,190,10)
        wall38=new Maze(520,415,10,170)
        wall39=new Maze(600,500,170,10)
        wall40=new Maze(600,580,10,50)
        wall41=new Maze(600,420,10,50)
        wall42=new Maze(650,445,100,10)
        wall43=new Maze(690,390,190,10)
        wall44=new Maze(570,340,100,10)
        //top right
        wall45=new Maze(855,70,10,100)
        wall46=new Maze(1015,120,190,10)
        wall47=new Maze(1070,65,260,10)
        wall48=new Maze(1100,175,200,10)
        wall49=new Maze(900,175,100,10)
        wall50=new Maze(940,255,10,175)
        wall51=new Maze(940,90,10,55)
        wall52=new Maze(1195,120,10,100)
        wall53=new Maze(1275,120,10,200)
        wall54=new Maze(1150,230,260,10)
        wall55=new Maze(1360,290,15,540)

        //right
        wall56=new Maze(1190,283,350,10)
        wall57=new Maze(1150,340,260,10)
        wall58=new Maze(1275,420,15,160)
        wall58=new Maze(1190,450,15,100)
        wall62=new Maze(1025,310,15,50)

        //bottom right
        wall59=new Maze(1060,500,255,10)
        wall60=new Maze(1065,395,265,10)
        wall61=new Maze(940,420,15,50)
        wall62=new Maze(855,500,15,220)
        wall63=new Maze(1185,555,350,10)
        wall64=new Maze(1020,445,180,10)
        wall65=new Maze(940,555,15,100)

    }