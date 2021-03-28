// COMPONENTS
// MESSAGE
// =================================================





function messageOpen() {
	$(".message__open").on("click", function () {
		$(".message").addClass("is-view");
	});
}





function messageClose() {
	$(".message__close").on("click", function () {
		$(".message").removeClass("is-view");
	});
}





messageClose();
messageOpen();
