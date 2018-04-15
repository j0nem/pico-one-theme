$(document).ready(function(){
    setMenuMode();
    smoothAnchorScroll();
    updateContactForm();
});

$(window).scroll(function(e) {
    setMenuMode();
});

/** 
 * Smooth scrolling with focus management
 * source: https://css-tricks.com/smooth-scrolling-accessibility/
 */
function smoothAnchorScroll() {
    $('a[href*="#"]').not('[href="#"]').not('[href*="#lb-"]').click(function(e) {
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
}

function setMenuMode() {
    if($(window).scrollTop() > 300) {
        $('header').addClass('small');
    } else {
        $('header').removeClass('small');
    }
    //mark the section menu, which is currently mainly in viewport
    $('header nav a').each(function(i) {
        section = $(this.hash);
        
        elTop = (section.offset().top - $(window).scrollTop());
        elBottom = section.offset().top - $(window).scrollTop() + section.height();
        windowMiddle = $(window).height()/2 - 80; //header height = 80px
        
        if (elBottom >= windowMiddle && elTop <= windowMiddle) {
            $(this).addClass('active');
        }
        else {
            $(this).removeClass('active');
        }
    });
}

function updateContactForm() {
    $('#p01-contact1').submit(function(e){
        e.preventDefault();
        var form = $(this);
        var post_url = form.attr('action');
        var post_data = form.serialize();
        var button = $(this).find('input[type=submit]');
        button.val('Wird gesendet...');
        button.attr('disabled','disabled');
        $.ajax({
            type: 'POST',
            url: post_url,
            dataType: 'html',
            data: post_data,
            success: function(msg) {
                var result = $('<div />').append(msg).find('#p01-contact1').html();
                $('#p01-contact1').html(result);
                $.each(post_data.split('&'), function (index, elem) {
                    var vals = elem.split('=');
                    $("[name='" + decodeURIComponent(vals[0]) + "']").val(decodeURIComponent(vals[1].replace(/\+/g, ' ')));
                    console.log(vals);
                });
            }
        });
    });
}

