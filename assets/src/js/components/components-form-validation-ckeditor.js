// COMPONENTS
// form - validation
// ------------------





// VALIDATE FORMS - CKEDITOR
// =================================================
$(document).ready(function(){

	$("form").submit(function (){
		var arrayTextareaId = ckeditor_validate_findField();
		for (let i = 0; i < arrayTextareaId.length; ++i) {
			ckeditor_validate(arrayTextareaId[i]);
		}
	});
		
		
	CKEDITOR.on("instanceReady", function (evt)
	{
		var editor = evt.editor,
			body   = CKEDITOR.document.getBody();
			
		function ckeditor_validate_eventEditor(editor)
		{
			let textareaId = editor.name;
			ckeditor_validate(textareaId);
		}
			
		editor.on("blur", function ()
		{
			ckeditor_validate_eventEditor(editor);
		});
		editor.on("change", function ()
		{
			ckeditor_validate_eventEditor(editor);
		});
	});

});