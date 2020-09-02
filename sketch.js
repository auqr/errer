var car,wall;
var speed, weight;

var car2
var car3



function setup() {
  createCanvas(800,1200);
  createSprite(400, 200, 50, 50);

  speed=random(55,90)
  weight=random(400,1500)

  car=createSprite(50,200,50,50);
  car=createSprite(50,400,50,50);
  car=createSprite(50,600,50,50);
  wall=createSprite(700,200,50, 1200)
}

function draw() {
  background("red");  



  if(car.collide(wall)) {
    car.shapeColor ="lime";
  }

  car.velocityX = speed;
  if(wall.x-car.x < (car.width+wall.width)/2)
  {




   if(car2.collide(wall)) {
     car2.shapeColor ="lime";
   }
  
  car2.velocityX = speed;
  if(wall.x-car2.x < (car2.width+wall.width)/2)
   {
  
  
    var deformation=0.5 * weight * speed* speed/22509;
    if(deformation>180)
  {
    car.shapeColor=color(255,0,0);
  }

  if(deformation<100)
  {
    car.shapeColor=color(230,230,0)
  }

  if(deformation<100)
  {
    car.shapeColor=color(0,255,0)
  }
}
  }

  drawSprites();
}