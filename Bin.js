class Bin {
    constructor(x, y, width, height) {
      var options = {
          isStatic:true
          // Bodies.rectangle(400, 0, 800, 50, { isStatic: true }
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
      
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      rectMode(CENTER);
      fill("blue");
      rect(pos.x,pos.y,this.width,this.height);
      pop();
      
    }
  };
  