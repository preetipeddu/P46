var question1, question2;
var database;
var gameState = 0;
var game;
var allPlayers;
var form;
var playerCount;
var player;
var backgroundImage;

function preload(){
   backgroundImage = loadImage("background.jpg");
}

function setup(){
 createCanvas(displayWidth, displayHeight);
 database = firebase.database();
 game = new Game;
 game.getGameState();
 game.start();
}

function draw(){
 background(backgroundImage);
 if(playerCount === 2){
    game.update(1);
 }
 if(gameState ===1){
    game.play();
 }
 

 
}