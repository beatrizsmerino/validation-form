// TOOLS
// form - required
// ------------------





function formFieldRequired() {
	let required = "<span class='c-required'>*</span>";

	// form field
	$(".c-form__field[required]").closest(".c-form__item").find(".c-label").append(required);

	// check list
	$(".c-check__input[required]").closest(".c-check").find(".c-check__label").append(required);
	$(".c-form__list .c-check__input[required]").closest(".c-form__item").find(".c-label").append(required);
	$(".c-form__list .c-check__label").find(".c-required").remove();
}