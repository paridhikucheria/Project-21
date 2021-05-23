var bullet, wall
var speed, weight, thickness

function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  thickness = random(22,83);
  weight = random (30,52);

  bullet = createSprite(50, 200, 50, 10);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";
  
  wall = createSprite(1000,200,thickness,height/2);
  wall.ShapeColor = color(80,80,80);
}

function draw() {
  background("black"); 
  
  if(hascollided(bullet,wall)){
    bullet.velocityX=0;
    var damage= 0.5*weight*speed*speed/(thickness*thickness*thickness);
    if (damage >10){
      wall.shapeColor =color (255,0,0);
    }
    if ( damage<10){
      wall.shapeColor = color(0,255,0);
    }
  }

  drawSprites();
}

function hascollided(object1, object2){
  bulletrightedge = object1.x+object1.width;
  wall.leftedge = object2.x;
  if(bulletrightedge>=wall.leftedge){
    return true;
  }

    return false;
  }

