function level1(){
    

laser1 = createSprite(175,50,10,50)
laser1.shapeColor = "red"
laser1.velocityY = 4
laser1.bounceOff(wall2)


laser2 = createSprite(323,550,10,50)
laser2.shapeColor = "red"
laser2.velocityY = -4
laser2.bounceOff(wall1)


laser3 = createSprite(450,50,10,50)
laser3.shapeColor = "red"
laser3.velocityY = 4
laser3.bounceOff(wall2)

laser4 = createSprite(590,550,10,50)
laser4.shapeColor = "red"
laser4.velocityY = -4
laser4.bounceOff(wall1)

laser5 = createSprite(730,50,10,50)
laser5.shapeColor = "red"
laser5.velocityY = 4
laser5.bounceOff(wall2)


laser6 = createSprite(870,550,10,50)
laser6.shapeColor = "red"
laser6.velocityY = -4
laser6.bounceOff(wall1)

laser7 = createSprite(1010,50,10,50)
laser7.shapeColor = "red"
laser7.velocityY = 4
laser7.bounceOff(wall2)





}