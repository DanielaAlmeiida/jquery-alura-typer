var text =  $('.text').text();

var textLength = text.split(" ").length;

$('.text-length').text(textLength);
$('.character-length').text(text.length);

var field = $('.text-field')

field.on("click", function(){
    var text = field.val().trim();
    var textLength = text.split(/\S+/).length - 1;

    $('.word-counter').text(textLength);
    $('.character-counter').text(text.length)

});




















console.log(
    field
)
