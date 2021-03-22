
// global constants
//const clueHoldTime = 1000; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern = new Array(8);
var randInt = -1;
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = 0;

// code from developer.mozilla.org 
// returns a number from 1 - max inclusive 
function getRandomInt(max){
  return Math.floor(Math.random() * Math.floor(max)) + 1;
}

function newPattern(){
  for(let i=0;i< pattern.length;i++){
    randInt = getRandomInt(5); // generate a random number 
    console.log("the random number is " + randInt)
    pattern[i] = randInt; // insert number into pattern array 
  }
}

function startGame(){
  //initialize game variables
  progress = 0;
  gamePlaying = true;
  clueHoldTime = 1000;
  newPattern();
    
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence()
}

function stopGame(){
  gamePlaying = false;
  // swap the Start and Stop buttons, the start button should appear
  // the stop button should be hidden 
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

// Sound Synthesis Functions
// changing these numbers will change the pitch 
const freqMap = {
  1: 233.08, // b flat 
  2: 261.63, // c 
  3: 293.66, // d 
  4: 311.13, // e flat 
  5: 349.23 // f 
}
/* takes a button number (1 through 4) and a length of time in milliseconds 
calling this function plays a tone for the amount of time specified */
function playTone(btn,len){
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
/* once you call startTone the tone will continue playing 
until you call stopTone */
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

// functions for lighting or clearing a button
function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

// function for playing a single clue
function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

// plays a sequence of clues, following a pattern from array 
function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
    // decrease the clueHoldTime 
    clueHoldTime -= 14;
    console.log("clueHoldTime = " + clueHoldTime)
  }
}
// pop up dialog box 
function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}
// pop up dialog box 
function winGame(){
  stopGame();
  alert("Game Over. You Won!! !! !!");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  // add game logic here
  // if user guess was incorrect end game 
  if(btn != pattern[guessCounter]){
    loseGame();
  }
  // if the guess was correct
  else{
    // two cases: middle of a turn or turn is over 
    //turn is over we need a bigger pattern sequence 
    if(guessCounter == progress){
      // check is this the last round 
      if(progress == pattern.length - 1){
        winGame();
      }
      else{
        progress++;
        playClueSequence();
      }
    }
    // if guessCounter is less than progress 
    else{
      guessCounter ++;
    }
  }
}
