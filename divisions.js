class Divisions{
    constructor(x,y,width,height){
    var option={
    isStatic:true
    }
    

    this.body=Bodies.circle(x,y,this.r,option)
    this.width=width;
    this.height=height;
    
    World.add(world,this.body);
    }
    display(){
    
        
        
    var angle=this.body.angle;
    var pos=this.body.position;
    rectMode(CENTER)
    fill("white");
    rect(pos.x,pos.y,this.width,this.height)
    
    }
    
    }
    