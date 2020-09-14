class BaseClass {
    constructor(x,y,width,height){
        var options = {
            restitution:0.6,
            friction:1.0,
            density:1.0,
            isStatic:false
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        fill('blue');
        rect(pos.x,pos.y,this.width,this.height);
    }
}