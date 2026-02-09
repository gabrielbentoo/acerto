const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
let ball;
let groundObj;
let leftSide;
let rightSide;
let world;
let engine;
let radius = 40;

function setup() {
    createCanvas(1600, 700);

    engine = Engine.create();
    world = engine.world;
    rectMode(CENTER);

    let ballOptions = {
        isStatic: false,
        restitution: 0.3,
        friction: 0,
        density: 1.2
    }

    ball = Bodies.circle(260, 100, radius /2, ballOptions);
    World.add(world, ball);

    groundObj = new Ground(width /2, 670, width, 20);
    leftSide = new Ground(1100,600,20,120);
    rightSide = new Ground(1250,600,20,120);
    Engine.run(engine);
}

function draw() {

    background(0);
    ellipse(ball.position.x, ball.position.y, radius, radius);
    groundObj.display();
    leftSide.display();
    rightSide.display();
}

function keyPressed() {

    if(keyCode === UP_ARROW) {
        Matter.Body.applyForce(ball, ball.position, {x: 85, y:-85})
    }
}
