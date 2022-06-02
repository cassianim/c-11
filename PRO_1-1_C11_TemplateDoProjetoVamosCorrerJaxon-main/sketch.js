var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;


function preload(){
pathImg = loadImage("path.png");
boyImg = loadAnimation("Runner-1.png","Runner-2.png");

}

function setup(){
 createCanvas(400,400);

 
 
// Movendo o fundo 
 path = createSprite(200,200,10,10);

 path.velocityY = 1;
 path.scale=1.2
;
 path.addImage(pathImg)
 
//Criando menino que corre 
boy = createSprite(180,340,30,30)
boy.addAnimation('JakeRunning',boyImg)
boy.scale = 0.08



// Criando Boundary (Limite) esquerdo  
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;

rightBoundary=createSprite(0,0,100,800);
rightBoundary.visible = false;

//Crie Boundary direito 

}


function draw() {
background(150,150,150);
path.velocityY = 4;
if (path.y>400) {
    path.y = height/2
}
// Menino se movendo no eixo X com o mouse
edges= createEdgeSprites();
boy.collide(edges[3]);
boy.x = mouseX
boy.collide(leftBoundary)
boy.collide(rightBoundary)
drawSprites();
}




