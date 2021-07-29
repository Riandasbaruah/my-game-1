var laser1 , laser2 , laser3 , laser4 , laser5 , laser6 , laser7;

var wall1 , wall2;

var player;



function setup() {
  Canvas = createCanvas(1240,600);
  


wall1 = createSprite(620,20,1240,10)
wall1.shapeColor= "black"

wall2 = createSprite(620,580,1240,10)
wall2.shapeColor= "black"

player = createSprite(30,250,20,20)
player.shapeColor= "orange"
player.collide(wall1)
player.collide(wall2)



}

function draw() {
  background(255,255,255); 

  if(keyDown(UP_ARROW)){
    player.y = player.y-5
}

 if(keyDown(DOWN_ARROW)){
   player.y = player.y+5
 }

  if(keyDown(LEFT_ARROW)){
    player.x = player.x-5
  }

  if(keyDown(RIGHT_ARROW)){
    player.x = player.x+5
  }


level1() 
  drawSprites();

}