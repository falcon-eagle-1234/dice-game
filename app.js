var isGameOver;

var activePlayer;

var scores;

var roundScore;

var diceDom = document.querySelector(".dice");

initGame();
// document.querySelector('.dice').style.display = "none";

function initGame(){

    isNewGame = true;
    // Тоглогчийн ээлжийг хадгалах хувьсагч
activePlayer   = 0;


// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
scores = [0, 0];


// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
roundScore = 0;


// Шооны талуудын оноог random-оор үүсгэнэ.


// var diceNumber = Math.floor(Math.random() * 6) +1;
// window.document.querySelector('#score-0').textContent = dice;
// document.querySelector('#score-1').textContent = dice;
// document.querySelector('#score-1').innerHTML = "<em>Yes ?</em>";
// window.document.querySelector('#score-0').textContent = 0;


window.document.getElementById("score-0").textContent = 0;
window.document.getElementById('score-1').textContent = 0;
window.document.getElementById('current-0').textContent = 0;
window.document.getElementById('current-1').textContent = 0;

document.getElementById('name-0').textContent = "player-1";
document.getElementById('name-1').textContent = "player-2";

document.querySelector('.player-0-panel').classList.remove("winner");
document.querySelector('.player-1-panel').classList.remove("winner");

document.querySelector('.player-0-panel').classList.remove("active");
document.querySelector('.player-1-panel').classList.remove("active");

document.querySelector('.player-0-panel').classList.add("active");

diceDom.style.display = "none";
}



document.querySelector('.btn-roll').addEventListener("click",function(){
    
    if(isNewGame){
        var diceNumber = Math.floor(Math.random() * 6) +1;
    diceDom.style.display = "block";
    diceDom.src ="dice-" + diceNumber + ".png";

    if(diceNumber !== 1){

        roundScore = roundScore + diceNumber
        document.getElementById('current-' + activePlayer).textContent = roundScore;
    }else{

        nextswitchPlayer();


        
        // if(activePlayer === 0){
        //     activePlayer = 1;
        // }else{
        //     activePlayer = 0;
        // }

    }
    }else{
        alert("togloom duuslaa")
    }

    // alert('Shoo buulaa : ' + diceNumber)
});


document.querySelector('.btn-hold').addEventListener("click", function() {

    if(isNewGame){
        scores[activePlayer] = scores[activePlayer] + roundScore

        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
    
        if(scores[activePlayer] >= 10){
    
            isNewGame = false;
    
            document.getElementById("name-" + activePlayer).textContent = "WINNER !!!"
    
            document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
            
            document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
        }else{
    
            nextswitchPlayer();
    
        }
    
        
    
        // roundScore = 0;
    
        // document.getElementById('current-' + activePlayer).textContent = "0";
    
        
    
    }else{
        alert("togloom duustsan bna golgoo")
    }
})


function nextswitchPlayer(){
    roundScore = 0;

    document.getElementById('current-' + activePlayer).textContent = 0;

    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');


    // diceDom.style.display = "none";

}


// document.querySelector('.btn-roll').addEventListener("click", shooShid);
// function shooShid(){
//     var diceNumber = Math.floor(Math.random() * 6) +1;
//     alert('Shoo buulaa : ' + diceNumber)
// }
// console.log('Шоо :' + diceNumber);


document.querySelector('.btn-new').addEventListener('click', initGame)



