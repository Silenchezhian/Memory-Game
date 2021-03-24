// global constants
const cluePauseTime = 333;
const nextClueWaitTime = 1000;

//Global Variables
var clueHoldTime = 1000;
var pattern = []
var progress = 0;                            
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var mistakeCounter = 0;

function generatePattern(){
  var pattern = []; 
  for(let i = 0; i <= 7; i++){
    pattern[i] = Math.floor(Math.random() * Math.floor(6)) +  1; //generates a random integer between 1 and 6
  }
  return pattern
}

function startGame(){
    //initialize game variables
    progress = 0;
    guessCounter = 0;
    mistakeCounter = 0;
    gamePlaying = true;
  pattern = generatePattern();
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame(){
  gamePlaying = false;
  
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 350,
  2: 250,
  3: 450,
  4: 650,
  5: 850,
  6: 550
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}

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

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  var guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
    clueHoldTime-=2;
  }
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Game over. You won!");
}



function guess(btn){
  console.log("user guessed: " + btn);
  
  if(!gamePlaying){
    return;
  }

  //add game logic here
  if(btn == pattern[guessCounter]){
    if(guessCounter == progress){
      if(progress == (pattern.length - 1)){
        winGame();
      } else {
        progress++;
        guessCounter=0;
        playClueSequence();
      }
    } else {
      guessCounter++;
    }
  } else {
    if(mistakeCounter < 2){
      var triesLeft = 2 - mistakeCounter;
      alert('You made a mistake! You have ' + triesLeft +' tries left')
      mistakeCounter++;
      guessCounter=0;
      playClueSequence();
    } else{
      loseGame();
    }
  }   

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
