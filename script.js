/**
 * Project 3 versions 0-4 - 2D Web Game
 * Name: Isa Coronel
 * 
 * Use this template to get started creating a simple 2D game for the web using P5.js. 
 */
var gameState = "splash";
var player1; 

function setup() {

  createCanvas(600, 400);
  player1 = new Player(width/2, height * 4/5);
  console.log(player1);

}

function draw() {
  background(200);
  /* un-comment each line to see it work */
  //splash(); // call the splash screen function (below)
  //play(); // call the play screen function (below)
  //gameOver(); // call the gameOver screen function (below)
  switch(gameState){ //look at value of gamestate, look at 3 different cases, calls one at a time
    case "splash" : // if value is splash, call splash function
      splash();
      break; // 
    case "play" :
      play();
      break;
    case "gameOver" :
      gameOver();
      break;
    default :
      console.log("no match found!");

  }

}

function splash() {
  // this is what you would see when the game starts
  background(200);
  textAlign(CENTER);
  textSize(16);
  text("Let's Play a Game!", width / 2, height / 2);
  textSize(12);
  text("(click the mouse to continue)", width / 2, height / 2 + 30);
}

function play() {
  // this is what you see when the game is running 
  background(0, 200, 0);
  fill(0, 0, 200)
  textAlign(CENTER);
  textSize(16);
  //text("This is where the Game happens", width / 2, height / 2);
  //player1.x = mouseX //initalizing player horizontal movement to follow mouse
  player1.display();
  player1.move();

    if(keyIsPressed){ //true or false, is a key being pressed
    switch(keyCode) //try to match case with one of the arguments below
    {
      case UP_ARROW:
        player1.thrust(); // accelerate
        break;
      case DOWN_ARROW:
        player1.brake();
        break;
      case LEFT_ARROW:
        player1.angle -= .02; //turn left
        break;
      case RIGHT_ARROW:
        player1.angle += .02; //turn right
        break;
      default:
        console.log("use the arrow keys to move");
    }

}
 


}

function gameOver() {
  // this is what you see when the game ends
  background(0);
  fill(255, 0, 0)
  textAlign(CENTER);
  textSize(16);
  text("Game Over!", width / 2, height / 2);
}

function mousePressed() { //event handler - runs one time when mouse clicked

  console.log("click!"); // when mouse clicked, recieve output that it is clicked
  if(gameState == "splash"){ // checks for true or false
    gameState = "play"
  } else if(gameState == "play"){ // if first statement not true, moves onto next argument
    //gameState = "gameOver"
  } else if(gameState == "gameOver"){
    gameState = "splash";
  }
  console.log(gameState)
// else if arguments are exclusive of each other, only one applies

}
/*
function keyPressed(){
  switch(keyCode){
    case UP_ARROW :
      console.log("up")
      player1.y -= 30 // move up 30px
      player1.angle = 0; // no rotation
      if(player1.y < 0) {
        player1.y = height; // wrap to bottom
      }
      break; // stop looking for matches
    case DOWN_ARROW :
      console.log("down");
      player1.y += 30 // move down 30px
      player1.angle = PI ; // point down (rotate 180 deg.)
      if(player1.y > height){
        player1.y = 0; // wrap to top
      }
      break;
    case LEFT_ARROW :
      console.log("left")
      player1.x -= 30;
      player1.angle = PI + HALF_PI;
      if(player1.x < 0){
        player1.x = width;
      }
      break;
    case RIGHT_ARROW :
      console.log("right")
      player1.x += 30
      player1.angle = HALF_PI;
      if(player1.x > width){
        player1.x = 0;
      }
      break;
    default :
      console.log("use the arrow keys to move")
    
  }
} */