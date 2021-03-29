// PAGE
// ACCOUNT
// =================================================





(function () {
	var accountFormValidate = {
		rules: {
			firstName: {
				required: true,
				letter: true,
			},
			lastName: {
				required: true,
				letter: true,
			},
			dateBirth: {
				required: true,
			},
			age: {
				digits: true,
			},
			photo: {
				required: true,
			},
			// gender: {},
			// backgroundColor: {},
			// textColor: {}
			//------------------------------
			// address: {}
			country: {
				required: true,
			},
			// province: {},
			language: {
				required: true,
			},
			//------------------------------
			phone: {
				lengthTlf: true,
			},
			email: {
				email: true,
			},
			//------------------------------
			descriptionState: {
				required: true,
			},
			// company:{},
			// companyRol:{},
			// experienceYears:{},
			experienceGrade: {
				required: true,
			},
			profesionalStatus: {
				required: true,
			},
			education: {
				required: true,
			},
			skills: {
				required: true,
			},
			skillsDescription: {
				required: true,
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
			// gettingIntoDescription: {},
			// proyectsDescription: {},
			// collaborationsDescription: {},
			//------------------------------
			gitHubUrl: {
				url: true,
				require_from_group: [1, ".social-media__field"],
			},
			gitLabUrl: {
				url: true,
				require_from_group: [1, ".social-media__field"],
			},
			stackOverflowUrl: {
				url: true,
				require_from_group: [1, ".social-media__field"],
			},
			linkedinUrl: {
				url: true,
				require_from_group: [1, ".social-media__field"],
			},
			facebookUrl: {
				url: true,
				require_from_group: [1, ".social-media__field"],
			},
			twitterUrl: {
				url: true,
				require_from_group: [1, ".social-media__field"],
			},
			instagramUrl: {
				url: true,
				require_from_group: [1, ".social-media__field"],
			},
			mediumUrl: {
				url: true,
				require_from_group: [1, ".social-media__field"],
			},
			codepenUrl: {
				url: true,
				require_from_group: [1, ".social-media__field"],
			},
			codeSandboxUrl: {
				url: true,
				require_from_group: [1, ".social-media__field"],
			},
			jsFiddleUrl: {
				url: true,
				require_from_group: [1, ".social-media__field"],
			},
			webUrl: {
				url: true,
				require_from_group: [1, ".social-media__field"],
			},
			//------------------------------
			descriptionAbout: {
				required: true,
			},
			hobbies: {
				required: true,
			},
			//------------------------------
			oldUsername: {
				required: true,
			},
			newUsername: {
				required: true,
			},
			repeatNewUsername: {
				required: true,
				equalTo: "#newUsername",
			},
			//------------------------------
			oldEmail: {
				required: true,
				email: true,
			},
			newEmail: {
				required: true,
				email: true,
			},
			repeatNewEmail: {
				required: true,
				email: true,
				equalTo: "#newEmail",
			},
			displayEmail: {
				required: true,
			},
			//------------------------------
			oldPassword: {
				required: true,
			},
			newPassword: {
				required: true,
			},
			repeatNewPassword: {
				required: true,
				equalTo: "#newPassword",
			},
			//------------------------------
			// statusActive:{},
			//------------------------------
			termsAccept: {
				required: true,
			},
		},
		messages: {},
	};

	$("#accountForm").validate(accountFormValidate);
})();
