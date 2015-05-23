/*!
 * gulp
 * $ npm install gulp-less gulp-autoprefixer gulp-minify-css gulp-jshint gulp-concat gulp-uglify gulp-imagemin gulp-notify gulp-rename gulp-livereload gulp-cache del --save-dev
 */

// Load plugins
var gulp = require('gulp'),
    less = require('gulp-less'),
    sourcemaps = require('gulp-sourcemaps'),
    csscomb = require('gulp-csscomb'),
    uncss = require('gulp-uncss'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    csso = require('gulp-csso'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    processhtml = require('gulp-processhtml'),
    mainBowerFiles = require('main-bower-files'),
    runSequence = require('run-sequence'),
    notifier = require('node-notifier'),
    pngquant = require('imagemin-pngquant'),
    del = require('del');

// Copy fonts
gulp.task('fonts', function(){
    gulp.src('src/css/fonts/*')
        .pipe(gulp.dest('dist/css/fonts'))
    .pipe(livereload())
});

// Styles
var path = require('path');
gulp.task('less', function() {
    return gulp.src('src/css/style.less')
        .pipe(sourcemaps.init())
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(autoprefixer('> 2%'))
        .pipe(csscomb())
        .pipe(gulp.dest('dist/css'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifycss())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist/css'))
        .pipe(livereload())
});

// Copy hichcharts to src/js, because in another way it is not build correctly
gulp.task('highcharts-copy', function(){
    gulp.src('bower_components/highcharts/highcharts-all.js')
        .pipe(gulp.dest('src/js/highcharts-all.js'))
});

// Copy ekko-lightbox to src/js, because in another way it is not build correctly
gulp.task('lightbox-copy', function(){
    gulp.src('bower_components/ekko-lightbox/dist/ekko-lightbox.js')
        .pipe(gulp.dest('src/js/ekko-lightbox.js'))
});

// Scripts
gulp.task('js', ['highcharts-copy', 'lightbox-copy'], function() {
    return gulp.src('src/js/**/*.js')
        //.pipe(sourcemaps.init())
        //.pipe(jshint('.jshintrc'))
        //.pipe(jshint.reporter('jshint-stylish'))
        .pipe(concat('main.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        //.pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/js'))
        .pipe(livereload())
});

// Images
gulp.task('images', function() {
    return gulp.src('src/img/**/*')
        // .pipe(cache(imagemin({
        //     optimizationLevel: 3,
        //     progressive: true,
        //     use: [pngquant()],
        //     interlaced: true
        // })))
        .pipe(gulp.dest('dist/img'))
        .pipe(livereload())
});

// HTML
gulp.task('html', function() {
    return gulp.src('src/**/*.html')
        .pipe(processhtml({
            recursive: true
        }))
        .pipe(gulp.dest('dist'))
        .pipe(livereload())
});

// Clean
gulp.task('clean', function(cb) {
    del(['dist/html'], cb)
});

// Bower
gulp.task('bower', function() {
    return gulp.src(mainBowerFiles())
        .pipe(/* what you want to do with the files */)
});



// Watch
gulp.task('watch', function() {

    // Watch .less files
    gulp.watch('src/css/**/*.less', ['less']);

    // Watch .js files
    gulp.watch('src/js/**/*.js', ['js']);

    // Watch image files
    gulp.watch('src/img/**/*', ['images']);

    // Watch html files
    gulp.watch('src/**/*.html', ['html']);

    // Create LiveReload server
    livereload.listen();

    // Watch any files in dist/, reload on change
    gulp.watch(['dist/**']).on('change', livereload.changed);

});


/*
    Manage bower libs via Gulp
    http://truongtx.me/2014/07/18/using-bower-with-gulp/
 */
var bower = require('bower');

gulp.task('bower', function(cb){
    bower.commands.install([], {save: true}, {})
        .on('end', function(installed){
            cb(); // notify gulp that this task is finished
        });
});


/*
    Autobundle bower lib
    http://truongtx.me/2014/07/18/using-bower-with-gulp/
*/
var underscore = require('underscore');
var underscoreStr = require('underscore.string');

var exclude = ['highcharts', 'ekko-lightbox'];

gulp.task('bundle-libraries-auto', ['bower'], function(){
    var bowerFile = require('./bower.json');
    var bowerPackages = bowerFile.dependencies;
    var bowerDir = './bower_components';
    var packagesOrder = [];
    var mainFiles = [];

    // Function for adding package name into packagesOrder array in the right order
    function addPackage(name){
        // package info and dependencies
        var info = require(bowerDir + '/' + name + '/bower.json');
        var dependencies = info.dependencies;

        // add dependencies by repeat the step
        if(!!dependencies){
            underscore.each(dependencies, function(value, key){
                if(exclude.indexOf(key) === -1){
                    addPackage(key);
                }
            });
        }

        // and then add this package into the packagesOrder array if they are not exist yet
        if(packagesOrder.indexOf(name) === -1){
            packagesOrder.push(name);
        }
    }

    // calculate the order of packages
    underscore.each(bowerPackages, function(value, key){
        if(exclude.indexOf(key) === -1){ // add to packagesOrder if it's not in exclude
            addPackage(key);
        }
    });

    // get the main files of packages base on the order
    underscore.each(packagesOrder, function(bowerPackage){
        var info = require(bowerDir + '/' + bowerPackage + '/bower.json');
        var main = info.main;
        var mainFile = main;

        // get only the .js file if mainFile is an array
        if(underscore.isArray(main)){
            underscore.each(main, function(file){
                if(underscoreStr.endsWith(file, '.js')){
                    mainFile = file;
                }
            });
        }

        // make the full path
        mainFile = bowerDir + '/' + bowerPackage + '/' + mainFile;

        // only add the main file if it's a js file
        if(underscoreStr.endsWith(mainFile, '.js')){
            mainFiles.push(mainFile);
        }
    });

    // run the gulp stream
    return gulp.src(mainFiles)
        .pipe(concat('bower_libs.js'))
        .pipe(gulp.dest('./src/js'));
});

// Main build task
gulp.task('build', function(callback) {
    runSequence('html',
        'bundle-libraries-auto',
        'js',
        'less',
        'fonts',
        'images',
        'clean',
        callback)
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['build'], function(){
    notifier.notify({ title: 'Production Build', message: 'Done' });
});