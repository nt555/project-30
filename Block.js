class Block extends BaseClass {
  constructor(x, y){
    super(x,y,30,50);
    //this.image = loadImage("sprites/enemy.png");
    this.visiblity = 255;
  }

  display(){
    console.log(this.body.speed);
    if(this.body.speed < 3){
      super.display();
    }
    else{
      World.remove(world,this.body);
      push();
      this.visiblity = this.visiblity - 0.3;
      tint(255,this.visiblity);
      //rectMode(CENTER);
      //rect(this.body.position.x,this.body.position.y,30,50);
      //image(this.image,this.body.position.x,this.body.position.y,50,50);
      pop();
    }
  }

};