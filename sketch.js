var backg
var harry
var vold, vold_move
var ronald
var hermione
var level=0


function preload() {
  bg_image = loadImage("HP_back.jpg");
  bg_image1 = loadImage("HP_back1.jpg");
  harryim = loadImage("main1.png");
  voldim = loadImage("voldy_s.png");
  voldmove = loadImage("voldy_move.png");
  voldat = loadImage("voldy_at.jpg");
  hermpic = loadImage("Herm.png");
  ronpic = loadImage("Ron.png");
  back_1 = loadImage("HP_back3.jpg");
  play = loadImage("Play.png");
  train = loadImage("HP_back2.jpg");
}

function setup() {
  createCanvas(displayWidth - 20,displayHeight - 20);
 //harry.visible = false
 //ronald.visible = false
// hermione.visible = false
start=createImg("Play.png")
start.position(width/2,height/2)
start.mousePressed(()=>{
  level = 1
})
}

function draw() {

  if(level==0){
    background(back_1);
    
   // drawSprites();
  }
  if(level==01){
    start.style.display = "none"
    harry = createSprite(width/2 - 300,height/2+100,50,50);
    harry.addImage(harryim);
    harry.scale = 0.7
    ronald = createSprite(width/2,height/2-200,200,200)
    ronald.addImage(ronpic);
    ronald.scale = 0.7
    hermione = createSprite(width/2+300,height/2 + 100,200,200)
    hermione.addImage(hermpic);
    hermione.scale = 0.7
    level = 1
    
  }
  if(level==1){
    background(bg_image);  
    if(mousePressedOver(harry)){
      harry.destroy();
    ronald.destroy();
    hermione.destroy();
      playerAnimation = 1
      level = 2
    }
    if(mousePressedOver(hermione)){
      harry.destroy();
    ronald.destroy();
    hermione.destroy();
      playerAnimation = 2
      level = 2
    }
    if(mousePressedOver(ronald)){
      harry.destroy();
    ronald.destroy();
    hermione.destroy();
      playerAnimation = 3
      level = 2
    }
    
  }


  if(level==2){
    background(bg_image1);  
    
player = createSprite(200,500,50,50);

    if(playerAnimation ==1){
      player.addImage(harryim)
      player.scale = 0.5
    }
    if(playerAnimation == 2){
      player.addImage(hermpic)
      player.scale = 0.5
    }
    if(playerAnimation == 3){
      player.addImage(ronpic)
      player.scale = 0.5
    }
    player.visible = true
    drawSprites();
  }
  drawSprites();
}