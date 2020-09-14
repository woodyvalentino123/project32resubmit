class Box extends BaseClass{
    constructor(x,y){
        super(x,y,30,30);
        rect(x,y,30,30);
        this.visibility = 105;
}
display(){
    if(this.body.speed<3){
        var pos = this.body.position
        var angle = this.body.angle
        push();
       translate(pos.x,pos.y)
       rotate(angle)
       fill("red")
        rectMode(CENTER)
        rect(0,0,30,30);
        pop();
    }else{
        World.remove(world,this.body);
         
        push();
        this.visibility = this.visibility-5;
        pop();
    }

}
score(){
    if (this.visibility < 0 && this.visibility > -1005){
        
      score = score + 1;
    }
  }

}


