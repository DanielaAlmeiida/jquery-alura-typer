var textField = $('#text-field');
var initialTime = $('#typing-time').text();
var restartButton = $('#restart-button');

$(function() {
    updatePhraseLength();
    startCounters();
    startChronometer();
    borderControl();
    removeScore();
    restartButton.click(restartGame);
});
