const choices = ['Rock', 'Paper', 'Scissor'];
const playerdisplay = document.getElementById('playerdisplay');
const computerdisplay = document.getElementById('computerdisplay');
const resultDisplay = document.getElementById('resultdisplay');

function play(playerchoice){
    const computerchoice = choices[Math.floor(Math.random() * choices.length)];
    let result = '';
    if (playerchoice === computerchoice) {
        result = 'IT\'S A TIE!';
    } else if (
        (playerchoice === 'Rock' && computerchoice === 'Scissor') ||
        (playerchoice === 'Paper' && computerchoice === 'Rock') ||
        (playerchoice === 'Scissor' && computerchoice === 'Paper')
    ) {
        result = 'YOU WIN !';
    } else {
        result = 'YOU LOSE !';
    }
    playerdisplay.innerText = `PLAYER : ${playerchoice}`;
    computerdisplay.innerText = `COMPUTER : ${computerchoice}`;
    resultDisplay.innerText = result;
}