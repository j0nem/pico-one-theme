// Smooth scrolling with focus management
// source: https://css-tricks.com/smooth-scrolling-accessibility/

$('a[href*="#"]').not('[href="#"]').click(function(e) {
    target = $(this.hash);
    if (target.length) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 500, function() {
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // check if focussed
                return false;
              } else {
                $target.attr('tabindex','-1'); // adding tabindex if not focussable
                $target.focus(); // try again
              };
        });
        //Change URL
        window.location.hash = target.attr('id');
    }
});

$(document).ready(function(){
    setMenuMode();
});

$(window).scroll(function(e) {
    setMenuMode();
});

function setMenuMode() {
    if($(window).scrollTop() > 300) {
        $('header').addClass('small');
    } else {
        $('header').removeClass('small');
    }
    //mark the section menu, which is currently mainly in viewport
    console.clear();
    $('header nav a').each(function(i) {
        section = $(this.hash);
        
        elTop = (section.offset().top - $(window).scrollTop());
        elBottom = section.offset().top - $(window).scrollTop() + section.height();
        windowMiddle = $(window).height()/2;
        
        if (elBottom > windowMiddle && elTop <= windowMiddle) {
            $(this).addClass('active');
        }
        else {
            $(this).removeClass('active');
        }
    });

}