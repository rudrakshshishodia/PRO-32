const World= Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var path,canvas;
var block,block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15;
var engine, world;
var polygon,sling;
var img,ground;
var stand,stand1;
var backgroundImg;


    function preload(){
        img = loadImage('polygon.png');
        getbg();
    }

function setup(){
    var canvas=createCanvas(1000,400);
   
    engine = Engine.create();
    world = engine.world;

    ground=new Ground();
    stand= new Stand(390,300,250,10);
    stand1 = new Stand(700,200,200,10);

    //image(img, 0,0);

    //this is for tint blue colour
   // tint(0, 153, 204);
    //image(img, 50, 0);

    

    //path=new Ground(450,390,900,90);
   

    //second layer
    block =new Box(300,275,30,40);

    block1=new Box(330,275,30,40);
    block2=new Box(360,275,30,40);
    block3=new Box(390,275,30,40);
    block4=new Box(420,275,30,40);
    block5=new Box(450,275,30,40);
    blockee=new Box(480,275,30,40);
    //third layer
    
    block6=new Box(330,235,30,40);
    block7=new Box(360,235,30,40);
    block8=new Box(390,235,30,40);
    block9=new Box(420,235,30,40);
    block10=new Box(450,235,30,40);
    block11=new Box(360,195,30,40);
    block12=new Box(390,195,30,40);
    block13=new Box(420,195,30,40);
    block14=new Box(390,155,30,40);


    //first layer
   blox1=new Box(640,175,30,40);
   blox2=new Box(670,175,30,40);
   blox3=new Box(700,175,30,40);
   blox4=new Box(730,175,30,40);
   blox5=new Box(760,175,30,40);
   blox6=new Box(670,135,30,40);
   blox7=new Box(730,135,30,40);
   blox8=new Box(700,175,30,40);
   blox9=new Box(700,95,30,40);


    
    //create polygon object
    polygon=Bodies.circle(50,200,20);
    World.add(world, polygon);

    //this is for slime
    sling =new Slingshot(this.polygon,{x:100,y:200});


    



}

    function draw(){
        //Engine.update(engine);
        if(backgroundImg)
    
    background(backgroundImg);

        text(mouseX+','+mouseY,10,15);
        textSize(20);
        fill("lightyellow");
        text("Draged the stone and release to hit the block",100,30);
        text("Press Space to get the second chance",650,350);
        ground.display();
        stand1.display();
        stand.display();
        strokeWeight(2);
        stroke("yellow");
        fill("blue");
        block1.display();
        block2.display();
        block3.display();
        block4.display();
        block5.display();
        block6.display();
        fill("red");
        block7.display();
        block8.display();
        block9.display();
        block10.display();
        block11.display();
        block12.display();
        fill("green");
        block13.display();
        block14.display();
        fill("white");
        block.display();
        blockee.display();
        sling.display();
        //polygon.display();
        fill("grey");
        blox1.display();
        blox2.display();
        blox3.display();
        blox4.display();
        blox5.display();
        fill("pink");
        blox6.display();
        blox7.display();
        blox8.display();
        fill("gold");
        blox9.display();
        imageMode(CENTER);
        image(img,polygon.position.x,polygon.position.y,40,40);

        
        
    }

    function mouseDragged(){
        Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
    }

    function mouseReleased(){
        sling.fly();
    }

    function keyPressed(){
        if(keyCode === 32){
            Slingshot.attach(this.polygon  );
        }
    }

    async function getbg(){
        var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
        var responsejson = await response.json();
        
    
        var datetime = responsejson.datetime;
        var hour = datetime.slice(11,13);
    
        if (hour>=06 && hour<=18) {
            bg = "blackbackground.png";
        }
    
        else {
            bg="sprites/bg.png";
        }
        backgroundImg=loadImage(bg);
        console.log(backgroundImg)
    } 
