const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground, block8, block9, block10, block11, block12, block13, block14, block15, block16, polygon, slingShot;

function preload() {
    this.polygon = loadImage("sprites/polygon.png");
}

function setup() {
    createCanvas(1600,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,400,1200,20);

    polygon = new Polygon(200,30,40);

    //level two
    block8 = new Block(330,235,30,40);
    block9 = new Block(360,235,30,40);
    block10 = new Block(390,235,30,40);
    block11 = new Block(420,235,30,40);
    block12 = new Block(450,235,30,40);
    //level three
    block13 = new Block(360,195,30,40);
    block14 = new Block(390,195,30,40);
    block15 = new Block(420,195,30,40);
    //top
    block16 = new Block(390,155,30,40);

    //polygon holder with slings
    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);

    slingShot = new SlingShot(this.polygon,{x:100,y:200});
}

function draw() {
    background(0);
    noStroke();
    textSize(35);
    fill("white");
    text("SCORE : " + score, 750, 40);
    Engine.update(engine);

    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    polygon.display();
    ground.display();
    slingShot.display();

    imageMode(CENTRE);
    image(polygon_img, polygon.position.x, polygon.position.y,40,40);
}   

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingShot.fly();
}

function keyPressed() {
	if(keyCode === 32) {
		slingShot.attach(this.polygon);
	}
}

score(){
    if(this.visibility < 0 && this.visiblity > - 105){
        score++;
    }
}