// Declare your variables here
let x= 200;
let y=200;
let player;
// Runs once before setup()
function preload() {
  playerSheet=loadSpriteSheet("assets/playerSheet.png",114,180,2);
  playerAnim=loadAnimation(playersheet);

}

// Runs once before draw()
function setup() {
  createCanvas(1900, 1055) // width, height of screen
  player=createSprite(200,200);
  player.addanimation(playerAnim);
}


// Runs in a loop forever
function draw() {
  background(200)
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
  animation(playerAnim,100,100);
}