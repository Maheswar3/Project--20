var cat,catImg1,catImg2,catrunning;
var mouse,mouseImg1,mouseteasing;
var bg,bgImg;
function preload() {
    //load the images here
    bgImg=loadImage ("garden.png");
    catImg1=loadAnimation ("cat1.png","cat2.png");
    mouseImg1=loadAnimation ("mouse1.png","mouse2.png");
    catImg2=  loadAnimation ("cat3.png","cat4.png");
    mouseImg2=loadAnimation ("mouse3.png","mouse4.png");

    

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    bg=createSprite (200,300);
    bg.addImage (bgImg);

    cat=createSprite (200,300);
    cat.addAnimation ("cat",catImg1);

    mouse=createSprite (200,300);
    mouse.addAnimation ("mouse",mouseImg1);
 
 

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
    keyPressed();
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyCode === RIGHT_ARROW){
    mouse.addAnimation ("mouseteasing",mouseImg2);
    mouse.changeAnimation ("mouseteasing");
    mouse.frameDelay =25;


  }

  if (KeyCode === LEFT_ARROW){
    cat.addAnimation ("catrunning",catImg2);
    cat.changeAnimation ("catrunning");
    cat.frameDelay =25;


  }
  if (cat.x - mouse.x <(catWidth - mouseWidth)/2)
  {
   cat.changeAnimation ("cat",catImg1);
   cat.velocityX=0;

  }
}
