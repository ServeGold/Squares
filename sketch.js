function setup() {
  createCanvas(200,800);
   fixedrect = createSprite(200, 200, 50, 50);
  fixedrect.shapeColor = "green";
  fixedrect.debug = true;
  movingrect = createSprite(400,200,80,30);
  movingrect.shapeColor = "green";
  movingrect.debug = true;
  
}

function draw() {
  background(0,0,0); 
  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY; 
  if(movingrect.x - fixedrect.x < movingrect.width/2 + fixedrect.width/2&&fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2&&movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2&&fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2){
    movingrect.shapeColor = "red";
    fixedrect.shapeColor = "red";
  }
  else{
    movingrect.shapeColor = "green"
    fixedrect.shapeColor = "green"
  }
  drawSprites();
}