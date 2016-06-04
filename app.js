/* TEMPORARY WE SHOULD SUB THIS OUT WITH SOMETHING MODERN */
(function($){
    $('#500').show();

    $('.roomSelection').click(function(evt){
        $('.room').hide();
        var id = '#' + evt.target.dataset.room;
        $(id).show();
    });
})($);
