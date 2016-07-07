$(document).ready(function() {
    $('header .menu a').each(function() {
        if ($(this).attr('href')==document.location.pathname) { 
            $(this).addClass('active');
        }
    });
})