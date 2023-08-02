function borderControl() {
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

$('#score-record-button').click(showScoreRecord);

function showScoreRecord() {
    $('.score-record').stop().slideToggle(600);
}