class Rubber {
    constructor(x,y,radius){
        var options = {
            restitution:0.3,
            density:1,
            friction:5,
        }

        this.body = Bodies.circle(700,450,20,options);
      this.width = 50;
      this.height = 50;
     
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      fill("darkblue");
      rect(0, 0, this.width, this.height);
      pop();
    }
    }
