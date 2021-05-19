//Create variables here
var dog, happyDog, database, foodS, foodStock;

function preload()
{
	//load images here
  dogImage = loadImage("images/dogImg.png");
  dogImage2 = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);

  dog = createSprite(250,250);
  dog.addImage(dogImage);
  dog.scale=0.1;

  database = firebase.database();

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);

  
}


function draw() {  
  background(46, 139, 87);
  
  textSize(19);
  fill("white");
  text("Note:Press UP_ARROW Key to feed the dog milk",50,20);
  text("The food remaining: " + foodS,150,80);
  //add styles here

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImage2);

}

drawSprites();


}
function readStock(data){
foodS=data.val();

}

function writeStock(x) {

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
database.ref('/').update({
Food:x
})
}

