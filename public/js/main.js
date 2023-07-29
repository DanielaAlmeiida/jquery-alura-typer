var text =  $('.text').text();

var textLength = text.split(" ").length;

$('.text-length').text(textLength);



var field = $('.text-field')

field.on("click", function(){
    var text = field.val().trim();
    console.log(text)

    var textLength = text.split(/\S+/).length - 1;
    console.log(textLength)
    console.log("Quantidade de palavras: " + textLength);
    console.log("Quantidade de caracteres: " + text.length);



    $('.word-counter').text(textLength);
    $('.character-counter').text(text.length)

});




















console.log(
    field
)
