function moveToSelected(element) {

    if (element == "next") {
        var selected = $(".selected").next();
    } else if (element == "prev") {
        var selected = $(".selected").prev();
    } else {
        var selected = element;
    }

    var next = $(selected).next();
    var prev = $(selected).prev();
    var prevSecond = $(prev).prev();
    var nextSecond = $(next).next();

    $(selected).removeClass().addClass("selected");

    $(prev).removeClass().addClass("prev");
    $(next).removeClass().addClass("next");

    $(nextSecond).removeClass().addClass("nextRightSecond");
    $(prevSecond).removeClass().addClass("prevLeftSecond");

    $(nextSecond).nextAll().removeClass().addClass('hideRight');
    $(prevSecond).prevAll().removeClass().addClass('hideLeft');

}

// Eventos teclado
$(document).keydown(function (e) {
    switch (e.which) {
        case 37: // left
            moveToSelected('prev');
            break;

        case 39: // right
            moveToSelected('next');
            break;

        default:
            return;
    }
    e.preventDefault();
});

$('#carousel div').click(function () {
    moveToSelected($(this));
});

$('#prev').click(function () {
    moveToSelected('prev');
});

$('#next').click(function () {
    moveToSelected('next');
});



$('#sackboy').on('click', function(){
    $('body').css('background-image', 'url(./assets/images/bg-sackboy.png)');
});

$('#spider-man').on('click', function(){
    $('body').css('background-image', 'url(./assets/images/bg-spider-man.png)');
});

$('#demons-souls').on('click', function(){
    $('body').css('background-image', 'url(./assets/images/bg-demons-souls.png)');
});

$('#dirt-5').on('click', function(){
    $('body').css('background-image', 'url(./assets/images/bg-dirt-5.png)');
});

$('#yakuza').on('click', function(){
    $('body').css('background-image', 'url(./assets/images/bg-yakuza.png)');
});

$('#XIII').on('click', function(){
    $('body').css('background-image', 'url(./assets/images/bg-XIII.png)');
});

$('#watch-dogs').on('click', function(){
    $('body').css('background-image', 'url(./assets/images/bg-watch-dogs.png)');
});