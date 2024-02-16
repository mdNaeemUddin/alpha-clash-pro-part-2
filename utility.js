




function playNow() {
    addElement('play-now');
    removeElement('play-ground');
    addElement('final-score');

    setTextElementById('current-life', 5);
    setTextElementById('current-score', 0);
    continueGame();
}

function gameOver() {
    addElement('play-ground');
    removeElement('final-score');

    const lastScore = getTextElementValue('current-score');
    setTextElementById('game-score', lastScore);

    const currentAlphabet = getElementTextById('char');  
    removeBackgroundColor(currentAlphabet);

}