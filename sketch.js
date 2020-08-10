var plinkos=[];
var divisions=[];
var particle=[];

const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var ground;
var divisionHeight=300;

function setup() {
  createCanvas(480,800);
  engine=Engine.create();
  world=engine.world;
  ground=new Ground(240,800,480,20);

  //divisions
  for(var k=0;k<=width;k=k+80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
  }

  //plinkos row1
  for(var j=40;j<=width;j=j+50){
    plinkos.push(new Plinko(j,75,10));
  }
  //plinkos row2
  for(var j=15;j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,175,10));
  }
  //plinkos row3
  for(var j=40;j<=width;j=j+50){
    plinkos.push(new Plinko(j,275,10));
  }
  //plinkos row4
  for(var j=15;j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,375,10))
  }
  //particles
  //for(var p=0;p<=10;p=p++){
   // particle.push(new Particle(random(100,300),375,10))
  //}
   // particle=new Particle(240,400,10)
  
    
  
}
  
 

function draw() {
      background("grey");  
      Engine.update(engine);
      ellipseMode(RADIUS)
      rectMode(CENTER)

      ground.display();

      //display divisions
      for(var i=0;i<divisions.length;i++){
        divisions[i].display();
      }
      //display plinkos 
      for(var i=0;i<plinkos.length;i++){
        plinkos[i].display();
      }
      //display particles
     // for(var i=0;i<particle.length;i++){
       // particle[i].display();
      //}
      if(frameCount%60===0){
        particle.push(new Particle(random(width/2-30, width/2+30), 10,10));
      }
      
  for (var j = 0; j < particle.length; j++) {
   
    particle[j].display();
  }
     
     
      
      }
    

  