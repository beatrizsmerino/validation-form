// COMPONENTS
// MESSAGE
// =================================================





function messageOpen() {
	$(".message__open").on("click", function () {
		$(".message").addClass("is-show");
		$(".message").removeClass("is-hide");
	});
}





function messageClose() {
	$(".message__close").on("click", function () {
		$('.message').removeClass('is-show');
		$(".message").addClass("is-hide");
	});
}





messageClose();
messageOpen();
