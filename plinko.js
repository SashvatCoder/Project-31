class Plinko{
    constructor(x,y){
    var option={
    restitution:1,
    friction:0,
    isStatic:true
    }
    this.r=10;

    this.body=Bodies.circle(x,y,this.r,option)
    
    World.add(world,this.body);
    }
    display(){
    
        
        
    var angle=this.body.angle;
    var pos=this.body.position;
    push();
    translate(pos.x,pos.y)
    rotate(angle);
    imageMode(CENTER)
    noStroke();
    fill("white");
    ellipseMode(RADIUS);
    ellipse(0,0,this.r)
    pop();
    }
    
    }
    