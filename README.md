![GitHub dependabot](https://img.shields.io/badge/dependabot-enabled-025e8c?logo=Dependabot)
![GitHub last commit](https://img.shields.io/github/last-commit/beatrizsmerino/validation-form)
![GitHub issues](https://img.shields.io/github/issues/beatrizsmerino/validation-form)
![GitHub forks](https://img.shields.io/github/forks/beatrizsmerino/validation-form)
![GitHub stars](https://img.shields.io/github/stars/beatrizsmerino/validation-form)
![GitHub watchers](https://img.shields.io/github/watchers/beatrizsmerino/validation-form)

# Validation form

![Validation Form](README/images/validation-form.gif)

## 🎯 Description

This repository is a complete example of a form with different fields, required validations and custom text fields.

## 🧩 Developed with

![HTML5](https://img.shields.io/badge/-HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/-Css3-2173F6?style=for-the-badge&logo=css3&logoColor=white)
![SASS/SCSS](https://img.shields.io/badge/-SASS/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![Javascript](https://img.shields.io/badge/-Javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Babel](https://img.shields.io/badge/-babel-F9DC3E?style=for-the-badge&logo=babel&logoColor=000000) ![JQuery](https://img.shields.io/badge/-JQuery-183353?style=for-the-badge&logo=JQuery&logoColor=white) ![NPM](https://img.shields.io/badge/-NPM-CB3837?style=for-the-badge&logo=npm&logoColor=white) ![Gulp](https://img.shields.io/badge/-Gulp-D34A47?style=for-the-badge&logo=gulp&logoColor=white) ![Bash](https://img.shields.io/badge/Bash-3D4648?style=for-the-badge&logo=gnu-bash&logoColor=white)

It is developed in `HTML`, `CSS` (with the `SASS` preprocessor) and `JS` (with the `Jquery` library).
It uses the `GULP` task runner to build the files in the `dist` folder and these files are published using an `NPM` script in the **gh-page** branch on GitHub.

### Javascript

- [Jquery 3.4.1](https://jquery.com/). jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers.
- [jQuery Validation 1.19.1](https://jqueryvalidation.org/). This jQuery plugin makes simple clientside form validation easy, whilst still offering plenty of customization options. It makes a good choice if you’re building something new from scratch, but also when you’re trying to integrate something into an existing application with lots of existing markup. The plugin comes bundled with a useful set of validation methods, including URL and email validation, while providing an API to write your own methods. All bundled methods come with default error messages in english and translations into 37 other languages.  
Some more methods are provided as add-ons, and are currently included in `additional-methods.min.js` in the download package. You can find the source code for all additional methods in the [GitHub repository](https://github.com/jquery-validation/jquery-validation/tree/master/src/additional).
- [CKEditor 4](https://ckeditor.com/ckeditor-4/). Modern JavaScript rich text editor with a modular architecture. Its clean UI and features provide the perfect WYSIWYG UX ❤️ for creating semantic content. It is full of features like pasting from Word, Excel and Google Docs. It's excellent table support with column resizing, row and column selection. You can include multimedia embeds as insert images, videos, tweets, Instagram posts widgets, code snippets, mathematical formulas and more. It has spreadsheets to create data grids within the editor. It uses autocomplete, @mentions, emoji 😊, styling and formatting plugins (copy formatting feature). It is designed with inline and iframe UI, autogrow, maximize mode for distraction-free typing with the read-only mode ...and more!  
Here you can see the [README.md](https://github.com/beatrizsmerino/validation-form/blob/master/src/js/libs/ckeditor/README.md) file of this project and the [samples](https://github.com/beatrizsmerino/validation-form/tree/master/src/js/libs/ckeditor/samples) folder.

## 🚀 Commands

### Install dependencies

```shell
npm install
```

### Deploy project

```shell
npm run deploy
```

### Build files, run server and watch changes

```shell
gulp
```

### Create and run server

```shell
gulp serve
```

### Watch for changes

```shell
gulp watch
```

### Build files

```shell
gulp build
```

### Build HTML files

```shell
gulp html
```

### Build CSS files

```shell
gulp css
```

### Build JS files

```shell
gulp js
```

### Build icon files

```shell
gulp icon
```

## 🚧 State

There is still room for improvement in validation, such as the implementation of showing/hiding fields dynamically as the user fills/hides them... and many other potential areas.
