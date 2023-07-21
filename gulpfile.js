"use strict";


// DEPENDENCIES
// =================================================
const gulp = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const browserSync = require("browser-sync").create();
const reload = browserSync.reload;
const cleanCss = require("gulp-clean-css");
const concat = require("gulp-concat");
const lineEndingCorrector = require("gulp-line-ending-corrector");
const rename = require("gulp-rename");
const sass = require("gulp-sass")(require('sass'));
const srcMaps = require("gulp-sourcemaps");
const uglify = require("gulp-uglify");
const babel = require("gulp-babel");



// SETTINGS: FOLDER/FILE PATHS
// =================================================
const proyectName = "./validation-form/";

// Path src
const pathSrc = "src/";
const pathSrcIcomoon = pathSrc + "icomoon/";
const pathSrcSass = pathSrc + "sass/";
const pathSrcJs = pathSrc + "js/";

// Path dist
const pathDist = "dist/";
const pathDistIcomoon = pathDist + "icomoon/";
const pathDistCss = pathDist + "css/";
const pathDistJs = pathDist + "js/";

// Path Files
const pathFiles = "**/*";
const pathFilesHtml = "*.html";
const pathFilesSass = "**/*.sass";
const pathFilesCss = "**/*.css";
const pathFilesJs = "**/*.js";

// Watch
const watchFilesHtml = pathDist + pathFilesHtml;
const watchFilesCss = pathDistCss + pathFilesCss;
const watchFilesJs = pathDistJs + pathFilesJs;
const watchFilesIcon = pathDistIcomoon + pathFiles;

// Node modules
const nodeModules = "./node_modules/";

// Paths used to concat the files in a specific order.
const filesJsCompile = [
	pathSrcJs + "components/components-form-require.js",
	pathSrcJs + "components/components-form-validation.js",
	pathSrcJs + "components/components-form-validation-ckeditor.js",
	pathSrcJs + "components/components-message.js",
	//----------------
	pathSrcJs + "page/page-account.js",
	//----------------
	pathSrcJs + "scripts.js",
];

const filesCssCompile = [pathDistCss + "styles.min.css"];



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
