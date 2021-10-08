var canvas, backgroundImage;
var backgroundImage;
var gameState =  0;
var contestantCount;
var allContestants;
var answer;
var database;
var bm;

var question, contestant, quiz;

function preload(){
  backgroundImage = loadImage("bg.png");
  bm = loadSound("mc.mp3");
}

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background(backgroundImage);

  if(!bm.isPlaying()){
    bm.play();
    bm.setVolume(0.3)
  }
  if(contestantCount === 2){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
  }
}
