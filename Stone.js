class Stone {
  constructor(x,y,width,height) {
    var options = {
        isStatic: false,
        restution: 0,
        friction: 1,
        density: 1.2
    
    }
    this.stone = loadImage("stone.png");
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world,this.body);

  }

  fly () {

    this.stone.bodyA = null;

  }
    
   display() {
      image(this.body,100,20);
       var position = this.body.position;
      // this.body.position.x = mouseX;
      // this.body.position.y = mouseY;
       rectMode(CENTER);
       Fill(255);
       rect(position.x,position.y,this.width,this.height);

   }

}