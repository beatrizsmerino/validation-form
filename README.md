![GitHub last commit](https://img.shields.io/github/last-commit/beatrizsmerino/validation-form)
![GitHub dependabot](https://img.shields.io/badge/dependabot-enabled-025e8c?logo=Dependabot)
![GitHub issues](https://img.shields.io/github/issues/beatrizsmerino/validation-form)
![GitHub forks](https://img.shields.io/github/forks/beatrizsmerino/validation-form)
![GitHub stars](https://img.shields.io/github/stars/beatrizsmerino/validation-form)
![GitHub watchers](https://img.shields.io/github/watchers/beatrizsmerino/validation-form)

# Validation form

![Validation Form](/README/images/validation-form.gif)

## Description

This `validation-form` repository is a complete example of a form with different fields, required validations and custom text fields.

## Development interface

It is developed in `HTML`, `CSS` (with the `SASS` preprocessor) and `JS` (with the `Jquery` library).
It uses the `GULP` task runner to build the files in the `dist` folder and these files are published using an `NPM` script in the **gh-page** branch on GitHub.

![HTML5](https://img.shields.io/badge/-HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/-Css3-2173F6?style=for-the-badge&logo=css3&logoColor=white)
![SASS/SCSS](https://img.shields.io/badge/-SASS/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![Javascript](https://img.shields.io/badge/-Javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Babel](https://img.shields.io/badge/-babel-F9DC3E?style=for-the-badge&logo=babel&logoColor=000000) ![JQuery](https://img.shields.io/badge/-JQuery-183353?style=for-the-badge&logo=JQuery&logoColor=white) ![NPM](https://img.shields.io/badge/-NPM-CB3837?style=for-the-badge&logo=npm&logoColor=white) ![Gulp](https://img.shields.io/badge/-Gulp-D34A47?style=for-the-badge&logo=gulp&logoColor=white) ![Bash](https://img.shields.io/badge/Bash-3D4648?style=for-the-badge&logo=gnu-bash&logoColor=white)

### Javascript

- [Jquery 3.4.1](https://jquery.com/). jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers.
- [jQuery Validation 1.19.1](https://jqueryvalidation.org/). This jQuery plugin makes simple clientside form validation easy, whilst still offering plenty of customization options. It makes a good choice if you’re building something new from scratch, but also when you’re trying to integrate something into an existing application with lots of existing markup. The plugin comes bundled with a useful set of validation methods, including URL and email validation, while providing an API to write your own methods. All bundled methods come with default error messages in english and translations into 37 other languages.
Some more methods are provided as add-ons, and are currently included in `additional-methods.min.js` in the download package. You can find the source code for all additional methods in the [GitHub repository](https://github.com/jquery-validation/jquery-validation/tree/master/src/additional).
- [CKEditor 4](https://ckeditor.com/ckeditor-4/). Modern JavaScript rich text editor with a modular architecture. Its clean UI and features provide the perfect WYSIWYG UX ❤️ for creating semantic content. It is full of features like pasting from Word, Excel and Google Docs. It's excellent table support with column resizing, row and column selection. You can include multimedia embeds as insert images, videos, tweets, Instagram posts widgets, code snippets, mathematical formulas and more. It has spreadsheets to create data grids within the editor. It uses autocomplete, @mentions, emoji 😊, styling and formatting plugins (copy formatting feature). It is designed with inline and iframe UI, autogrow, maximize mode for distraction-free typing with the read-only mode ...and more!
Here you can see the [README.md](https://github.com/beatrizsmerino/validation-form/blob/master/src/js/libs/ckeditor/README.md) file of this project and the [samples](https://github.com/beatrizsmerino/validation-form/tree/master/src/js/libs/ckeditor/samples) folder.

## NPM

### Project setup

After cloning this repository you need to install the required NPM packages.

```shell
npm install
```

### Deploy

After development you can publish the content of `dist` folder in Github Pages (`gh-pages` branch)

```shell
npm run deploy
```

## GULP

As I said before this project uses the `GULP task runner`.

In the [gulpfile.js](https://github.com/beatrizsmerino/validation-form/blob/master/gulpfile.js) of this proyect you can see the **gulp tasks** developed to compile and compress the `SASS` and `JS`, copy and paste the `HTML` files and `ICOMOON` icon fonts, create a server and listen to the changes made to reload it ([Browsersync + Gulp.js](https://browsersync.io/docs/gulp))

So the project is developed in the `src` folder and published in the `dist` folder.

### 🔧 Run server and watch changes

This is the default gulp task

This command is able to:

1. Creates the `dist` folder if it does not exist.
2. Generate `html`, `css`, `js` and font icons of `icomoon` on `dist` folder.
3. Watch the changes to the files in the `sass`, `js` and `icomoon` folders inside the `src` folder.
4. Create a server and reloads if there are any changes in those files of `dist` folder.

```shell
gulp
```

or

```shell
gulp default
```

or

```shell
gulp htmlCopy
gulp sassCompile
gulp jsLibCopy
gulp jsCompile
gulp fontsIcomoonCopy
gulp cssIcomoonMinify
gulp watch
```

### 💻 Run server

This create a static server with browserSync package, serves the files from `dist` folder and opens by default the `index.html` file in any of these browsers: Chrome & Firefox.

```shell
gulp serve
```

or

```shell
gulp createServer
```

### 📂 Generate html, css, js and icons

This command is able to:

1. Creates the `dist` folder if it does not exist.
2. Generate `html`, `css`, `js` and `icomoon` on `dist` folder.

```shell
gulp build
```

or

```shell
gulp htmlCopy
gulp sassCompile
gulp jsLibCopy
gulp jsCompile
gulp fontsIcomoonCopy
gulp cssIcomoonMinify
```

### 📄 Generate html

This command is able to:

1. Creates the `dist` folder if it does not exist.
2. Copies the `html` files from the `src` folder and pastes the `dist` folder.

```shell
gulp html
```

or

```shell
gulp htmlCopy
```

### 📄 Generate css

This command is able to:

1. Creates the `dist` folder if it does not exist.
2. Compile the `styles.sass` file (with the import files of partials sass) located at `src/sass/`, add prefixes to properties css, compress the file, create and add a mapping for the debugger styles sass on the browser inspector, apply a Gulp Plugin for Line Ending Corrector (A utility that makes sure your files have consistent line endings)...
3. Export the `styles.min.css` file to `dist/css/` folder.

```shell
gulp css
```

or

```shell
gulp sassCompile
```

### 📄 Generate js

This command is able to:

1. Creates the `dist` folder if it does not exist.
2. Get list of files of `pathsFront` constant, compile the files with Babel NPM package, compress it and apply a Gulp Plugin for Line Ending Corrector (A utility that makes sure your files have consistent line endings)...
3. Export the `scripts.min.js` file to `dist/js` folder.
4. Copy files of libraries js inside `src/js/libs` and paste into `dist/js/libs` folder.

```shell
gulp js
```

or

```shell
gulp jsLibCopy
gulp jsCompile
```

### 📄 Generate font icons with icomoon

This proyect uses icons from [icomoon.io](https://icomoon.io/app/#/select), one app that has 2 buttons to **generate SVG & More** and **generate Font**.

The `src/icomoon/` folder contains a mix of both folders downloaded from these 2 buttons.

This command is able to:

1. Creates the `dist` folder if it does not exist.
2. Gets `style.css` file from `src/icomoon/` folder, generates a new compressed file, renames it `fonts.min.css` and export the file to `dist/icomoon`.
3. Copy directory `src/icomoon/fonts`, containing the fonts (EOT, SVG, TTF, WOFF), into `dist/icomoon/fonts`

```shell
gulp icon
```

or

```shell
gulp fontsIcomoonCopy
gulp cssIcomoonMinify
```

### 🔎 Watch changes

This command is able to:

1. Create the server.
2. Watch the changes to the files in the `html`, `sass`, `icomoon` and `js` folders inside the `src` folder and run the tasks to re-generate the files inside the `dist` folder.
3. Reloads the server if there are any changes to the `html`, `css`, `icomoon` and `js` files inside the `dist` folder.

```shell
gulp watch
```

## 🚀 Working

> The validation of the fields remains to be improved, hide / show fields as they are filled...and more.
