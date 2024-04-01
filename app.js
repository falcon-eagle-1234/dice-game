// Тоглогчийн ээлжийг хадгалах хувьсагч
var activePlayer   = 1;


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

    // alert('Shoo buulaa : ' + diceNumber)
});

// document.querySelector('.btn-roll').addEventListener("click", shooShid);
// function shooShid(){
//     var diceNumber = Math.floor(Math.random() * 6) +1;
//     alert('Shoo buulaa : ' + diceNumber)
// }
// console.log('Шоо :' + diceNumber);