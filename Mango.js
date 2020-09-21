class Mango {
    constructor(x,y,width,height) {
        var options = {
            isStatic: true,
            restitution: 0,
            friction: 1

        }
       
        this.body = Bodies.circle(x,y,width,height,options);
        World.add(world,this.body);

    }

    display() {
        var position = this.body.position;
        ellipseMode(CENTER);
        Fill(255);
        circle(position.x,position.y,this.width,this.height);
        
    }
}