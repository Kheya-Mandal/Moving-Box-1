var canvas;
var music;
var b1,b2,b3,b4;
var bWhite;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    b1=createSprite(80,570,190,80);
    b1.shapeColor="red";

    b2=createSprite(300,570,190,80);
    b2.shapeColor="green";

    b3=createSprite(520,570,190,80);
    b3.shapeColor="blue";

    b4=createSprite(740,570,190,80);
    b4.shapeColor="yellow";



    //create box sprite and give velocity
    bWhite=createSprite(random(20,750),50,50,50);
    bWhite.shapeColor="white";
    bWhite.velocity.y=10;

}

function draw() {
    background(rgb(169,169,169));
     //create edgeSprite
     edges=createEdgeSprites();
     bWhite.bounceOff(edges);
    
    
  
    //add condition to check if box touching surface and make it box
          

           if(b1.isTouching(bWhite)&&bWhite.bounceOff(b1)){
            bWhite.shapeColor="red";
            bWhite.velocityX=4;
            bWhite.velocityY=-4;
            music.play();
            }
            if(b2.isTouching(bWhite)&&bWhite.bounceOff(b2)){
                bWhite.shapeColor="green";
                bWhite.velocityX=-4;
                bWhite.velocityY=-4;
                music.play();
            }
            if(b3.isTouching(bWhite)&&bWhite.bounceOff(b3)){
                bWhite.shapeColor="blue";
                bWhite.velocityY=4;
                bWhite.velocityX=-4;
                music.play();
                
            }
            if(b4.isTouching(bWhite)&&bWhite.bounceOff(b4)){
                bWhite.shapeColor="yellow";
                bWhite.velocityX=0;
                bWhite.velocityY=0;
                music.stop();
            }
                  //if(bWhite.bounceOff(edges)){
                  
                  //}
          
            drawSprites();
           
   
}



