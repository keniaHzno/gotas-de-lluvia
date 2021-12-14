class Drops{
    constructor(x,y){
        var options = {
            friction: 0.1,
            density:1.5

        }
        this.x=x;
        this.y=y;
        this.rain = Bodies.circle(x,y,5,options);
        World.add(world,thisbody);
    }
    update(){
        if(this.rain.position.y > height){
            Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})

        }
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        fill(this.color);
        ellipseMode (RADIUS);
        ellipse(0,0,this.rain,this.r);
        pop ();
    }
    
}