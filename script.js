// Declare your variables here
// let x= 200;
// let y=200;
let player;
let playerSheet;
let playerAnim;

let elemen;
let elemenSheet;
let elemenAnim;

// Runs once before setup()
function preload() {
  playerSheet=loadSpriteSheet("assets/playerSheet.png",114,180,2);
  playerAnim=loadAnimation(playerSheet);
 
  elemenSheet=loadSpriteSheet("assets/playerSheet.png",114,180,2);
  elemenAnim=loadAnimation(playerSheet);
}
}

// Runs once before draw()
function setup() {
  createCanvas(800, 400) // width, height of screen
  player=createSprite(200,200);

}


// Runs in a loop forever
function draw() {
  clear();
  animation(playerAnim, 200,200);
  // if (keyIsDown(87)){
  //   y=y-3;
  // }
  // if (keyIsDown(83)){
  //   y=y+3;
  // }
  // if (keyIsDown(65)){
  //   x=x-3;
  // }
  // if (keyIsDown(68)){
  //   x=x+3;
  // }
  drawSprites();
}