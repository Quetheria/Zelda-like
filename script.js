// Declare your variables here
let x= 200;
let y=200;
// Runs once before setup()
function preload() {
  watElemen=loadImage("assets/elemental.png")
}

// Runs once before draw()
function setup() {
  createCanvas(1900, 1055) // width, height of screen
  frameRate(30);
}


// Runs in a loop forever
function draw() {
  background(200)
  if (keyIsDown(87)){
    y=y-3
  }
  if (keyIsDown(83)){
    y=y+3
  }
  if (keyIsDown(65)){
    x=x-3
  }
  if (keyIsDown(68)){
    x=x+3
  }
  image(watElemen, x, y)

}