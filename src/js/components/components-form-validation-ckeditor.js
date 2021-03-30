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


	var errorLabelId = textareaId + "-error";
	var errorLabel =
			"<label id='" +
			textareaId +
			"-error' class='error' for='" +
			textareaId +
			"'>" +
			field_message_required +
			"</label>";

	

	if (ckeditorTextFormatted == "") {
		ckeditorCreatePlaceholder(textareaId);
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
		} else {
			$("#" + errorLabelId).remove();
			ckeditorDiv.removeClass("error");
		}
	}
}





function ckeditorCreatePlaceholder(textareaId) {
	var ckeditorIframe 		= $("#cke_" + textareaId + " iframe");
	var textarea 			= $("#" + textareaId);
	var textareaPlaceholder = textarea.attr("placeholder");

	if (textareaPlaceholder != undefined) {
		ckeditorIframe
			.contents()
			.find("body")
			.css(
				{
					"font-size": "16px"
				}
			)
			.html('<span class="ckeditor__placeholder">' + textareaPlaceholder + "</span>")
			.css(
				{
					"color": "rgb(117, 117, 117)"
				}
			);
	}
}





function ckeditorAddPlaceholderAll(arrayTextareaId) {
	for (var i = 0; i < arrayTextareaId.length; ++i) {
		ckeditorCreatePlaceholder(arrayTextareaId[i]);
	}
}





function ckeditorRemovePlaceholder(textareaId) {
	var textarea = $("#" + textareaId);
	var ckeditorIframe = $("#cke_" + textareaId + " iframe");
	ckeditorGetPlaceholder(ckeditorIframe).remove();
}




function ckeditorGetPlaceholder(ckeditorIframe) {
	return ckeditorIframe.contents().find(".ckeditor__placeholder");
}





$(document).ready(function () {
	var arrayTextareaId = ckeditorValidateFindField();
	

	$("form").submit(function () {
		for (var i = 0; i < arrayTextareaId.length; ++i) {
			ckeditorRemovePlaceholder(arrayTextareaId[i]);
			ckeditorValidate(arrayTextareaId[i]);
		}
	});

	CKEDITOR.on("instanceReady", function (event) {
		var editor 		= event.editor,
			textareaId 	= editor.name;


		ckeditorAddPlaceholderAll(arrayTextareaId);


		editor.on("focus", function () {
			ckeditorRemovePlaceholder(textareaId);
		});

		editor.on("blur", function () {
			ckeditorValidate(textareaId);
		});

		editor.on("change", function () {
			ckeditorValidate(textareaId);
		});
	});

});