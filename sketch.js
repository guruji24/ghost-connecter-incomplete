//creating variables
var charlieGame,charlieGameImage;
var ghostCaller,ghostCallerImage;
var micImage,mic;
var sprite1;
var yesImage,yes;
var ghost,ghostImage;
var homeButton,homeButtonImage;
var ghostSound;
var bloodyMarryGame,elevenMilesGame,elevenMIlesGameImage;
var bloodyMarry,bloodyMarryImage;
var real,realImage;

var gameState = "start"

function preload(){
  //loading images
  charlieGameImage = loadImage("charlie.png");
  ghostCallerImage = loadImage("ghost caller.png");
  micImage = loadImage("mic.png");
  yesImage = loadImage("yes.png");
  ghostImage = loadImage("ghost.png");
  homeButtonImage = loadImage("home button.png");
  bloodyMarryImage = loadImage("ghost of bloody marry.png");
  elevenMilesImage = loadImage("11 miles chalenge.png");
  realImage = loadImage("bloody marry.png");

  ghostSound = loadSound("ghost voice.mp3");
}

function setup(){
  //creating the workspace and setting it's size
  createCanvas(800,800);
  
  //creating sprites and adding images to them
  charlieGame = createSprite(100,100);
  charlieGame.addImage(charlieGameImage);

  ghostCaller = createSprite(500,100);
  ghostCaller.addImage(ghostCallerImage);
  //setting the size of ghost caller
  ghostCaller.scale = 1;

  mic = createSprite(400,600);
  mic.addImage(micImage);
  mic.scale = 0.5;

  sprite1 = createSprite(400,700,100,50);
  //setting the color
  sprite1.shapeColor = "cyan";

  yes = createSprite(400,400);
  yes.scale = 1;
  yes.addImage(yesImage);
  
  ghost = createSprite(400,400);
  ghost.addImage(ghostImage);
  ghost.scale = 3;

  homeButton = createSprite(700,100);
  homeButton.addImage(homeButtonImage);
  homeButton.scale = 0.5;

  bloodyMarryGame = createSprite(100,400);
  bloodyMarryGame.addImage(ghostCallerImage);
  bloodyMarryGame.scale = 1;

  elevenMilesGame = createSprite(500,400);
  elevenMilesGame.addImage(elevenMilesImage);
  elevenMilesGame.scale = 1;

  bloodyMarry = createSprite(400,400);
  bloodyMarry.addImage(bloodyMarryImage);
  bloodyMarry.scale = 3;

  real = createSprite(400,400);
  real.addImage(realImage);
  real.scale = 3;
}

function draw(){
  //background colour
  background("black");
  
  //gamestate
  if(gameState==="start"){
  
//text on game
  fill("cyan")
  textSize(25);
  text("charlie charlie game",25,220);
  
  fill("cyan")
  textSize(25);
  text("ghost caller app",400,220);

  fill("cyan")
  textSize(25);
  text("bloody marry game",25,520);

  fill("cyan")
  textSize(25);
  text("11 miles game",500,520);

  //making the sprites visible
  charlieGame.visible = true;
  ghostCaller.visible = true;
    sprite1.visible = false;
    mic.visible = false;
    yes.visible = false;
    ghost.visible = false;
    homeButton.visible = false;
    bloodyMarryGame.visible = true;
      elevenMilesGame.visible = true;
      bloodyMarry.visible = false;
      real.visible = false;

  //changing gamestate
    if(mousePressedOver(charlieGame)){
      gameState = "play-charlie"
    }

    if(mousePressedOver(ghostCaller)){
      gameState = "callGhost"
    }

    if(mousePressedOver(bloodyMarryGame)){
      gameState = "bloodyGame"
    }

    if(mousePressedOver(elevenMilesGame)){
      gameState = "danger"
    }

    ghostSound.stop();

  }else if(gameState==="play-charlie"){
      //making sprites invisible
     charlieGame.visible = false;
      ghostCaller.visible = false;
      mic.visible = true;
      sprite1.visible = true;
      yes.visible = false;
      homeButton.visible = true;
      bloodyMarryGame.visible = false;
      elevenMilesGame.visible = false;
      bloodyMarry.visible = false;

      //inserting text
      text("hold down the mic button and speak the question and then hold down the send button to send the messege to charlie",100,500);

    if(mousePressedOver(mic)){
      mic.visible = false;
    }

    if(mousePressedOver(sprite1)){
     yes.visible = true;
    }

    if(mousePressedOver(homeButton)){
      gameState = "start"
    }

    }

    if(gameState==="callGhost"){
      ghost.visible = true;
      homeButton.visible = true;
      bloodyMarryGame.visible = false;
      elevenMilesGame.visible = false;
      bloodyMarry.visible = false;

      ghostSound.play();

      

      if(mousePressedOver(homeButton)){
        gameState = "start"
      }
    }

    if(gameState==="bloodyGame"){
      charlieGame.visible = false;
      ghostCaller.visible = false;
      mic.visible = false;
      sprite1.visible = false;
      yes.visible = false;
      homeButton.visible = true;
      bloodyMarryGame.visible = false;
      elevenMilesGame.visible = false;
      

      fill("red");
      textSize(15);
      text("speak bloody marry 3 times while facing mirror with candles in hand in a dark room and then see your device",50,400);

      if(mousePressedOver(homeButton)){
        gameState = "start"
      }

      if(frameCount%400===0){
        bloodyMarry.visible = true;
      }

      if(frameCount%420===0){
        bloodyMarry.visible = false;
      }

      if(frameCount%700===0){
        real.visible = true;
        ghostSound.play();
      }

    }

    if(gameState==="danger"){
      bloodyMarryGame.visible = false;
      elevenMilesGame.visible = false;
      ghostCaller.visible = false;
      charlieGame.visible = false;
      homeButton.visible = true;

      fill("white");
      text("1) begin at night ideally when the roads are not well-traveled",100,100);
      text("2) drive,enter the woods",100,125);
      text("3) let your wish guide you",100,150);
      text("4) drive, when you have located the road turn down it",100,175);
      text("travelling the miles",300,200);
      text("1) take a minute if you want and can stop the car proceed only when you are ready.",100,250);
      text("2) drive, this is mile 1, you can turn onn the heater if it get's cold",100,275);
      text("3) drive. this is mile 2, if you haven't turned onn the heater yet this will be good time to do so, if you do not you might regret it later",100,300);
      text("4) drive. this is mile 3 ignore any shadows in the trees no matter, how human they may seen",100,325);
      text("5) drive. this is mile 4, ignore any voices you can hear, no matter how human they may seen",100,350);
      text("6) drive. this is mile 5, ignore the vanishing of the trees, the sudden apearance of the lake and the glowing of the moon",100,375);
      text("7) drive. this is mile 6, ignore the comeback of the trees, the disappearance of the stars, if your radio turns onn ignore that too",100,400);
      text("no matter what it says, but do not attempt to turn it off",100,415);
      text("8) congrats: you are half way done",100,450);
      text("9)drive. this is mile 7 ignore again any voices you may hear no matter how close they sound,do not turn around even if the voices",100,475);
      text("appear to be coming from the backseat",100,490);
      text("10) drive. this is mile 8 slow down, but do not stop, break the headlights if they flicker, but do not stop. no matter how ",100,525);
      text("cold it get's. no matter who or what you might see, but do not stop",100,540);
      text("11) drive this is mile 9, your vehicle may stall close your eyes try to restart your vehicle, no matter what you hear do",100,575);
      text("not open your eyes, when you car restarts hit the accelerator as fast as you can, when the mile is over open your eyes",100,590);
      text("12) this is mile 10, do not look in your rare view window",100,625);
      text("13) drive. this is mile 11, your car may lose power but continue to drive let it",100,650);
      text("14) if you see a red light ahead close your eyes, cover your ears with you hand, not matter what you hear,what you feel,how ",100,675);
      text("hot it get's do not look",100,690);
      text("15) when the power returns open your eyes and drive till the dead end, after that you will see you are at the place from where you started",50,725);
      text("16) if your desire was a material thing - it will be in your trunk, back seet or in your pockets, now you can go back home",100,750);
      text("17) if it was non matirial you will get it if you do not get it immediately, be patient you will get it, now you can get back home",100,775);

      if(mousePressedOver(homeButton)){
        gameState = "start"
      }
    }

  //making all the sprites and other objects visible
  drawSprites();
  if(gameState==="play-charlie"){
    fill("red");
    textSize(15);
    text("send messege",350,700);
  }else if(gameState==="callGhost"){
   
      fill("black");
      textSize(25);
      text("click on home button to end this call now or die",100,400);
  }
}
