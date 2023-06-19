let checkNum = document.querySelector('input')
let btn = document.getElementsByClassName('check')
let chance = document.getElementsByClassName('chance')
let score = document.getElementsByClassName('score')
let update = document.getElementsByClassName('guess')
let randomnumber = Math.floor(Math.random() * 100);
let count = 100;

function callme() {
    if (randomnumber < parseInt(checkNum.value)) {
        update[0].innerHTML = 'Your Guess Is High'
        count--;
        chance[0].innerHTML = `💯 Chances:${count}`;
    } else if (randomnumber > parseInt(checkNum.value)) {
        update[0].innerHTML = 'Your Guess Is Low'
        count--;
        chance[0].innerHTML = `💯 Chances:${count}`;
    } else {
        update[0].innerHTMLs = randomnumber;
        count--
        score[0].innerHTML = `Highest Score : ${count}`
    }

}

let chance2 = document.getElementsByClassName('play')


function tryagain() {
    document.body.style.backgroundColor = "#222";
    document.getElementById('name').value = "";
    document.querySelector('#chance1').innerHTML = '💯 Chances:100'
    document.querySelector('#score1').innerHTML = '🥇 Highscore:0'
    document.querySelector('#guess1').innerHTML = 'Start Guessing...'
}