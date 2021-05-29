$(document).ready( function() {

    $('.burger').click( function(event) {
        $('.nav__menu, .burger').toggleClass('active');
        $('body').toggleClass('no-scroll');
    });

});