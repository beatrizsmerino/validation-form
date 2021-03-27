"use strict";

// DEPENDENCIES
// =================================================
const gulp                = require("gulp"),
      autoprefixer        = require("gulp-autoprefixer"),
      browserSync         = require("browser-sync").create(),
      reload              = browserSync.reload,
      changed             = require("gulp-changed"),
      cleanCss            = require("gulp-clean-css"),
      concat              = require("gulp-concat"),
      imagemin            = require("gulp-imagemin"),
      lineEndingCorrector = require("gulp-line-ending-corrector"),
      rename              = require("gulp-rename"),
      sass                = require("gulp-sass"),
      srcMaps             = require("gulp-sourcemaps"),
      uglify              = require("gulp-uglify"),
      babel               = require("gulp-babel");


// ROOTS
// =================================================
let proyectName = "./validation-form/";

// Root src
let rootSrc        = "src/",
    rootSrcIcomoon = rootSrc + "icomoon/",
    rootSrcSass    = rootSrc + "sass/",
    rootSrcJs      = rootSrc + "js/";

// Root dist
let rootDist        = "dist/",
    rootDistIcomoon = rootDist + "icomoon/",
    rootDistCss     = rootDist + "css/",
    rootDistJs      = rootDist + "js/";

// Root Files
let rootFiles     = "**/*",
	rootFilesHtml = "*.html",
	rootFilesSass = "**/*.sass",
	rootFilesCss  = "**/*.css",
	rootFilesJs   = "**/*.js";

// Watch
let WatchFilesHtml = rootDist + rootFilesHtml,
	WatchFilesCss = rootDistCss + rootFilesCss,
	WatchFilesJs = rootDistJs + rootFilesJs,
	WatchFilesIcon = rootDistIcomoon + rootFiles;

// Node modules
var nodeModules = "./node_modules/";

// Roots used to concat the files in a specific order.
let filesJsCompile = [
    rootSrcJs + "scripts.js",
    //----------------
    rootSrcJs + "tools/tools-form-require.js",
    rootSrcJs + "tools/tools-form-validation.js",
    rootSrcJs + "tools/tools-form-validation-ckeditor.js",
    //----------------
    rootSrcJs + "components/components-form-require.js",
    rootSrcJs + "components/components-form-validation.js",
    rootSrcJs + "components/components-form-validation-ckeditor.js",
    //----------------
    rootSrcJs + "components/components-message.js",
    //----------------
    rootSrcJs + "page/page-account.js"
];

var filesCss = [rootDistCss + "styles.min.css"];


// GULP TASK
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

function htmlCopy(){
	return copyFiles(rootSrc + rootFilesHtml, rootDist);
}

function icomoonMinify()
{
    return gulp
        .src(rootSrcIcomoon + "style.css")
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
        .pipe(gulp.dest(rootDistIcomoon));
}

function icomoonCopy(){
	return copyDirectory(rootSrc + "icomoon/fonts", rootDist + "icomoon/fonts");
}

function sassCompile()
{
    return gulp
        .src([rootSrcSass + "styles.sass"])
        .pipe(
            srcMaps.init({
                loadMaps: true
            })
        )
        .pipe(
            sass({
                outputStyle: "compressed"
            }).on("error", sass.logError)
        )
        .pipe(
            autoprefixer({
                versions: ["last 2 versions"]
            })
        )
        .pipe(srcMaps.write())
        .pipe(lineEndingCorrector())
        .pipe(rename("styles.min.css"))
        .pipe(gulp.dest(rootDistCss));
}

function cssCompile()
{
    return gulp
        .src(filesCss)
        .pipe(concat("styles.min.css"))
        .pipe(srcMaps.write())
        .pipe(lineEndingCorrector())
        .pipe(gulp.dest(rootDistCss));
}

function jsCompile()
{
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
        .pipe(gulp.dest(rootDistJs));
}

function jsCopy() {
	return copyDirectory(rootSrc + "js/libs", rootDist + "js/libs");
}


// WATCH and EXPORTS
// =================================================
function watch()
{
    createServer();
    
	gulp.watch(rootSrc + rootFilesHtml, htmlCopy);
    gulp.watch(rootSrcJs + rootFilesJs, gulp.series(jsCompile, jsCopy));
    gulp.watch(rootSrcIcomoon + rootFiles, gulp.series(icomoonMinify, icomoonCopy));
    gulp.watch(rootSrcSass + rootFilesSass, gulp.series(sassCompile, cssCompile));
    
    gulp.watch([WatchFilesHtml, WatchFilesCss, WatchFilesIcon, WatchFilesJs]).on(
		"change",
		reload
	);
}

exports.createServer  = createServer;
exports.htmlCopy 	  = htmlCopy;
exports.icomoonMinify = icomoonMinify;
exports.icomoonCopy   = icomoonCopy;
exports.sassCompile   = sassCompile;
exports.cssCompile    = cssCompile;
exports.jsCompile     = jsCompile;
exports.jsCopy 		  = jsCopy;
exports.watch 		  = watch;


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

gulp.task("watch", gulp.parallel(watch));

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

gulp.task("icon", gulp.series(icomoonMinify, icomoonCopy));

gulp.task("css", gulp.series(sassCompile, cssCompile));

gulp.task("js", gulp.series(jsCompile, jsCopy));