// Declare your variables here
let x= 200;
let y=200;
let down=false;

let player;
let playerSheet;
let playerAnim;

let elemen;
let elemenSheet;
let elemenAnim;

// Runs once before setup()
function preload() {
  playerSheet=loadSpriteSheet("assets/playerSheet.png",114,180,2);
  playerStillSheet=loadSpriteSheet("assets/playerSheet.png",114,180,1);
  playerAnim=loadAnimation(playerSheet);
  playerStillAnim=loadAnimation(playerStillSheet);

 
  elemenSheet=loadSpriteSheet("assets/monsterSheet.png",96,180,6);
  elemenAnim=loadAnimation(elemenSheet);
}


// Runs once before draw()
function setup() {
  createCanvas(800, 800) // width, height of screen
  player=createSprite(200,200);
  elemen=createSprite(600,200);

  player.addAnimation("walk",playerAnim);
  player.addAnimation("still",playerStillAnim);
  elemen.addAnimation("bounce",elemenAnim);
}


// Runs in a loop foreverlet 

function draw() {
  clear();
  
  if (keyIsDown(87)){
    y=y-3;
    player.position.y=y;
    player.changeAnimation("walk")
  }
  if (keyIsDown(83)){
    y=y+3;
    player.position.y=y;
    player.changeAnimation("walk")
  }
  if (keyIsDown(65)){
    x=x-3;
    player.position.x=x;
    player.changeAnimation("walk")
  }
  if (keyIsDown(68)){
    x=x+3;
    player.position.x=x;
    player.changeAnimation("walk")
  }else{
    player.changeAnimation("still")
  }
  player.collide(elemen);
  drawSprites();
}