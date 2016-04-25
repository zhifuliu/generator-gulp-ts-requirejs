var config = require('./build/build.config.js');
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var runSequence = require('run-sequence');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var pkg = require('./package');
var del = require('del');
var _ = require('lodash');

var typescript = require('gulp-tsc');

// optimize images and put them in the dist folder
gulp.task('images', function() {
  return gulp.src(config.images)
    .pipe($.imagemin({
      progressive: true,
      interlaced: true
    }))
    .pipe(gulp.dest(config.dist + '/assets/images'))
    .pipe($.size({
      title: 'images'
    }));
});

//generate angular templates using html2js
gulp.task('templates', function() {
  return gulp.src(config.tpl)
    .pipe($.changed(config.tmp + '/js'))
    .pipe($.html2js({
      outputModuleName: 'templates',
      base: 'client',
      useStrict: true
    }))
    .pipe($.concat('templates.js'))
    .pipe(gulp.dest(config.tmp + '/js'))
    .pipe($.size({
      title: 'templates'
    }));
});

//generate css files from scss sources
gulp.task('sass', function() {
  return gulp.src(config.mainScss)
    .pipe($.sass())
    .on('error', $.sass.logError)
    .pipe(gulp.dest(config.tmp + '/css'))
    .pipe($.size({
      title: 'sass'
    }));
});

//build files for creating a dist release
gulp.task('build:dist', ['clean'], function(cb) {
  // runSequence(['jshint', 'build', 'copy', 'copy:assets', 'images'], 'html', cb);
  runSequence(['build', 'copy', 'copy:assets', 'images'], 'html', cb);
});

//build files for development
gulp.task('build', ['clean'], function(cb) {
  runSequence(['sass', 'templates'], cb);
});

//generate a minified css files, 2 js file, change theirs name to be unique, and generate sourcemaps
gulp.task('html', function() {
  var assets = $.useref.assets({
    searchPath: '{build/tmp,client}'
  });

  return gulp.src(config.index)
    .pipe(assets)
    .pipe($.sourcemaps.init())
    .pipe($.if('**/*main.js', $.ngAnnotate()))
    .pipe($.if('*.js', $.uglify({
      mangle: false,
    })))
    .pipe($.if('*.css', $.csso()))
    .pipe($.if(['**/*main.js', '**/*main.css'], $.header(config.banner, {
      pkg: pkg
    })))
    .pipe($.rev())
    .pipe(assets.restore())
    .pipe($.useref())
    .pipe($.revReplace())
    .pipe($.if('*.html', $.minifyHtml({
      empty: true
    })))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest(config.dist))
    .pipe($.size({
      title: 'html'
    }));
});

//copy assets in dist folder
gulp.task('copy:assets', function() {
  return gulp.src(config.assets, {
      dot: true
    }).pipe(gulp.dest(config.dist + '/assets'))
    .pipe($.size({
      title: 'copy:assets'
    }));
});

//copy assets in dist folder
gulp.task('copy', function() {
  return gulp.src([
      config.base + '/*',
      '!' + config.base + '/*.html',
      '!' + config.base + '/src'
    ]).pipe(gulp.dest(config.dist))
    .pipe($.size({
      title: 'copy'
    }));
});

//clean temporary directories
gulp.task('clean', del.bind(null, [config.dist, config.tmp]));

//lint files
gulp.task('jshint', function() {
  return gulp.src(config.js)
    .pipe(reload({
      stream: true,
      once: true
    }))
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.if(!browserSync.active, $.jshint.reporter('fail')));
});

/* tasks supposed to be public */


//default task
gulp.task('default', ['serve']); //

//run the server after having built generated files, and watch for changes
gulp.task('serve', ['auto-ts', 'build'], function() {
  browserSync({
    port: config.port,
    ui: {
      port: config.uiPort
    },
    ghostMode: config.ghostMode,
    notify: false,
    logPrefix: pkg.name,
    server: [config.tmp, 'client', 'server']
  });

  gulp.watch(config.index, reload);
  gulp.watch(config.scss, ['sass', reload]);
  // gulp.watch(config.js, ['jshint']);
  gulp.watch(config.js, reload);
  gulp.watch(config.tpl, ['templates', reload]);
  gulp.watch(config.assets, reload);
});

//run the app packed in the dist folder
gulp.task('serve:dist', ['build:dist'], function() {
  browserSync({
    port: config.port,
    ghostMode: config.ghostMode,
    ui: {
      port: config.uiPort
    },
    notify: false,
    server: [config.dist]
  });
});

// 为了结合 ts ，写的task
gulp.task('ts', function() {
    return gulp.src(['./client/**/*.ts', './server/**/*.ts'])
        .pipe(typescript({
            module: 'amd',
            sourcemaps: true,
            outDir: './',
            targets: 'es5'
        }))
        .pipe(gulp.dest('./'));
});
gulp.task('auto-ts', ['ts'], function() {
    gulp.watch(['./client/**/*.ts', './server/**/*.ts'], function() {
        gulp.src(['**/*.ts'])
            .pipe(typescript({
                module: 'amd',
                sourcemaps: true,
                outDir: './',
                targets: 'es5'
            }))
            .on('error', console.log('watch ts error'))
            .pipe(gulp.dest('./'));
    });
});
