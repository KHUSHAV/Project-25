class Paper{
    constructor(a,b,radius){
        
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2 
        }
        
        
        this.body = Bodies.circle(a,b,radius,options);
        this.radius = radius;
        this.image = loadImage("paper.png");

        World.add(world,this.body);

        
    }

    display(){
        var pos = this.body.position;

       
        fill("white");

        push()
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,50,45,this.radius, this.radius);
        pop()
    }
}