// COMPONENTS
// message
// ------------------





(function ()
{

    // MNG - CLOSE
    // =================================================
    $('.c-message__close').on('click', function ()
    {
        $(this).closest('.c-message').removeClass('is-view');
    });


    // MNG - VIEW
    // =================================================
    $('form').submit(function (e)
    {
        e.preventDefault();
    });

    $('input:submit').on('click', function ()
    {
        $('.c-message').addClass('is-view');
    });

})();