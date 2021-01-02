class Mango{
    constructor(x,y,radius){
        var options = {
            isStatic: true,
            restitution: 0,
            friction: 1
        }
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.body = Bodies.circle(this.x, this.y, this.radius, options);
        //this.image = loadImage("mango.png");
        World.add(this.body,world);
    }
    display() {
        var mangopos = this.body.position;
        //image(this.image,0,0,this.width,this.height);
        push();
        translate(this.body.position.x, this.body.position.y);
        fill(255);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}