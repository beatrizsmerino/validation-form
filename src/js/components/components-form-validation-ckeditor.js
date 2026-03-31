// COMPONENTS
// FORM VALIDATION - CKEDITOR
// =================================================
/* global fieldMessageRequired */

function ckeditorValidateFindField() {
	const formId = $("form").attr("id");
	const textarea = $(`#${formId} .ckeditor`);

	const arrayTextareaId = [];
	textarea.each(function() {
		arrayTextareaId.push($(this).attr("id"));
	});

	return arrayTextareaId;
}

function ckeditorValidate(textareaId) {
	const ckeditorIframe = $(`#cke_${textareaId} iframe`);
	const ckeditorText = ckeditorIframe.contents().find("body").
		html();
	const ckeditorTextFormatted = ckeditorText.replace(/<[^>]+>/gu, "");
	const ckeditorDiv = ckeditorIframe.parent().parent().
		parent();
	const textarea = ckeditorDiv.parent().find("textarea");
	const textareaLabel = `label[for='${textareaId}'] span`;

	const errorLabelId = `${textareaId}-error`;
	const errorLabel = `<label id='${textareaId}-error' class='error' for='${textareaId}'>${
		fieldMessageRequired
	}</label>`;

	if (ckeditorTextFormatted == "") {
		ckeditorCreatePlaceholder(textareaId);
	}

	if ($(`#${textareaId}`).parent().
		find(textareaLabel).
		hasClass("required")) {
		if (ckeditorTextFormatted == "") {
			if (!$(`#${errorLabelId}`).length) {
				textarea.parent().append(errorLabel);
			}
			ckeditorDiv.addClass("error");
		} else {
			$(`#${errorLabelId}`).remove();
			ckeditorDiv.removeClass("error");
		}
	}
}

function ckeditorCreatePlaceholder(textareaId) {
	const ckeditorIframe = $(`#cke_${textareaId} iframe`);
	const textarea = $(`#${textareaId}`);
	const textareaPlaceholder = textarea.attr("placeholder");

	if (typeof textareaPlaceholder !== "undefined") {
		ckeditorIframe.
			contents().
			find("body").
			css({
				"font-size": "16px",
			}).
			html(`<span class="ckeditor__placeholder">${textareaPlaceholder}</span>`).
			css({
				"color": "rgb(117, 117, 117)",
			});
	}
}

function ckeditorAddPlaceholderAll(arrayTextareaId) {
	for (let i = 0; i < arrayTextareaId.length; ++i) {
		ckeditorCreatePlaceholder(arrayTextareaId[i]);
	}
}

function ckeditorRemovePlaceholder(textareaId) {
	const ckeditorIframe = $(`#cke_${textareaId} iframe`);
	ckeditorGetPlaceholder(ckeditorIframe).remove();
}

function ckeditorGetPlaceholder(ckeditorIframe) {
	return ckeditorIframe.contents().find(".ckeditor__placeholder");
}

$(document).ready(function() {
	const arrayTextareaId = ckeditorValidateFindField();

	$("form").submit(function() {
		for (let i = 0; i < arrayTextareaId.length; ++i) {
			ckeditorRemovePlaceholder(arrayTextareaId[i]);
			ckeditorValidate(arrayTextareaId[i]);
		}
	});

	CKEDITOR.on("instanceReady", function(event) {
		const editor = event.editor,
			textareaId = editor.name;

		ckeditorAddPlaceholderAll(arrayTextareaId);

		editor.on("focus", function() {
			ckeditorRemovePlaceholder(textareaId);
		});

		editor.on("blur", function() {
			ckeditorValidate(textareaId);
		});

		editor.on("change", function() {
			ckeditorValidate(textareaId);
		});
	});
});
