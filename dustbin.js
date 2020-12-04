class dustbin{

    constructor(x,y,width,height){

        var options = {
            isStatic : true,
            restitution : 0,
            friction : 0.5,
            density : 1.2

          
           }
    
       this.bodyA=Bodies.rectangle(x,y,width,height,options);
       this.width = width;
       this.heigth = height;
       World.add(world,this.bodyA);
       

       this.bodyB=Bodies.rectangle(x,y,width,height,options);
       this.width = width;
       this.heigth = height;
       World.add(world,this.bodyB);


       this.bodyC=Bodies.rectangle(x,y,width,height,options);
       this.width = width;
       this.heigth = height;
       World.add(world,this.bodyC);


     }
      
    

     display(){
     
     var pos=this.body.position;
     rectMode(CENTER);
     fill("white");
     rect(pos.x,pos.y,this.width,this.height);

    
      }


     }
