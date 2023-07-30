var textField = $('#text-field');
var initialTime = $('#typing-time').text();
var restartButton = $('#restart-button');

$(function() {
    updatePhraseLength();
    startCounters();
    startChronometer();
    borderControl();
    restartButton.click(restartGame);
});


function updatePhraseLength() {
    var phrase =  $('#phrase').text();
    var phraseLength = phrase.split(" ").length;
    $('#phrase-length').text(phraseLength);
    $('#character-phrase-length').text(phrase.length);
}


function startCounters() {
    textField.on("input", function(){
        var text = textField.val().trim();
        var textLength = text.split(/\S+/).length - 1;
    
        $('#word-counter').text(textLength);
        $('#character-counter').text(text.length);
    });
}


function startChronometer() {
    var remainingTypingTime = $('#typing-time').text();
    restartButton.attr("disabled", true);

    textField.one("focus", function(){   
        var idChronotemer = setInterval(function(){
            remainingTypingTime--;
            $("#typing-time").text(remainingTypingTime);
            
            if(remainingTypingTime < 1){
                textField.attr("disabled", true);
                clearInterval(idChronotemer);
                restartButton.attr("disabled", false);
            }
    
        }, 1000);
    })
}


function restartGame() {
    textField.attr("disabled", false);
    textField.val("");
    $('#word-counter').text(0);
    $('#character-counter').text(0);
    $('#typing-time').text(initialTime);  
    startChronometer(); 
    textField.removeClass("green-border");
    textField.removeClass("red-border");
}

function borderControl(){
    var phrase = $('#phrase').text();

    textField.on("input", function(){
        var typing = textField.val();

        if(phrase.startsWith(typing)) {
            textField.removeClass("red-border")
            textField.addClass("green-border")
        } else {
            textField.removeClass("green-border")
            textField.addClass("red-border")
        }
    })
}

