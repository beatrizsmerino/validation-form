"use strict";

// DEPENDENCIES
// =================================================
import * as sass from "sass";
import browserSync from "browser-sync";
import gulp from "gulp";
import gulpAutoprefixer from "gulp-autoprefixer";
import gulpBabel from "gulp-babel";
import gulpCleanCss from "gulp-clean-css";
import gulpConcat from "gulp-concat";
import gulpLineEndingCorrector from "gulp-line-ending-corrector";
import gulpRename from "gulp-rename";
import gulpSass from "gulp-sass";
import gulpSourcemaps from "gulp-sourcemaps";
import gulpUglify from "gulp-uglify";

const createBrowserSync = browserSync.create();
const reloadBrowserSync = createBrowserSync.reload;
const sassCompiler = gulpSass(sass);

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

// FRONT
// -------------------------------------------------
const pathsFront = {
	src: {
		html: `${paths.src.base}${paths.files.html}`,
		sass: `${paths.src.sass}styles.sass`,
		js: [
			`${paths.src.js}components/components-form-require.js`,
			`${paths.src.js}components/components-form-validation.js`,
			`${paths.src.js}components/components-form-validation-ckeditor.js`,
			`${paths.src.js}components/components-message.js`,
			//----------------
			`${paths.src.js}page/page-account.js`,
			//----------------
			`${paths.src.js}scripts.js`,
		],
		icons: paths.src.icons
	},
	dist: {
		html: paths.dist.base,
		css: paths.dist.css,
		js: paths.dist.js,
		icons: paths.dist.icons
	}
};

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

function sassCompile(src, dist, fileName) {
	return gulp
		.src(src)
		.pipe(
			gulpSourcemaps.init({
				loadMaps: true,
			})
		)
		.pipe(
			sassCompiler({
				outputStyle: "compressed",
			}).on(
				"error",
				sassCompiler.logError
			)
		)
		.pipe(
			gulpAutoprefixer({
				versions: [
					"last 2 versions",
				],
			})
		)
		.pipe(gulpSourcemaps.write())
		.pipe(gulpLineEndingCorrector())
		.pipe(gulpRename(fileName))
		.pipe(gulp.dest(dist));
};

function cssCompile(src, dist, fileName) {
	return gulp
		.src(src)
		.pipe(
			gulpSourcemaps.init({
				loadMaps: true,
				largeFile: true,
			})
		)
		.pipe(gulpCleanCss())
		.pipe(gulpSourcemaps.write("./maps/"))
		.pipe(gulpLineEndingCorrector())
		.pipe(gulpRename(fileName))
		.pipe(gulp.dest(dist));
}

function jsCompile(src, dist, fileName) {
	return gulp
		.src(src)
		.pipe(
			gulpBabel({
				presets: [
					"@babel/preset-env",
				],
			})
		)
		.pipe(gulpConcat(fileName))
		.pipe(gulpUglify())
		.pipe(gulpLineEndingCorrector())
		.pipe(gulp.dest(dist));
};

// FUNCTIONS & TASKS
// =================================================
function createServer() {
	createBrowserSync.init({
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
function front__htmlCopy() {
	return copyFiles(
		pathsFront.src.html,
		pathsFront.dist.html
	);
};

// CSS
// -------------------------------------------------
function front__sassCompile() {
	return sassCompile(
		pathsFront.src.sass,
		pathsFront.dist.css,
		"styles.min.css"
	);
};

// JS
// -------------------------------------------------
function front__jsLibCopy() {
	return copyDirectory(
		`${paths.src.js}libs/`,
		`${paths.dist.js}libs/`
	);
};

function front__jsCompile() {
	return jsCompile(
		pathsFront.src.js,
		pathsFront.dist.js,
		"scripts.min.js"
	);
};

// ICON
// -------------------------------------------------
function front__fontsIcomoonCopy() {
	return copyDirectory(
		`${pathsFront.src.icons}fonts/`,
		`${pathsFront.dist.icons}fonts/`
	);
};

function front__cssIcomoonMinify() {
	return cssCompile(
		`${paths.src.icons}style.css`,
		paths.dist.icons,
		"fonts.min.css"
	);
};

// WATCH
// =================================================
function watch() {
	createServer();

	gulp.watch(
		`${paths.src.base}${paths.files.html}`,
		front__htmlCopy
	);

	gulp.watch(
		`${paths.src.sass}${paths.files.sass}`,
		front__sassCompile
	);

	gulp.watch(
		`${paths.src.js}${paths.files.js}`,
		gulp.series(
			front__jsLibCopy,
			front__jsCompile
		)
	);

	gulp.watch(
		`${paths.src.icons}${paths.files.base}`,
		gulp.series(
			front__fontsIcomoonCopy,
			front__cssIcomoonMinify
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
		reloadBrowserSync
	);
};

// EXPORTS
// =================================================
export {
	createServer,
	front__htmlCopy,
	front__sassCompile,
	front__jsLibCopy,
	front__jsCompile,
	front__fontsIcomoonCopy,
	front__cssIcomoonMinify,
	watch
};

// TASKS
// =================================================
gulp.task(
	"default",
	gulp.series(
		front__htmlCopy,
		front__sassCompile,
		front__jsLibCopy,
		front__jsCompile,
		front__fontsIcomoonCopy,
		front__cssIcomoonMinify,
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
		front__htmlCopy,
		front__sassCompile,
		front__jsLibCopy,
		front__jsCompile,
		front__fontsIcomoonCopy,
		front__cssIcomoonMinify
	)
);

gulp.task(
	"html",
	front__htmlCopy
);

gulp.task(
	"css",
	front__sassCompile
);

gulp.task(
	"js",
	gulp.series(
		front__jsLibCopy,
		front__jsCompile
	)
);

gulp.task(
	"icon",
	gulp.series(
		front__fontsIcomoonCopy,
		front__cssIcomoonMinify
	)
);

gulp.task(
	"watch",
	watch
);
