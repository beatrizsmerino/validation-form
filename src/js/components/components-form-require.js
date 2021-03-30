// COMPONENTS
// FORM - REQUIRED
// =================================================





function fieldRequired(requiredAsterisk) {
	$(".form__field[required]")
		.closest(".form__item")
		.find(".label")
		.append(requiredAsterisk);
}





function checkRequired(requiredAsterisk) {
	$(".check__input[required]")
		.closest(".check")
		.find(".check__label")
		.append(requiredAsterisk);
	$(".form__list .check__input[required]")
		.closest(".form__item")
		.find(".label")
		.append(requiredAsterisk);
	$(".form__list .check__label").find(".required").remove();
}





function addAsteriskToFieldsRequired() {
	let requiredAsterisk = "<span class='required'>*</span>";

	fieldRequired(requiredAsterisk);
	checkRequired(requiredAsterisk);
}





addAsteriskToFieldsRequired();