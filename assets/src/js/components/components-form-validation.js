// COMPONENTS
// form - validation
// ------------------





// FORM - VALIDATE JS
// =================================================
// https://jqueryvalidation.org/


// VALIDATE JS - SETTINGS
var validateSettings = {
    errorPlacement: function (error, element)
    {
        if (element.is(":checkbox")) {
            error.appendTo(
                element.closest(".c-form__item")
            );
        } else if (element.is(":radio")) {
            error.appendTo(
                element.closest(".c-form__item")
            );
        } else if (element.is("select")) {
            error.appendTo(
                element.closest(".c-select__wrapper")
            );
        } else {
            error.insertAfter(element);
        }
    },
    onkeyup: function (element)
    {
        this.element(element);
    },
    onfocusout: function (element)
    {
        this.element(element);
    }
};

jQuery.validator.setDefaults(validateSettings);