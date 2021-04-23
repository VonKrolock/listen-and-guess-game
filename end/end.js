const recentScore = localStorage.getItem('recentScore');
const message = document.querySelector('.message');
let finalScore = document.querySelector('.final_result');
finalScore.innerText = `${recentScore}`;
if(recentScore <= 50){
  message.innerText = "You've failed! Try harder"
  finalScore.style.backgroundImage = "linear-gradient(#912e27d3,#db5230f1)";
}
else if(recentScore > 50 && recentScore <=75){
  message.innerText = "Not bad! Try again"
  finalScore.style.backgroundImage = "linear-gradient(#beb535d3,#e7dc3df1)";
}
else{
  message.innerText = "Wow! You are real English master"
  finalScore.style.backgroundImage =  "linear-gradient(#1f5a2cde,#20b440de)";
}