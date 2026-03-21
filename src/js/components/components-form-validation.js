// COMPONENTS
// FORM - VALIDATION
// =================================================
// https://jqueryvalidation.org/

/* global fieldMessageLetter, fieldMessageLengthTlf */

// VALIDATE JS - letter
// ------------------
jQuery.validator.addMethod(
	"letter",
	function (value, element) {
		return this.optional(element) || /^[a-zA-Z\s]*$/u.test(value);
	},
	fieldMessageLetter,
);

// VALIDATE JS - lengthTlf
// ------------------
jQuery.validator.addMethod(
	"lengthTlf",
	function (value, element) {
		return this.optional(element) || /^[0-9]{9}$/u.test(value);
	},
	fieldMessageLengthTlf,
);

// VALIDATE JS - SETTINGS
// ------------------
var validateSettings = {
	errorPlacement: function (error, element) {
		if (element.is(":checkbox")) {
			error.appendTo(element.closest(".form__item"));
		} else if (element.is(":radio")) {
			error.appendTo(element.closest(".form__item"));
		} else if (element.is("select")) {
			error.appendTo(element.closest(".field-select__wrapper"));
		} else {
			error.insertAfter(element);
		}
	},
	onkeyup: function (element) {
		this.element(element);
	},
	onfocusout: function (element) {
		this.element(element);
	},
};

jQuery.validator.setDefaults(validateSettings);
