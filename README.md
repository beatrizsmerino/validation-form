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

<details>
<summary><a href="https://jquery.com/">JQuery 3.4.1</a></summary>
<div>
  <p>jQuery is a fast, small, and feature-rich <code>JavaScript</code> library. It makes things like <code>HTML</code> document traversal and manipulation, event handling, animation, and <code>Ajax</code> much simpler with an easy-to-use API that works across a multitude of browsers.</p>
</div>
</details>

<details>
<summary><a href="https://jqueryvalidation.org/">jQuery Validation 1.19.1</a></summary>
<div>
  <p>This jQuery plugin makes simple clientside form validation easy, whilst still offering plenty of customization options. It makes a good choice if you’re building something new from scratch, but also when you’re trying to integrate something into an existing application with lots of existing markup. The plugin comes bundled with a useful set of validation methods, including URL and email validation, while providing an API to write your own methods. All bundled methods come with default error messages in english and translations into 37 other languages.</p>
  <p>Some more methods are provided as add-ons, and are currently included in <code>additional-methods.min.js</code> in the download package. You can find the source code for all additional methods in the <a href="https://github.com/jquery-validation/jquery-validation/tree/master/src/additional">GitHub repository</a>.</p>
</div>
</details>

<details>
<summary><a href="https://ckeditor.com/ckeditor-4/">CKEditor 4</a></summary>
<div>
  <p>Modern <code>JavaScript</code> rich text editor with a modular architecture. Its clean UI and features provide the perfect WYSIWYG UX ❤️ for creating semantic content. It is full of features like pasting from Word, Excel and Google Docs. It's excellent table support with column resizing, row and column selection. You can include multimedia embeds as insert images, videos, tweets, Instagram posts widgets, code snippets, mathematical formulas and more. It has spreadsheets to create data grids within the editor. It uses autocomplete, @mentions, emoji 😊, styling and formatting plugins (copy formatting feature). It is designed with inline and iframe UI, autogrow, maximize mode for distraction-free typing with the read-only mode ...and more!</p><p>Here you can see the <a href="https://github.com/beatrizsmerino/validation-form/blob/master/src/js/libs/ckeditor/README.md">README.md</a> file of this project and the <a href="https://github.com/beatrizsmerino/validation-form/tree/master/src/js/libs/ckeditor/samples">samples</a> folder.</p>
</div>
</details>

### Gulp

As I said before this project uses the `GULP task runner`.

In the [gulpfile.js](https://github.com/beatrizsmerino/validation-form/blob/master/gulpfile.js) of this proyect you can see the **gulp tasks** developed to compile and compress the `SASS` and `JS`, copy and paste the `HTML` files and `ICOMOON` icon fonts, create a server and listen to the changes made to reload it ([Browsersync + Gulp.js](https://browsersync.io/docs/gulp))

So the project is developed in the `src` folder and published in the `dist` folder.

## 🚀 Commands

<details>
	<summary>
		<h3>
			Install dependencies
		</h3>
	</summary>
	<div>
		After cloning this repository you need to install the required NPM packages.
	</div>
</details>

```shell
npm install
```

<details>
	<summary>
		<h3>
			Deploy project
		</h3>
	</summary>
	<div>
		After development you can publish the content of <code>dist</code> folder in Github Pages (<code>gh-pages</code> branch)
	</div>
</details>

```shell
npm run deploy
```

<details>
	<summary>
		<h3>
			Build files, run server and watch changes
		</h3>
	</summary>
	<div>
		<p>
			This is the default gulp task
		</p>
		<p>
			This command is able to:
		</p>
		<ol>
			<li>
				Creates the <code>dist</code> folder if it does not exist.
			</li>
			<li>
				Generate <code>html</code>, <code>css</code>, <code>js</code> and font icons of <code>icomoon</code> on <code>dist</code> folder.
			</li>
			<li>
				Watch the changes to the files in the <code>sass</code>, <code>js</code> and <code>icomoon</code> folders inside the <code>src</code> folder.
			</li>
			<li>
				Create a server and reloads if there are any changes in those files of <code>dist</code> folder.
			</li>
		</ol>
	</div>
</details>

```shell
gulp
```

<details>
	<summary>
		<h3>Create and run server</h3>
	</summary>
	<div>
		This create a static server with browserSync package, serves the files from <code>dist</code> folder and opens by default the <code>index.html</code> file in any of these browsers: Chrome & Firefox.
	</div>
</details>

```shell
gulp serve
```

<details>
	<summary>
		<h3>
			Watch for changes
		</h3>
	</summary>
	<div>
		<p>
			This command is able to:
		</p>
		<ol>
			<li>
				Create the server.
			</li>
			<li>
				Watch the changes to the files in the <code>html</code>, <code>sass</code>, <code>icomoon</code> and <code>js</code> folders inside the <code>src</code> folder and run the tasks to re-generate the files inside the <code>dist</code> folder.
			</li>
			<li>
				Reloads the server if there are any changes to the <code>html</code>, <code>css</code>, <code>icomoon</code> and <code>js</code> files inside the <code>dist</code> folder.
			</li>
		</ol>
	</div>
</details>

```shell
gulp watch
```

<details>
	<summary>
		<h3>
			Build files
		</h3>
	</summary>
	<div>
		<p>
			This command is able to:
		</p>
		<ol>
			<li>
				Creates the <code>dist</code> folder if it does not exist.
			</li>
			<li>
				Generate <code>html</code>, <code>css</code>, <code>js</code> and <code>icomoon</code> on <code>dist</code> folder.
			</li>
		</ol>
	</div>
</details>

```shell
gulp build
```

<details>
	<summary>
		<h3>
			Build HTML files
		</h3>
	</summary>
	<div>
		<p>
			This command is able to:
		</p>
		<ol>
			<li>
				Creates the <code>dist</code> folder if it does not exist.
			</li>
			<li>
				Copies the <code>html</code> files from the <code>src</code> folder and pastes them into the <code>dist</code> folder.
			</li>
		</ol>
	</div>
</details>

```shell
gulp html
```

<details>
	<summary>
		<h3>
			Build CSS files
		</h3>
	</summary>
	<div>
		<p>
			This command is able to:
		</p>
		<ol>
			<li>
				Creates the <code>dist</code> folder if it does not exist.
			</li>
			<li>
				Compile the <code>styles.sass</code> file (with the import files of partials sass) located at <code>src/sass/</code>, add prefixes to CSS properties, compress the file, create and add a mapping for the debugger styles sass on the browser inspector, apply a Gulp Plugin for Line Ending Corrector (A utility that makes sure your files have consistent line endings)...
			</li>
			<li>
				Export the <code>styles.min.css</code> file to <code>dist/css/</code> folder.
			</li>
		</ol>
	</div>
</details>

```shell
gulp css
```

<details>
	<summary>
		<h3>
			Build JS files
		</h3>
	</summary>
	<div>
		<p>
			This command is able to:
		</p>
		<ol>
			<li>
				Creates the <code>dist</code> folder if it does not exist.
			</li>
			<li>
				Get a list of files of <code>pathsFront</code> constant, compile the files with Babel NPM package, compress it and apply a Gulp Plugin for Line Ending Corrector (A utility that makes sure your files have consistent line endings)...
			</li>
			<li>
				Export the <code>scripts.min.js</code> file to <code>dist/js</code> folder.
			</li>
			<li>
				Copy files of libraries js inside <code>src/js/libs</code> and paste them into <code>dist/js/libs</code> folder.
			</li>
		</ol>
	</div>
</details>

```shell
gulp js
```

<details>
	<summary>
		<h3>
			Build icon files
		</h3>
	</summary>
	<div>
		<p>
			This project uses icons from <a href="https://icomoon.io/app/#/select">icomoon.io</a>, one app that has 2 buttons to <strong>generate SVG & More</strong> and <strong>generate Font</strong>.
		</p>
		<p>
			The <code>src/icomoon/</code> folder contains a mix of both folders downloaded from these 2 buttons.
		</p>
		<p>
			This command is able to:
		</p>
		<ol>
			<li>
				Creates the <code>dist</code> folder if it does not exist.
			</li>
			<li>
				Gets <code>style.css</code> file from <code>src/icomoon/</code> folder, generates a new compressed file, renames it <code>fonts.min.css</code> and export the file to <code>dist/icomoon</code>.
			</li>
			<li>
				Copy directory <code>src/icomoon/fonts</code>, containing the fonts (EOT, SVG, TTF, WOFF), into <code>dist/icomoon/fonts</code>
			</li>
		</ol>
	</div>
</details>

```shell
gulp icon
```

## 🚧 State

There is still room for improvement in validation, such as the implementation of showing/hiding fields dynamically as the user fills/hides them... and many other potential areas.
