"use strict";


// DEPENDENCIES
// =================================================
const gulp = require("gulp"),
	autoprefixer = require("gulp-autoprefixer"),
	browserSync = require("browser-sync").create(),
	reload = browserSync.reload,
	cleanCss = require("gulp-clean-css"),
	concat = require("gulp-concat"),
	lineEndingCorrector = require("gulp-line-ending-corrector"),
	rename = require("gulp-rename"),
	sass = require("gulp-sass")(require('sass')),
	srcMaps = require("gulp-sourcemaps"),
	uglify = require("gulp-uglify"),
	babel = require("gulp-babel");



// SETTINGS: FOLDER/FILE PATHS
// =================================================
let proyectName = "./validation-form/";

// Path src
let pathSrc = "src/",
	pathSrcIcomoon = pathSrc + "icomoon/",
	pathSrcSass = pathSrc + "sass/",
	pathSrcJs = pathSrc + "js/";

// Path dist
let pathDist = "dist/",
	pathDistIcomoon = pathDist + "icomoon/",
	pathDistCss = pathDist + "css/",
	pathDistJs = pathDist + "js/";

// Path Files
let pathFiles = "**/*",
	pathFilesHtml = "*.html",
	pathFilesSass = "**/*.sass",
	pathFilesCss = "**/*.css",
	pathFilesJs = "**/*.js";

// Watch
let watchFilesHtml = pathDist + pathFilesHtml,
	watchFilesCss = pathDistCss + pathFilesCss,
	watchFilesJs = pathDistJs + pathFilesJs,
	watchFilesIcon = pathDistIcomoon + pathFiles;

// Node modules
var nodeModules = "./node_modules/";

// Paths used to concat the files in a specific order.
let filesJsCompile = [
	pathSrcJs + "components/components-form-require.js",
	pathSrcJs + "components/components-form-validation.js",
	pathSrcJs + "components/components-form-validation-ckeditor.js",
	pathSrcJs + "components/components-message.js",
	//----------------
	pathSrcJs + "page/page-account.js",
	//----------------
	pathSrcJs + "scripts.js",
];

var filesCssCompile = [pathDistCss + "styles.min.css"];



// FUNTIONS USED IN THE TASKS
// =================================================
function createServer() {
	browserSync.init({
		server: {
			baseDir: "./dist",
			browser: ["google-chrome", "firefox"],
		},
	});
}

function copyDirectory(directoryToCopy, directoryOutput) {
	return gulp
		.src(`${directoryToCopy}/**/*`)
		.pipe(gulp.dest(directoryOutput));
}

function copyFiles(filesToCopy, directoryOutput) {
	return gulp.src(filesToCopy).pipe(gulp.dest(directoryOutput));
}

function htmlCopy() {
	return copyFiles(pathSrc + pathFilesHtml, pathDist);
}

function icomoonMinify() {
	return gulp
		.src(pathSrcIcomoon + "style.css")
		.pipe(
			srcMaps.init({
				loadMaps: true,
				largeFile: true
			})
		)
		.pipe(cleanCss())
		.pipe(srcMaps.write("./maps/"))
		.pipe(lineEndingCorrector())
		.pipe(rename("fonts.min.css"))
		.pipe(gulp.dest(pathDistIcomoon));
}

function icomoonCopy() {
	return copyDirectory(pathSrc + "icomoon/fonts", pathDist + "icomoon/fonts");
}

function sassCompile() {
	return gulp
		.src([pathSrcSass + "styles.sass"])
		.pipe(
			srcMaps.init({
				loadMaps: true,
			})
		)
		.pipe(
			sass({
				outputStyle: "compressed",
			}).on("error", sass.logError)
		)
		.pipe(
			autoprefixer({
				versions: ["last 2 versions"],
			})
		)
		.pipe(srcMaps.write())
		.pipe(lineEndingCorrector())
		.pipe(rename("styles.min.css"))
		.pipe(gulp.dest(pathDistCss));
}

function cssCompile() {
	return gulp
		.src(filesCssCompile)
		.pipe(concat("styles.min.css"))
		.pipe(srcMaps.write())
		.pipe(lineEndingCorrector())
		.pipe(gulp.dest(pathDistCss));
}

function jsCompile() {
	return gulp
		.src(filesJsCompile)
		.pipe(
			babel({
				presets: ["@babel/preset-env"]
			})
		)
		.pipe(concat("scripts.min.js"))
		.pipe(uglify())
		.pipe(lineEndingCorrector())
		.pipe(gulp.dest(pathDistJs));
}

function jsCopy() {
	return copyDirectory(pathSrc + "js/libs", pathDist + "js/libs");
}

function watch() {
	createServer();

	gulp.watch(pathSrc + pathFilesHtml, htmlCopy);
	gulp.watch(pathSrcJs + pathFilesJs, gulp.series(jsCompile, jsCopy));
	gulp.watch(pathSrcIcomoon + pathFiles, gulp.series(icomoonMinify, icomoonCopy));
	gulp.watch(pathSrcSass + pathFilesSass, gulp.series(sassCompile, cssCompile));

	gulp.watch([watchFilesHtml, watchFilesCss, watchFilesIcon, watchFilesJs]).on(
		"change",
		reload
	);
}



// EXPORTS
// =================================================
exports.createServer = createServer;
exports.htmlCopy = htmlCopy;
exports.icomoonMinify = icomoonMinify;
exports.icomoonCopy = icomoonCopy;
exports.sassCompile = sassCompile;
exports.cssCompile = cssCompile;
exports.jsCompile = jsCompile;
exports.jsCopy = jsCopy;
exports.watch = watch;



// TASKS
// =================================================
gulp.task(
	"default",
	gulp.series(
		htmlCopy,
		sassCompile,
		cssCompile,
		jsCompile,
		jsCopy,
		icomoonMinify,
		icomoonCopy,
		watch
	)
);

gulp.task("serve", gulp.series(createServer));

gulp.task(
	"build",
	gulp.series(
		htmlCopy,
		sassCompile,
		cssCompile,
		jsCompile,
		jsCopy,
		icomoonMinify,
		icomoonCopy
	)
);

gulp.task("html", gulp.series(htmlCopy));

gulp.task("css", gulp.series(sassCompile, cssCompile));

gulp.task("js", gulp.series(jsCompile, jsCopy));

gulp.task("icon", gulp.series(icomoonMinify, icomoonCopy));

gulp.task("watch", gulp.parallel(watch));
