class Border{
    constructor(a,b,width,height){
        
        var options = {
            isStatic : true 
        }
        
        
        this.body = Bodies.rectangle(a,b,width,height,options);
        this.width = width;
        this.height = height;

        World.add(world,this.body);

        this.image = loadImage("dustbingreen.png")
    }

    display(){
       
        push();
        imageMode(CENTER);
        image(this.image,50,70,this.width,this.height);
        pull();

    }
}