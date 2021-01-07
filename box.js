class Box{

  constructor(x,y,width,height){


      var options ={

          isStatic : true,
          density : 1.5,
          friction : 1


      }

      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.image = loadImage("dustbingreen.png");
      this.LeftSide = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
      World.add(world,this.LeftSide);

      this.RightSide = Bodies.rectangle(this.x+150,this.y,this.width,this.height,options);
      World.add(world,this.RightSide);

      this.BottomSide = Bodies.rectangle(this.x+75,this.y+40,this.height+50,this.width,options);
      World.add(world,this.BottomSide);



  }



  display(){

      imageMode(CENTER);
    image(this.image,1200,620,250,100);

    
     
  }
};