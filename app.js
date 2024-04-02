// Тоглогчийн ээлжийг хадгалах хувьсагч
var activePlayer   = 0;


// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];


// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;


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

var diceDom = document.querySelector(".dice");

// document.querySelector('.dice').style.display = "none";

diceDom.style.display = "none";

document.querySelector('.btn-roll').addEventListener("click",function shooShid(){
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

    // alert('Shoo buulaa : ' + diceNumber)
});


document.querySelector('.btn-hold').addEventListener("click", function(){



    scores[activePlayer] = scores[activePlayer] + roundScore

    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

    if(scores[activePlayer] >= 100){

        document.getElementById("name-" + activePlayer).textContent = "WINNER !!!"

        document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
        
        document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
    }else{

        nextswitchPlayer();

    }

    

    // roundScore = 0;

    // document.getElementById('current-' + activePlayer).textContent = "0";

    

})


function nextswitchPlayer(){
    roundScore = 0;

    document.getElementById('current-' + activePlayer).textContent = 0;

    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');


    diceDom.style.display = "none";

}


// document.querySelector('.btn-roll').addEventListener("click", shooShid);
// function shooShid(){
//     var diceNumber = Math.floor(Math.random() * 6) +1;
//     alert('Shoo buulaa : ' + diceNumber)
// }
// console.log('Шоо :' + diceNumber);


document.querySelector('btn-new')