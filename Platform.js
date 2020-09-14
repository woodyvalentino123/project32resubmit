class Platform{
    constructor(x,y,width,height){
    var options = {
        isStatic:true
    }
    this.platform1 = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world,this.platform1);
}
   display(){
       var pos = this.platform1.position;
       push();
       rectMode(CENTER);
       fill('yellow')
       rect(pos.x,pos.y,this.width,this.height)
   }
}