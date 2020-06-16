class Dustbin{
    constructor(x,y,width,height){

        this.image=loadImage("dustbingreen.png");
        
        var options={
            isStatic:true
 

        }
    
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
    }

 display(){

    var pos =this.body.position;
   
   // push();

    //translate(pos.x,pos.y);

imageMode(CENTER);
   // rect(0, 0, this.width, this.height);
    image(this.image,pos.x ,pos.y , this.width, this.height);
   // pop();
  }
}