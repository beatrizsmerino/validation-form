// COMPONENTS
// MESSAGE
// =================================================

const messageContent =
	'<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque perspiciatis veniam quidem eum enim! Repellendus beatae iste pariatur vero <a class="link" href="#" role="button" tabindex="0">necessitatibus consectetur</a> dolores dolorem distinctio iusto soluta, sapiente cumque eveniet porro!</p>';

function messageOpen() {
	$(".message__open").on("click", function(e) {
		e.preventDefault();
		const $message = $(".message");
		const $text = $message.find(".message__text");
		$message.addClass("is-show");
		$message.removeClass("is-hide");
		$text.html(messageContent);
		$text.attr("tabindex", "-1");
		setTimeout(function() {
			$text.trigger("focus");
		}, 3000);
	});
}

function messageClose() {
	$(".message__close").on("click", function() {
		$(".message").removeClass("is-show");
		$(".message").addClass("is-hide");
		$(".message__text").html("");
	});
}

(function() {
	$(document).ready(function() {
		messageClose();
		messageOpen();
	});
}());
