// TOOLS
// form - validation
// ------------------




// FORM - VALIDATE JS
// =================================================
// https://jqueryvalidation.org/

// VALIDATE JS - MESSAGES
var field_message_required  = "This field is required",
    field_message_letter    = "Please enter only letters",
    field_message_lenghtTlf = "The phone must have 9 digits",
    field_message_novalid   = "Please enter other social media, it is already in use";


jQuery.validator.addMethod(
    "letter",
    function (value, element)
    {
        return this.optional(element) || /^[a-zA-Z\s]*$/.test(value);
    },
    field_message_letter
);


jQuery.validator.addMethod(
    "lengthTlf",
    function (value, element)
    {
        return this.optional(element) || /^[0-9]{9}$/.test(value);
    },
    field_message_lenghtTlf
);