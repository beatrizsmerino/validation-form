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
const sass = require("gulp-sass")(require("sass"));
const srcMaps = require("gulp-sourcemaps");
const uglify = require("gulp-uglify");
const babel = require("gulp-babel");


// SETTINGS: FOLDER/FILE PATHS
// =================================================
const paths = {
	src: {
		base: "src/",
		sass: "src/sass/",
		js: "src/js/",
		icons: "src/icomoon/",
	},
	dist: {
		base: "dist/",
		css: "dist/css/",
		js: "dist/js/",
		icons: "dist/icomoon/",
	},
	files: {
		base: "**/*",
		html: "*.html",
		sass: "**/*.sass",
		css: "**/*.css",
		js: "**/*.js",
	},
};

// Paths used to concat the files in a specific order.
const filesJsCompile = [
	`${paths.src.js}components/components-form-require.js`,
	`${paths.src.js}components/components-form-validation.js`,
	`${paths.src.js}components/components-form-validation-ckeditor.js`,
	`${paths.src.js}components/components-message.js`,
	//----------------
	`${paths.src.js}page/page-account.js`,
	//----------------
	`${paths.src.js}scripts.js`,
];


// FUNCTIONS USED IN THE TASKS
// =================================================
function copyDirectory(directoryToCopy, directoryOutput) {
	return gulp
		.src(`${directoryToCopy}${paths.files.base}`)
		.pipe(gulp.dest(directoryOutput));
};

function copyFiles(filesToCopy, directoryOutput) {
	return gulp
		.src(filesToCopy)
		.pipe(gulp.dest(directoryOutput));
};


// FUNCTIONS & TASKS
// =================================================
function createServer() {
	browserSync.init({
		server: {
			baseDir: paths.dist.base,
			browser: [
				"google-chrome",
				"firefox",
			],
		},
	});
};

// HTML
// -------------------------------------------------
function htmlCopy() {
	return copyFiles(
		`${paths.src.base}${paths.files.html}`,
		paths.dist.base
	);
};

// CSS
// -------------------------------------------------
function sassCompile() {
	return gulp
		.src([
			`${paths.src.sass}styles.sass`,
		])
		.pipe(
			srcMaps.init({
				loadMaps: true,
			})
		)
		.pipe(
			sass({
				outputStyle: "compressed",
			}).on(
				"error",
				sass.logError
			)
		)
		.pipe(
			autoprefixer({
				versions: [
					"last 2 versions",
				],
			})
		)
		.pipe(srcMaps.write())
		.pipe(lineEndingCorrector())
		.pipe(rename("styles.min.css"))
		.pipe(gulp.dest(paths.dist.css));
};

// JS
// -------------------------------------------------
function jsCompile() {
	return gulp
		.src(filesJsCompile)
		.pipe(
			babel({
				presets: [
					"@babel/preset-env",
				],
			})
		)
		.pipe(concat("scripts.min.js"))
		.pipe(uglify())
		.pipe(lineEndingCorrector())
		.pipe(gulp.dest(paths.dist.js));
};

function jsCopy() {
	return copyDirectory(
		`${paths.src.js}libs`,
		`${paths.dist.js}libs`
	);
};

// ICON
// -------------------------------------------------
function icomoonMinify() {
	return gulp
		.src(`${paths.src.icons}style.css`)
		.pipe(
			srcMaps.init({
				loadMaps: true,
				largeFile: true,
			})
		)
		.pipe(cleanCss())
		.pipe(srcMaps.write("./maps/"))
		.pipe(lineEndingCorrector())
		.pipe(rename("fonts.min.css"))
		.pipe(gulp.dest(paths.dist.icons));
};

function icomoonCopy() {
	return copyDirectory(
		`${paths.src.icons}fonts`,
		`${paths.dist.icons}fonts`
	);
};


// WATCH
// =================================================
function watch() {
	createServer();

	gulp.watch(
		`${paths.src.base}${paths.files.html}`,
		htmlCopy
	);

	gulp.watch(
		`${paths.src.sass}${paths.files.sass}`,
		sassCompile
	);

	gulp.watch(
		`${paths.src.js}${paths.files.js}`,
		gulp.series(
			jsCompile,
			jsCopy
		)
	);

	gulp.watch(
		`${paths.src.icons}${paths.files.base}`,
		gulp.series(
			icomoonMinify,
			icomoonCopy
		)
	);

	gulp.watch(
		[
			`${paths.dist.base}${paths.files.html}`,
			`${paths.dist.css}${paths.files.css}`,
			`${paths.dist.js}${paths.files.js}`,
			`${paths.dist.icons}${paths.files.base}`,
		]
	).on(
		"change",
		reload
	);
};


// EXPORTS
// =================================================
exports.createServer = createServer;
exports.htmlCopy = htmlCopy;
exports.sassCompile = sassCompile;
exports.jsCompile = jsCompile;
exports.jsCopy = jsCopy;
exports.icomoonMinify = icomoonMinify;
exports.icomoonCopy = icomoonCopy;
exports.watch = watch;


// TASKS
// =================================================
gulp.task(
	"default",
	gulp.series(
		htmlCopy,
		sassCompile,
		jsCompile,
		jsCopy,
		icomoonMinify,
		icomoonCopy,
		watch
	)
);

gulp.task(
	"serve",
	createServer
);

gulp.task(
	"build",
	gulp.series(
		htmlCopy,
		sassCompile,
		jsCompile,
		jsCopy,
		icomoonMinify,
		icomoonCopy
	)
);

gulp.task(
	"html",
	htmlCopy
);

gulp.task(
	"css",
	sassCompile
);

gulp.task(
	"js",
	gulp.series(
		jsCompile,
		jsCopy
	)
);

gulp.task(
	"icon",
	gulp.series(
		icomoonMinify,
		icomoonCopy
	)
);

gulp.task(
	"watch",
	watch
);
