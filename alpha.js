// function play() {
//     const playNow = document.getElementById("play-now");
//     playNow.classList.add('hidden');

//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden');
    
// }


function addElement(elementId) {
    const item = document.getElementById(elementId);
    item.classList.add('hidden');
}

function removeElement(elementId) {
    const item = document.getElementById(elementId);
    item.classList.remove('hidden');
}

function continueGame() {
    const alphabet = randomCharacter();

    const character = document.getElementById('char');
    character.innerText = alphabet;

    setBackground(alphabet);
    

}

function setBackground(elementId) {
    const bg = document.getElementById(elementId);
    bg.classList.add('bg-orange-400');
}

function randomCharacter() {
    const alphabetString = "abcdefghijklmnopqrstuvwxyz";
    alphabetString.toUpperCase();

    const alphabetArray = alphabetString.split('');
    const index = Math.round(Math.random() * 25);
    const ch = alphabetArray[index];
    
    return ch;
}

