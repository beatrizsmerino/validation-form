// COMPONENTS
// FORM VALIDATION - CKEDITOR
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
	var ckeditorIframe 			= $("#cke_" + textareaId + " iframe"),
		ckeditorText   			= ckeditorIframe.contents().find("body").html(),
		ckeditorTextFormatted   = ckeditorText.replace(/<[^>]+>/g, ""),
		ckeditorDiv    			= ckeditorIframe.parent().parent().parent(),
		textarea       			= ckeditorDiv.parent().find("textarea"),
		textareaLabel  			= "label[for='" + textareaId + "'] span";

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
		if (e.type == "submit" && ckeditorTextFormatted == "") {
			e.preventDefault();
		}
	}

	if (
		$("#" + textareaId)
			.parent()
			.find(textareaLabel)
			.hasClass("required")
	) {
		if (ckeditorTextFormatted == "") {
			if (!$("#" + errorLabelId).length) {
				textarea.parent().append(errorLabel);
			}
			ckeditorDiv.addClass("error");

			document.onsubmit 	= knowEvent;
			document.onblur 	= knowEvent;
			document.onkeypress = knowEvent;
			document.onkeypress = knowEvent;
		} else {
			$("#" + errorLabelId).remove();
			ckeditorDiv.removeClass("error");
		}
	}
}





function ckeditorPlaceholder(textareaId) {
	var ckeditorIframe 		= $("#cke_" + textareaId + " iframe");
	var arrayTextarea 		= $("#" + textareaId);
	var textareaPlaceholder = arrayTextarea.attr("placeholder");

	ckeditorIframe.contents().find("body").text(textareaPlaceholder);
}





$(document).ready(function () {
	var arrayTextareaId = ckeditorValidateFindField();
	

	$("form").submit(function () {
		for (var i = 0; i < arrayTextareaId.length; ++i) {
			ckeditorValidate(arrayTextareaId[i]);
		}
	});

	CKEDITOR.on("instanceReady", function (event) {
		var editor 	= event.editor,
			body 	= CKEDITOR.document.getBody();

		for (var i = 0; i < arrayTextareaId.length; ++i) {
			ckeditorPlaceholder(arrayTextareaId[i]);
		}

		function ckeditorValidateEvent(editor) {
			var textareaId = editor.name;
			ckeditorValidate(textareaId);
		}

		editor.on("blur", function () {
			ckeditorValidateEvent(editor);
		});

		editor.on("change", function () {
			ckeditorValidateEvent(editor);
		});
	});

});