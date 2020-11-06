const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1100,500);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(550,300,90,90);
    box2 = new Box(590,100,90,90);
    box3 = new Box(590,100,90,90);
    box4 = new Box(590,100,90,90);
    box5 = new Box(590,100,90,90);
    ground = new Ground(550,height,1100,20);
    pig1 = new Pig(550, 300);
    //pig2 = new Pig(640, 300);
    //bird = new Bird(100, 100);
    log1 = new Log(550, 250, 200, 40, PI/2 );
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    //pig2.display();
    //bird.display();
    log1.display();
}