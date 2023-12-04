function getcomputerchoice(){
  let rpschoice = ['Rock','Paper','Scissors']
  let computerchoice = rpschoice[Math.floor(Math.random() *  3)]
  return computerchoice
}

function getresult(playerchoice,computerchoice){
  let score;
  
  if(playerchoice == computerchoice){
    score = 0
  }else if(playerchoice == "Rock" && computerchoice == "Scissors"){
    score = 1
  }else if(playerchoice == "Paper" && computerchoice == "Rock"){
    score = 1
  }else if(playerchoice == "Scissors" && computerchoice == "Paper"){
    score = 1
  }else{
    score = -1
  }
  return score
}

function showresult(score,playerchoice,computerchoice){

  const result = document.getElementById('result')
  switch (score){
    case -1: 
      result.innerText = `You Lose`
      break;
    case 0:
      result.innerText = `It's a DraW!`
      break;
    case 1:
      result.innerText = `You Win!`
  }
  let playerscore =  document.getElementById('player-score')
  let hands = document.getElementById('hands')
  let yourscore = document.getElementById("your-score")
  yourscore.innerText = 'your score'
  playerscore.innerText =  `${Number(playerscore.innerText) + score}`
  hands.innerText = `👱 ${playerchoice} vs 🤖 ${computerchoice}`
}

function onclickrps(playerchoice){
  const computerchoice = getcomputerchoice()
  const score = getresult(playerchoice,computerchoice)
  showresult(score,playerchoice,computerchoice)
  
}
function playgame(){
  const rpsbutton = document.querySelectorAll('.rpsButton')
  rpsbutton[0].onclick = () => rpsbutton[0].value

rpsbutton.forEach(rpsbutton => {
  rpsbutton.onclick = () =>onclickrps(rpsbutton.value)
})
  let endgamebutton = document.getElementById('endGameButton')
  endgamebutton.onclick = () => endGame()

}

function endGame(){
  let playerscore = document.getElementById('player-score')
  let hands = document.getElementById('hands')
  let result = document.getElementById('result') 
  let yourscore = document.getElementById("your-score")
  playerscore.innerText = ''
  hands.innerText = ''
  result.innerText = ''
  yourscore.innerText =''
}
playgame()