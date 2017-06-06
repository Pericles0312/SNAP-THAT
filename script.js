// Stop browser scrolling
document.body.addEventListener("touchmove",function(event){event.preventDefault();                                      });
  
  //Test if script.js is working
// alert("Hello World!");

// Define images to use
var imgArray = ["https://aidanjmcquade.files.wordpress.com/2014/05/julius_caesar.jpg","http://nogoodreason.typepad.co.uk/photos/uncategorized/2008/02/04/cicero_2.jpg","http://media-2.web.britannica.com/eb-media/21/x13421-004-A2A61DF4.jpg.pagespeed.ic.noDAbG1vB3.jpg","http://blog.iese.edu/leggett/files/2012/10/Caesar-augustus1.jpg","http://media-1.web.britannica.com/eb-media/63/38563-004-BCCB8251.jpg"];

// Create variables for random numbers
var num1;
var num2;

//Create object for Player 1
var player1 = {
  score: 0,
  id: 1,
};

//Create object for Player 2
var player2 = {
  score: 0,
  id: 2,
};

//Create snapMade variable
var snapMade = "NO";

//Use jQuery 'click' function so hi starts play

$("h1").click(function() {
  //Run play function
  play();
  //Use jQuery 'hide' function to hide h1 when it has been pressed
  $("h1").hide();
  //Use jQuery 'show' function to show 'p's when play is started
  $("p").show()
});

//Create variables for canvas 1&2
var canvas1 = document.getElementById("1");
var canvas2 = document.getElementById("2");

//Create event listeners for canvas 1 & 2
canvas1.addEventListener("touchstart",playTouch1);
canvas2.addEventListener("touchstart",playTouch2);

//User clicks canvas1
function playTouch1(){
  //Test touch is registered
  //alert("Player 1 Touch!");
  //Run snapCheck to see if there is a snap!
  if (snapMade == "NO") {
    snapCheck(player1);
  }
}

//User clicks canvas2
function playTouch2(){
  //Test touch is registered
  //alert("Player 2 Touch!");
  //Run snapCheck to see if there is a snap!
  if (snapMade == "NO") {
    snapCheck(player2);
  }
}

//Create play function
function play() {
  
  // Check is there a winner??
  if (isTheWinner(player1) || isTheWinner(player2)) {
    return
  } else {
  
  //Reset snapMade
  snapMade = "NO";
  
  //Randomly change number
num1 = Math.floor(Math.random()*imgArray.length);
num2 = Math.floor(Math.random()*imgArray.length);

  //Test random numbers
//console.log("First random number is "+num1);
//console.log("Second random number is "+num2);

  //Create image variables
var img1 = imgArray[num1];
var img2 = imgArray[num2];

//Create css value for background image
var url1 = "url("+ img1 +")";
var url2 = "url("+ img2 +")";

//Use jQuery to change css background image of canvas 1 and 2
$("canvas#1").css("background-image",url1);
$("canvas#2").css("background-image",url2);

  //Repeat loop every 2000 milliseconds
  setTimeout(play, 2000);
  
  //Reset player p backgrounds
  $("p").css("background", "yellow");

  } //isTheWinner logic ends here 
}//play function ends here 

//Find out if there was a snap
function snapCheck(player){
  if (num1 == num2){
    //Images matc! Snap!
    //alert("SNAP!");
    //Player gains 1 point
    player.score++;
    //Update player score
    $("span#score"+player.id).html(player.score);
    //Highlight player won!
    $("p#player"+player.id).css("background","LightGreen");
    //Snap Made!
    snapMade = "YES";
  } else {
    //Images do not match!
    //alert("NO SNAP!");
    //Players loses 1 point
    player.score--;
    //Update player score
    $("span#score"+player.id).html(player.score);
    //Highlight player lost a point
    $("p#player"+player.id).css("background","DeepPink");
  }
}

// Has a player won?
function isTheWinner(player) {
  //If player reaches a score of 5 points they win!!
  if(player.score ==2) {
    $("p").hide();
    $("h1").html("PLAYER " + player.id + " WINS!");
    $("h1").show();
    //Tell play function there is a winner!
    return true
  }
  
  // Tell play function there is no winner
  return false
}
