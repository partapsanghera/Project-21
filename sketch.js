var wall, thickness;
var bullet,speed,weight;
  

function setup() {
  createCanvas(1600,400);
  
  speed=random(223,321);
  weight=random(30,52);
  thickness = random(22,83);
  
  bullet=createSprite(100, 200, 60, 20);
  bullet.shapeColor=color("white");
  bullet.velocityX=speed;

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);

}

function draw() {
  background("black"); 

  if (hasCollided(bullet,wall)) {
     bullet.velocityX=0;
     var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);
     
     if(damage>10) {
       wall.shapeColor=("red");
       fill("white");
       textSize(30);
       text("Damage is greater than 10", 550,200);
     }
     if(damage<10) {
      wall.shapeColor=("green");
      fill("white");
      textSize(30);
      text("Damage is less than 10", 550,200);
    }
  }
 
  drawSprites();
}

function hasCollided(lbullet,lwall) {
  bulletRightEdge=lbullet.x +lbullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge) {
    return true;
  }
    return false;
  }

