// TOOLS
// form - validation
// ------------------





// FORM - CKEDITOR
// =================================================

function ckeditorValidateFindField() {
	var formId = $("form").attr("id");
	var textarea = $("#" + formId + " " + ".ckeditor");
	var arrayTextareaId = [];
	textarea.each(function () {
		arrayTextareaId.push($(this).attr("id"));
	});
	return arrayTextareaId;
}


function ckeditorValidate(textareaId) {
	var ckeditorIframe = $("#cke_" + textareaId + " iframe"),
		ckeditorText = ckeditorIframe
			.contents()
			.find("body")
			.html(),
		ckeditorText = ckeditorText.replace(/<[^>]+>/g, ""),
		ckeditorDiv = ckeditorIframe
			.parent()
			.parent()
			.parent(),
		textarea = ckeditorDiv.parent().find("textarea"),
		textareaLabel = "label[for='" + textareaId + "'] span";

	var errorLabel =
		"<label id='" +
		textareaId +
		"-error' class='error' for='" +
		textareaId +
		"'>" +
		field_message_required +
		"</label>",
		errorLabelId = textareaId + "-error";



	function knowEvent(e) {
		if (!e) {
			var e = window.event;
		}
		if (e.type == "submit" && ckeditorText == "") {
			e.preventDefault();
		}
	}

	if (
		$("#" + textareaId)
			.parent()
			.find(textareaLabel)
			.hasClass("required")
	) {
		if (ckeditorText == "") {
			if (!$("#" + errorLabelId).length) {
				textarea.parent().append(errorLabel);
			}
			ckeditorDiv.addClass("error");

			document.onsubmit = knowEvent;
			document.onblur = knowEvent;
			document.onkeypress = knowEvent;
			document.onkeypress = knowEvent;
		} else {
			$("#" + errorLabelId).remove();
			ckeditorDiv.removeClass("error");
		}
	}
}