![shieldsIO](https://img.shields.io/github/issues/beatrizsmerino/validation-form)
![shieldsIO](https://img.shields.io/github/forks/beatrizsmerino/validation-form)
![shieldsIO](https://img.shields.io/github/stars/beatrizsmerino/validation-form)

# Validation form

### The validation form is a complete example of an html form on the user account with different fields, required validations and custom text fields.

![Validation Form](https://github.com/beatrizsmerino/validation-form/blob/master/README/images/validation-form-1.jpg)

![Validation Form](https://github.com/beatrizsmerino/validation-form/blob/master/README/images/validation-form-2.jpg)

![Validation Form](https://github.com/beatrizsmerino/validation-form/blob/master/README/images/validation-form-3.jpg)

# Development interface

It is developed HTML, CSS (SASS) and Javascript (Jquery). Use gulp for compile js and sass in a one file.

# Content

## Javascript libraries

- [Jquery 3.4.1](https://jquery.com/)
- [jqueryvalidation.org](https://jqueryvalidation.org/). Validation fields with a js library.
- [CKEditor 4](https://ckeditor.com/). JavaScript interface modern of a rich text editor.

# NPM 
## Project setup

```
npm install
```

# GULP

**Documentation**:  [Browsersync + Gulp.js](https://browsersync.io/docs/gulp)

**Gulp tasks**: [gulpfile.js](https://github.com/beatrizsmerino/validation-form/blob/master/gulpfile.js)

## Run server and watch changes

1. Generate html, css, js and icons on `dist` folder.
2. Watch the changes on the files on the `sass`, `js` and `icomoon` folders on `src` folder.
3. Create a server and reloads if there are any changes in those files of `dist` folder.

```
gulp
```

or

```
gulp htmlCopy
gulp sassCompile
gulp cssCompile
gulp jsCompile
gulp icomoonMinify
gulp icomoonCopy
gulp watch
```

## Generate css, js and icons

This command is able to:

1. Creates the `dist` folder if it does not exist.
2. Generate html, css, js and icons on `dist` folder.

```
gulp build
```

or

```
gulp htmlCopy
gulp sassCompile
gulp cssCompile
gulp jsCompile
gulp icomoonMinify
gulp icomoonCopy
```

## Watch changes

This command is able to:

1. Create a server.
2. Watch the changes on the files on the `html`, `sass`, `icomoon` and `js` folders on `src` folder and run the tasks for generate again the files inside the `dist` folder.
3. Reloads the server if there are any changes to the `html`, `css`, `icomoon` and `js` files inside the `dist` folder.

```
gulp watch
```

## Generate html

This command is able to:

1. Creates the `dist` folder if it does not exist.
2. Copies the `html` files from the `src` folder and pastes the `dist` folder.

```
gulp html
```

or

```
gulp htmlCopy
```

## Run server

This create a static server on port 3000 with browserSync package. Serve files from the app directory, with a specific index filename. This server can open the site in Chrome & Firefox.

```
gulp serve
```

or

```
gulp createServer
```

## Minify icons

This app use icons of [icomoon.io](https://icomoon.io/app/#/select). The app has 2 buttons for generate SVG & More and generate Font. The `src/icomoon/` folder contains a mix of both folders downloaded from these 2 buttons.

This command is able to:

1. Creates the `dist` folder if it does not exist.
2. Gets `style.css` file from `src/icomoon/` folder, generates a new compressed file, renames it `fonts.min.css` and export the file to `dist/icomoon`.
3. Copy directory `src/icomoon/fonts` into `dist/icomoon/fonts`

```
gulp icon
```

or

```
gulp icomoonMinify
gulp icomoonCopy
```

## Compile sass to css

This command is able to:

1. Creates the `dist` folder if it does not exist.
2. Compile the `styles.sass` file (with the import files of partials sass) located at `src/sass/`, add prefixes to properties css, compress the file, create and add a mapping for the debugger styles sass on the browser inspector, apply a Gulp Plugin for Line Ending Corrector (A utility that makes sure your files have consistent line endings)...
3. And export the `styles.min.css` file to `dist/css/` folder.

```
gulp css
```

or

```
gulp sassCompile
gulp cssCompile
```

## Compile js

This command is able to:

1. Creates the `dist` folder if it does not exist.
2. Get list of files of `filesJsCompile` variable, compile the files with Babel NPM package, compress it and apply a Gulp Plugin for Line Ending Corrector (A utility that makes sure your files have consistent line endings)...
3. And export the `scripts.min.js` file to `dist/js` folder.
4. Copy files of libraries js inside `src/js/libs` and paste into `dist/js/libs` folder.

```
gulp js
```

or

```
gulp jsCompile
gulp jsCopy
```

## Working...

> The validation of the fields remains to be improved, hide / show fields as they are filled...and more.
