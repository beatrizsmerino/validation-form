// COMPONENTS
// FORM - VALIDATION
// =================================================
// https://jqueryvalidation.org/

/* global fieldMessageLetter, fieldMessageLengthTlf */

// VALIDATE JS - letter
// ------------------
jQuery.validator.addMethod(
	"letter",
	function(value, element) {
		return this.optional(element) || (/^[a-zA-Z\s]*$/u).test(value);
	},
	fieldMessageLetter,
);

// VALIDATE JS - lengthTlf
// ------------------
jQuery.validator.addMethod(
	"lengthTlf",
	function(value, element) {
		return this.optional(element) || (/^[0-9]{9}$/u).test(value);
	},
	fieldMessageLengthTlf,
);

// VALIDATE JS - SETTINGS
// ------------------
const validateSettings = {
	"highlight"(element) {
		$(element).attr("aria-invalid", "true");

		$(element).addClass("error");
		if ($(element).is(":radio")) {
			$(`input[name="${$(element).attr("name")}"]`).addClass("error");
		}
	},
	"unhighlight"(element) {
		$(element).attr("aria-invalid", "false");
		$(element).removeAttr("aria-describedby");

		$(element).removeClass("error");
		if ($(element).is(":radio")) {
			$(`input[name="${$(element).attr("name")}"]`).removeClass("error");
		}
	},
	"errorPlacement"(error, element) {
		const errorId = `${element.attr("id")}-error`;
		error.attr("id", errorId);
		error.attr("role", "alert");
		element.attr("aria-describedby", errorId);

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
	"onkeyup"(element) {
		this.element(element);
	},
	"onfocusout"(element) {
		this.element(element);
	},
};

jQuery.validator.setDefaults(validateSettings);
