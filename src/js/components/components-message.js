// COMPONENTS
// message
// ------------------





(function ()
{

    // MNG - CLOSE
    // =================================================
    $('.message__close').on('click', function ()
    {
        $(this).closest('.message').removeClass('is-view');
    });


    // MNG - VIEW
    // =================================================
    $('input:submit').on('click', function ()
    {
        $('.message').addClass('is-view');
    });

})();