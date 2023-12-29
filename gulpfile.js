"use strict";

// DEPENDENCIES
// =================================================
import browserSync from "browser-sync";
import gulp from "gulp";
import gulpAutoprefixer from "gulp-autoprefixer";
import gulpBabel from "gulp-babel";
import gulpCleanCss from "gulp-clean-css";
import gulpConcat from "gulp-concat";
import gulpLineEndingCorrector from "gulp-line-ending-corrector";
import gulpRename from "gulp-rename";
import gulpSass from "gulp-sass";
import * as sass from "sass";
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
function htmlCopy() {
	return copyFiles(
		pathsFront.src.html,
		pathsFront.dist.html
	);
};

// CSS
// -------------------------------------------------
function sassCompile() {
	return gulp
		.src(pathsFront.src.sass)
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
		.pipe(gulpRename("styles.min.css"))
		.pipe(gulp.dest(pathsFront.dist.css));
};

// JS
// -------------------------------------------------
function jsLibCopy() {
	return copyDirectory(
		`${paths.src.js}libs`,
		`${paths.dist.js}libs`
	);
};

function jsCompile() {
	return gulp
		.src(pathsFront.src.js)
		.pipe(
			gulpBabel({
				presets: [
					"@babel/preset-env",
				],
			})
		)
		.pipe(gulpConcat("scripts.min.js"))
		.pipe(gulpUglify())
		.pipe(gulpLineEndingCorrector())
		.pipe(gulp.dest(pathsFront.dist.js));
};

// ICON
// -------------------------------------------------
function fontsIcomoonCopy() {
	return copyDirectory(
		`${pathsFront.src.icons}fonts`,
		`${pathsFront.dist.icons}fonts`
	);
};

function cssIcomoonMinify() {
	return gulp
		.src(`${paths.src.icons}style.css`)
		.pipe(
			gulpSourcemaps.init({
				loadMaps: true,
				largeFile: true,
			})
		)
		.pipe(gulpCleanCss())
		.pipe(gulpSourcemaps.write("./maps/"))
		.pipe(gulpLineEndingCorrector())
		.pipe(gulpRename("fonts.min.css"))
		.pipe(gulp.dest(paths.dist.icons));
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
			jsLibCopy,
			jsCompile
		)
	);

	gulp.watch(
		`${paths.src.icons}${paths.files.base}`,
		gulp.series(
			fontsIcomoonCopy,
			cssIcomoonMinify
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
	htmlCopy,
    sassCompile,
    jsLibCopy,
    jsCompile,
    fontsIcomoonCopy,
	cssIcomoonMinify,
	watch
};

// TASKS
// =================================================
gulp.task(
	"default",
	gulp.series(
		htmlCopy,
		sassCompile,
		jsLibCopy,
		jsCompile,
		fontsIcomoonCopy,
		cssIcomoonMinify,
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
		jsLibCopy,
		jsCompile,
		fontsIcomoonCopy,
		cssIcomoonMinify
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
		jsLibCopy,
		jsCompile
	)
);

gulp.task(
	"icon",
	gulp.series(
		fontsIcomoonCopy,
		cssIcomoonMinify
	)
);

gulp.task(
	"watch",
	watch
);
