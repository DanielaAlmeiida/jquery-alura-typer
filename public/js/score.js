function insertScore() {
    var username = $('#username').val();
    var amountOfWords = $('#word-counter').text();
    var amountOfCharacters = $('#character-counter').text();

    var line = `
        <tr>
            <td>${username}</td>
            <td>${amountOfWords}</td>
            <td>${amountOfCharacters}</td>
            <td>
                <a href="#" class="remove-button">
                    <i class="xsmall material-icons delete-icon">delete</i>
                </a>
            </td>
        </tr>
    `;

    $('#tableBody').prepend(line);
    removeScore();
    $('.score-record').slideDown(500);
    scrollScoreRecord();

}

function removeScore() {
    $('.remove-button').click(function(event){
        event.preventDefault();

        var line = $(this).closest('tr');
        line.fadeOut(400);
        setTimeout(() => {line.remove();}, 400)
    })
}

function scrollScoreRecord() {
    var scoreRecordPosition = $('.score-record').offset().top;

    $("html, body").animate(
    {
        scrollTop: scoreRecordPosition
    }, 1000);
}