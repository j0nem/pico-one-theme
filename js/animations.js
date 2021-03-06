$(document).ready(function()
{
    setMenuMode();
    smoothAnchorScroll();
    updateContactForm();
    lightboxKeyNavigation();
    toggleMobileMenu();
    setJsMode();
    modifyGoBackLinks();
});
$(window).resize(function(e) 
{
    setMenuMode();
});

$(window).scroll(function(e) 
{
    setMenuMode();
});

function setJsMode() 
{
    $('html').removeClass('no-js');
    $('html').addClass('js');
}

function modifyGoBackLinks() 
{
    if (link = $('.go-back').find('a')) 
    {
        link.attr('href','javascript:history.back()');
    }
}

/** 
 * Smooth scrolling with focus management
 * source: https://css-tricks.com/smooth-scrolling-accessibility/
 */
function smoothAnchorScroll()
{
    $('a[href*="#"]').not('[href="#"]').not('[href*="#lb-"]').not('[href="#mainNav"]').click(function(e) {
        target = $(this.hash);
        if (target.length) {
            e.preventDefault();
            $('html, body').animate(
            {
                scrollTop: target.offset().top
            }, 500, function() 
            {
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) 
                { // check if focussed
                    return false;
                } else 
                {
                    $target.attr('tabindex','-1'); // adding tabindex if not focussable
                    $target.focus(); // try again
                };
            });
            //Change URL
            window.location.hash = target.attr('id');
        }
    });
}

function setMenuMode() 
{
    if($(window).scrollTop() > 300 && $(window).outerWidth() > 739) 
    {
        $('header').addClass('small');
    } else 
    {
        $('header').removeClass('small');
    }
    if($(window).outerWidth() > 739) 
    {
        $('header nav').show();
    }
    else 
    {
        $('header nav').hide();
    }

    //mark the section menu, which is currently mainly in viewport
    $('header nav a').each(function(i) 
    {
        section = $(this.hash);
        
        elTop = (section.offset().top - $(window).scrollTop());
        elBottom = section.offset().top - $(window).scrollTop() + section.height();
        windowMiddle = $(window).height()/2 - 80; //header height = 80px
        
        if (elBottom >= windowMiddle && elTop <= windowMiddle) 
        {
            $(this).addClass('active');
        }
        else 
        {
            $(this).removeClass('active');
        }
    });
}

function toggleMobileMenu()
{
    if ($(window).width() < 740) 
    {
        $('header #nav-toggle').click(function(e) 
        {
            $('header nav').slideToggle(300);
        });
        $('header nav a').click(function(e) 
        {
            $('header nav').slideUp(300);
        });
    }
}

function lightboxKeyNavigation() 
{
    $('.lightbox').keydown(function(e) 
    {
        aPrev = $(this).find('a.prev');
        aNext = $(this).find('a.next');

        if(e.which == 37 && aPrev.attr('href')) 
        {
            location.hash = aPrev.attr('href');
        }
        if(e.which == 39 && aNext.attr('href')) 
        {
            location.hash = aNext.attr('href');
        }
        if(e.which == 27) //esc
        {
            location.hash = '#_';
        } 
    });
}

function updateContactForm() 
{
    $('#p01-contact1').submit(function(e)
    {
        e.preventDefault();
        var form = $(this);
        var post_url = form.attr('action');
        var post_data = form.serialize();
        var button = $(this).find('input[type=submit]');
        button.val('Wird gesendet...');
        button.attr('disabled','disabled');
        $.ajax(
        {
            type: 'POST',
            url: post_url,
            dataType: 'html',
            data: post_data,
            success: function(msg) 
            {
                var result = $('<div />').append(msg).find('#p01-contact1').html();
                $('#p01-contact1').html(result);
                $.each(post_data.split('&'), function (index, elem) 
                {
                    var vals = elem.split('=');
                    $("[name='" + decodeURIComponent(vals[0]) + "']").val(decodeURIComponent(vals[1].replace(/\+/g, ' ')));
                    console.log(vals);
                });
            }
        });
    });
}

