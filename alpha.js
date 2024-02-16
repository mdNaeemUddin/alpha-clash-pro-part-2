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

function setBackground(elementId) {
    const bg = document.getElementById(elementId);
    bg.classList.add('bg-orange-400');
}

function removeBackgroundColor(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

function randomCharacter() {
    const alphabetString = "abcdefghijklmnopqrstuvwxyz";
    alphabetString.toUpperCase();

    const alphabetArray = alphabetString.split('');
    const index = Math.round(Math.random() * 25);
    const ch = alphabetArray[index];
    
    return ch;
}

function continueGame() {
    const alphabet = randomCharacter();

    const character = document.getElementById('char');
    character.innerText = alphabet;

    setBackground(alphabet);
    

}


function getTextElementValue(elementId) {
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}

function setTextElementById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;

}

function getElementTextById(elementId) {
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;

}

function handleButton(event) {
    const playerPressed = event.key;
    // console.log('player pressed : ', playerPressed);
    console.log(playerPressed);

    if (playerPressed === 'Enter') {
        gameOver();
    }

    const currentAlphabetElement = document.getElementById('char');
    const currentAlphabet = currentAlphabetElement.innerText;
    
    const expectedAlphabet = currentAlphabet.toLowerCase();

  

    if (playerPressed === expectedAlphabet) {
        // console.log("you get a point");
        removeBackgroundColor(expectedAlphabet);

        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);

        const currentScore = getTextElementValue('current-score');

        const updateScore = currentScore + 1;

        setTextElementById('current-score', updateScore);

        // currentScoreElement.innerText = newScore;

        continueGame();
    } else {

        const currentLife = getTextElementValue('current-life');
        const updated = currentLife - 1;

        setTextElementById('current-life', updated);

       
        if (updated === 0) {
            gameOver();
        }

        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);

        // const newLife = currentLife - 1;
        // currentLifeElement.innerText = newLife;
    }


    // console.log(currentAlphabet.innerText);
}

document.addEventListener('keyup', handleButton);

