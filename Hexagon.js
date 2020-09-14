class Hexagon {
    constructor(x,y,radius){
        var options = {
            'density':0.5,
            'restitution':0.8,
            'isStatic':false
    }
    
    
    this.body = Bodies.circle(x,y,radius,options)
    this.radius = radius;
    
    World.add(world,this.body)

    }
    display(){

        var angle = this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y)
        rotate(angle)
        ellipseMode(CENTER);
       fill("green")
       ellipse(0,0,this.radius,20)
        pop();
    }
}