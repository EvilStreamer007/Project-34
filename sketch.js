
//Create variables here
var Dog;
var Dog_img;
var HappyDog;
var Happydog_img;

var Food;
var Foodstock;

var Database;

var score;

function preload(){
  //load images here
  Dog_img = loadImage("images/dogImg.png");
  Happydog_img = loadImage("images/dogImg1.png");

  Database = firebase.database();
  
  Foodstock = Database.ref("Food");
  Foodstock.on("value",readstock);
}

function setup() {
	createCanvas(500, 500);
  
  Dog = createSprite(250,200,5,5);
  Dog.addImage(Dog_img);
  Dog.scale = 0.2;
}


function draw() {  
  background(46,139,87);

  score = 1;

  if(keyWentDown(UP_ARROW)){
      writestock(food);
      Dog.addImage(Happydog_img);
  }

  drawSprites();
  //add styles here
    fill("cyan");
    //add font size
    text("Score: "+score,230,70);
}

function readstock(data){
    food = data.val();
}
function writestock(x){

    if(x <= 0){
       x = 0;
    }else{
      x = x-1;
    }

    Database.ref('/').update({
      Food:x
    })
}


