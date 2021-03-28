// COMPONENTS
// FORM - VALIDATION
// =================================================
// https://jqueryvalidation.org/





// VALIDATE JS - MESSAGES
// ------------------
var field_message_required  = "This field is required",
	field_message_letter    = "Please enter only letters",
	field_message_lenghtTlf = "The phone must have 9 digits",
	field_message_novalid   = "Please enter other social media, it is already in use";





// VALIDATE JS - letter
// ------------------
jQuery.validator.addMethod(
	"letter",
	function (value, element) {
		return this.optional(element) || /^[a-zA-Z\s]*$/.test(value);
	},
	field_message_letter
);





// VALIDATE JS - lengthTlf
// ------------------
jQuery.validator.addMethod(
	"lengthTlf",
	function (value, element) {
		return this.optional(element) || /^[0-9]{9}$/.test(value);
	},
	field_message_lenghtTlf
);





// VALIDATE JS - SETTINGS
// ------------------
var validateSettings = {
    errorPlacement: function (error, element) {
        if (element.is(":checkbox")) {
            error.appendTo(
                element.closest(".form__item")
            );
        } else if (element.is(":radio")) {
            error.appendTo(
                element.closest(".form__item")
            );
        } else if (element.is("select")) {
            error.appendTo(
                element.closest(".select__wrapper")
            );
        } else {
            error.insertAfter(element);
        }
    },
    onkeyup: function (element) {
        this.element(element);
    },
    onfocusout: function (element) {
        this.element(element);
    }
};

jQuery.validator.setDefaults(validateSettings);