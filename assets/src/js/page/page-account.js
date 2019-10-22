// PAGE
// account
// ------------------

(function () {
  $("#accountForm").validate({
    rules: {
      firstName: {
        required: true,
        letter: true
      },
      lastName: {
        required: true,
        letter: true
      },
      phone: {
        required: true
      },
      dateBirth: {
        required: true
      },
      // age:{},
      // gender:{},
      photo: {
        required: true
      },
      // backgroundColor:{},
      // textColor:{},
      //------------------------------
      country: {
        required: true
      },
      province: {
        required: true
      },
      language: {
        required: true
      },
      //------------------------------
      descriptionState: {
        required: true
      },
      // company:{
      // 	required: true
      // },
      // companyRol:{
      // 	required: true
      // },
      // experienceYears:{
      // 	required: true
      // },
      experienceGrade: {
        required: true
      },
      profesionalStatus: {
        required: true
      },
      education: {
        required: true
      },
      skills: {
        required: true
      },
      skillsDescription: {
        required: true
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
      gettingIntoDescription: {
        required: true
      },
      proyectsDescription: {
        required: true
      },
      collaborationsDescription: {
        required: true
      },
      //------------------------------
      gitHubUrl: {
        required: true,
        url: true
      },
      gitLabUrl: {
        required: true,
        url: true
      },
      stackOverflowUrl: {
        required: true,
        url: true
      },
      linkedinUrl: {
        required: true,
        url: true
      },
      facebookUrl: {
        required: true,
        url: true
      },
      twitterUrl: {
        required: true,
        url: true
      },
      instagramUrl: {
        required: true,
        url: true
      },
      mediumUrl: {
        required: true,
        url: true
      },
      codepenUrl: {
        required: true,
        url: true
      },
      codeSandboxUrl: {
        required: true,
        url: true
      },
      jsFiddleUrl: {
        required: true,
        url: true
      },
      webUrl: {
        required: true,
        url: true
      },
      //------------------------------
      descriptionAbout: {
        required: true
      },
      hobbies: {
        required: true
      },
      //------------------------------
      oldUsername: {
        required: true
      },
      newUsername: {
        required: true
      },
      repeatNewUsername: {
        required: true,
        equalTo: "#newUsername"
      },
      //------------------------------
      oldEmail: {
        required: true,
        email: true
      },
      newEmail: {
        required: true,
        email: true
      },
      repeatNewEmail: {
        required: true,
        email: true,
        equalTo: "#newEmail"
      },
      displayEmail: {
        required: true
      },
      //------------------------------
      oldPassword: {
        required: true
      },
      newPassword: {
        required: true
      },
      repeatNewPassword: {
        required: true,
        equalTo: "#newPassword"
      },
      //------------------------------
      // statusActive:{},
      //------------------------------
      termsAcept: {
        required: true
      }
    },
    messages: {}
  });
})();
