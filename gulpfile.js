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
    rootFilesSass = "**/*.sass",
    rootFilesCss  = "**/*.css",
    rootFilesJs   = "**/*.js";

// Watch
let WatchFilesCss = rootDistCss + rootFilesCss,
    WatchFilesJs  = rootDistJs + rootFilesJs;

// Node modules
var nodeModules = "./node_modules/";

// Roots used to concat the files in a specific order.
let filesJs = [
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
function server() {
	browserSync.init({
		server: {
			port: 3000,
			baseDir: ".",
			browser: ["google-chrome", "google-chrome", "firefox", "opera"],
		},
	});
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

function icomoonCopy()
{
    return gulp.src(rootSrcIcomoon + 'fonts/*', {base: "./" + rootSrcIcomoon})
               .pipe(gulp.dest(rootDistIcomoon));
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
        .src(filesJs)
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


// WATCH and EXPORTS
// =================================================
function watch()
{
    server();
    
    gulp.watch(rootSrcJs + rootFilesJs, jsCompile);
    gulp.watch(rootSrcSass + rootFilesSass, gulp.series(icomoonMinify, icomoonCopy));
    gulp.watch(rootSrcSass + rootFilesSass, gulp.series(sassCompile, cssCompile));
    
    gulp.watch([WatchFilesCss, WatchFilesJs]).on("change", reload);
}

exports.server = server;
exports.icomoonMinify = icomoonMinify;
exports.icomoonCopy   = icomoonCopy;
exports.sassCompile   = sassCompile;
exports.cssCompile    = cssCompile;
exports.jsCompile     = jsCompile;

exports.watch = watch;


gulp.task("default", gulp.parallel(watch));

gulp.task("server", gulp.series(server));

gulp.task("all", gulp.series(sassCompile, cssCompile, jsCompile, icomoonMinify, icomoonCopy));

gulp.task("icomoon", gulp.series(icomoonMinify, icomoonCopy));

gulp.task("css", gulp.series(sassCompile, cssCompile, icomoonMinify));

gulp.task("js", gulp.series(jsCompile));