
var bullet,wall ;
var thickness , speed , weight ;



function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(25,30);

  bullet = createSprite(400,200,40,5);
  wall = createSprite(1200,200,60,100);

 bullet.velocityX = speed;


 thickness =random(22,83);



}

function draw() {
  background("black");
  
  if(hascollided(bullet,wall)){

  bullet.velocityX = speed;
  var damage = 0.5 * weight * speed*speed/(thickness * thickness * thickness );

  if(damage>10){

    wall.shapeColor = color(255,0,0);//Red

  } 


  if(damage<10){

    wall.shapeColor = color(0,255,0);//Green
  }
 }

  drawSprites();

hascollided(bullet,wall);
}  

function hascollided(lbullet,lwall)
{
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }
    return false;
}