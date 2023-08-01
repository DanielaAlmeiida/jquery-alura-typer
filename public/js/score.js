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
}

function removeScore() {
    $('.remove-button').click(function(event){
        event.preventDefault();
        $(this).closest('tr').remove();
    })
}
