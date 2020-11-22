const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, ground, box2, pig1,box3,box4,box5,pig2,log1,log2,log3,log4,log5,bird;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    box1 = new Box(700,320,70,70,1);
    box2 = new Box(920,320,70,70,1);

    ground = new Ground(600,400,1200,20);
    pig1 = new Pig(810,350);
    log1 = new Log(810,260,300,PI/2);

    box3 = new Box(700,240,70,70,1);
    box4 = new Box(920,240,70,70,1);
    pig2 = new Pig(810,220);
    log2 = new Log(810,180,300,PI/2);

    box5 = new Box(810,160,70,70,5);
    log4 = new Log(760,140,150,PI/4);
    log5 = new Log(870,140,150,-PI/4);

    bird = new Bird(100,100);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log4.display();
    log5.display();
    bird.display();
    
}