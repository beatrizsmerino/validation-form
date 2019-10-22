// COMPONENTS
// form - validation
// ------------------





// VALIDATE FORMS - CKEDITOR
// =================================================
$(document).ready(function () {

  $("form").submit(function () {
    var arrayTextareaId = ckeditorValidateFindField();
    for (var i = 0; i < arrayTextareaId.length; ++i) {
      ckeditorValidate(arrayTextareaId[i]);
    }
  });


  CKEDITOR.on("instanceReady", function (event) {
    var editor = event.editor,
      body = CKEDITOR.document.getBody();

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