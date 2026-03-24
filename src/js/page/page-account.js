// PAGE
// ACCOUNT
// =================================================

/* global messageShow, messageHide */

(function() {
	const accountFormValidate = {
		"rules": {
			"firstName": {
				"required": true,
				"letter": true,
			},
			"lastName": {
				"required": true,
				"letter": true,
			},
			"dateBirth": {
				"required": true,
			},
			"age": {
				"digits": true,
			},
			"photo": {
				"required": true,
			},

			// gender: {},
			// backgroundColor: {},
			// textColor: {}
			// ------------------------------
			// address: {}
			"country": {
				"required": true,
			},

			// province: {},
			"language": {
				"required": true,
			},

			// ------------------------------
			"phone": {
				"lengthTlf": true,
			},
			"email": {
				"email": true,
			},

			// ------------------------------
			"professionalDescription": {
				"required": true,
			},

			// companyName:{},
			// companyPosition:{},
			// experienceYears:{},
			"experienceGrade": {
				"required": true,
			},
			"profesionalStatus": {
				"required": true,
			},
			"educationDescription": {
				"required": true,
			},
			"skills": {
				"required": true,
			},
			"skillsDescription": {
				"required": true,
			},

			// browserChrome:{},
			// browserFirefox:{},
			// browserSafari:{},
			// browserOpera:{},
			// browserInternetExplorer:{},
			// browserMicrosoftEdge:{},
			// editorNotePad:{},
			// editorSublimeText:{},
			// editorAtom:{},
			// editorNetbeans:{},
			// editorVisualStudio:{},
			// editorBrackets:{},
			// editorJetbrains:{},
			// learningDescription: {},
			// proyectsDescription: {},
			// collaborationsDescription: {},
			// ------------------------------
			"gitHubUrl": {
				"url": true,
				"require_from_group": [
					1,
					".social-media__field",
				],
			},
			"gitLabUrl": {
				"url": true,
				"require_from_group": [
					1,
					".social-media__field",
				],
			},
			"stackOverflowUrl": {
				"url": true,
				"require_from_group": [
					1,
					".social-media__field",
				],
			},
			"linkedinUrl": {
				"url": true,
				"require_from_group": [
					1,
					".social-media__field",
				],
			},
			"facebookUrl": {
				"url": true,
				"require_from_group": [
					1,
					".social-media__field",
				],
			},
			"twitterUrl": {
				"url": true,
				"require_from_group": [
					1,
					".social-media__field",
				],
			},
			"instagramUrl": {
				"url": true,
				"require_from_group": [
					1,
					".social-media__field",
				],
			},
			"mediumUrl": {
				"url": true,
				"require_from_group": [
					1,
					".social-media__field",
				],
			},
			"codepenUrl": {
				"url": true,
				"require_from_group": [
					1,
					".social-media__field",
				],
			},
			"codeSandboxUrl": {
				"url": true,
				"require_from_group": [
					1,
					".social-media__field",
				],
			},
			"jsFiddleUrl": {
				"url": true,
				"require_from_group": [
					1,
					".social-media__field",
				],
			},
			"webUrl": {
				"url": true,
				"require_from_group": [
					1,
					".social-media__field",
				],
			},

			// ------------------------------
			"aboutDescription": {
				"required": true,
			},
			"hobbies": {
				"required": true,
			},

			// ------------------------------
			"oldUsername": {
				"required": true,
			},
			"newUsername": {
				"required": true,
			},

			// ------------------------------
			"oldEmail": {
				"required": true,
				"email": true,
			},
			"newEmail": {
				"required": true,
				"email": true,
			},
			"repeatNewEmail": {
				"required": true,
				"email": true,
				"equalTo": "#newEmail",
			},

			// displayEmail: {},
			// ------------------------------
			"oldPassword": {
				"required": true,
			},
			"newPassword": {
				"required": true,
			},
			"repeatNewPassword": {
				"required": true,
				"equalTo": "#newPassword",
			},

			// ------------------------------
			// statusActive:{},
			// ------------------------------
			"termsAccept": {
				"required": true,
			},
		},
		"messages": {
			"skills": {
				"required": "Please select at least one option",
			},
			"oldUsername": {
				"required": "Please enter your current username",
			},
			"newUsername": {
				"required": "Please enter a new username",
			},
			"oldEmail": {
				"required": "Please enter your current email",
			},
			"newEmail": {
				"required": "Please enter a new email",
			},
			"repeatNewEmail": {
				"required": "Please repeat your new email",
				"equalTo": "Emails do not match",
			},
			"oldPassword": {
				"required": "Please enter your current password",
			},
			"newPassword": {
				"required": "Please enter a new password",
			},
			"repeatNewPassword": {
				"required": "Please repeat your new password",
				"equalTo": "Passwords do not match",
			},
		},
		"submitHandler"() {
			const $message = $(".message");
			$message.find(".message__text").text("Form submitted successfully!");
			messageShow();

			setTimeout(function() {
				messageHide();
			}, 10000);
		},
	};

	$("#accountForm").validate(accountFormValidate);

	const $range = $("#experienceYears");
	const $output = $("<output>").
		attr("for", "experienceYears").
		addClass("field-range__output").
		text(`${$range.val()} years`);

	$range.after($output);

	$range.on("input", function() {
		const val = $(this).val();
		$(this).attr("aria-valuenow", val);
		$output.text(`${val} years`);
	});
}());
