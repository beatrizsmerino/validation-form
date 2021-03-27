// TOOLS
// form - required
// ------------------





function formFieldRequired() {
	let required = "<span class='required'>*</span>";

	// form field
	$(".form__field[required]").closest(".form__item").find(".label").append(required);

	// check list
	$(".check__input[required]").closest(".check").find(".check__label").append(required);
	$(".form__list .check__input[required]").closest(".form__item").find(".label").append(required);
	$(".form__list .check__label").find(".required").remove();
}