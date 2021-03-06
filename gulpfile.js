// Node modules
var fs = require('fs'), vm = require('vm'), merge = require('deeply'), chalk = require('chalk'), es = require('event-stream');

// Gulp and plugins
var gulp = require('gulp'), rjs = require('gulp-requirejs-bundler'), concat = require('gulp-concat'), clean = require('gulp-clean'),
    replace = require('gulp-replace'), uglify = require('gulp-uglify'), htmlreplace = require('gulp-html-replace'), typescript = require('gulp-tsc'),
    webServer = require('gulp-webserver'), gutil = require('gulp-util'), header = require('gulp-header'), rename = require('gulp-rename'),
    exec = require('child_process').exec;

// WebServer
gulp.task('web-server', ['auto-ts'], function() {
    gulp.src('./src')
        .pipe(webServer({
            host: '0.0.0.0',
            fallback: 'index.html',
            livereload: {
                enable: true,
                port: 8001
            },
            directoryListing: true,
            port: 1314
        }));
});

gulp.task('auto-ts', ['ts'], function(){
    gulp.watch('**/*.ts', function() {
        gulp.src(['**/*.ts'])
            .pipe(typescript({
                module: 'amd',
                sourcemap: true,
                outDir: './',
                target: 'es5'
            }))
            .on('error', gutil.log)
            .pipe(gulp.dest('./'));
    });
});

var requireJsRuntimeConfig = vm.runInNewContext(fs.readFileSync('src/app/require.config.js') + '; require;');
requireJsOptimizerConfig = merge(requireJsRuntimeConfig, {
    out: 'scripts.js',
    baseUrl: './src',
    name: 'app/startup',
    paths: {
        requireLib: 'bower_modules/requirejs/require'
    },
    include: [
        'requireLib'
    ],
    insertRequire: ['app/startup'],
    bundles: {
    }
});


// Compile all .ts files, producing .js and source map files alongside them
gulp.task('ts', function() {
    return gulp.src(['**/*.ts'])
        .pipe(typescript({
            module: 'amd',
            sourcemap: true,
            outDir: './',
            target: 'es5'
        }))
        .pipe(gulp.dest('./'));
});

// Discovers all AMD dependencies, concatenates together all required .js files, minifies them
gulp.task('js', ['ts'], function () {
    return rjs(requireJsOptimizerConfig)
        .pipe(uglify({ preserveComments: 'some' }))
        .pipe(gulp.dest('./dist/'));
});

// Concatenates CSS files, rewrites relative paths to Bootstrap fonts, copies Bootstrap fonts
gulp.task('css', function () {
    var bowerCss = gulp.src('src/bower_modules/components-bootstrap/css/bootstrap.min.css')
        .pipe(replace(/url\((')?\.\.\/fonts\//g, 'url($1fonts/')),
        appCss = gulp.src('src/css/blog.css').pipe(replace(/url\((')?\.\.\/imgs\//g, 'url($1imgs/')),
        postCss = gulp.src('src/css/post.css'),
        combinedCss = es.concat(bowerCss, appCss, postCss).pipe(concat('css.css')),
        fontFiles = gulp.src('./src/bower_modules/components-bootstrap/fonts/!*', { base: './src/bower_modules/components-bootstrap/' }),
        imgFiles = gulp.src('./src/imgs/*', {base: './src/'}),
        postFiles = gulp.src('./src/posts/**/*', {base: './src/'});
    return es.concat(combinedCss, fontFiles, imgFiles, postFiles)
        .pipe(gulp.dest('./dist/'));
});

// Copies index.html, replacing <script> and <link> tags to reference production URLs
gulp.task('html', function() {
    return gulp.src('./src/index.html')
        .pipe(htmlreplace({
            'css': 'css.css',
            'js': 'scripts.js'
        }))
        .pipe(gulp.dest('./dist/'));
});

// Removes all files from ./dist/, and the .js/.js.map files compiled from .ts
gulp.task('clean', function() {
    var distContents = gulp.src('./dist/**/*', { read: false }),
        generatedJs = gulp.src(['src/**/*.js', 'src/**/*.js.map', 'test/**/*.js', 'test/**/*.js.map'], { read: false })
            .pipe(es.mapSync(function(data) {
                // Include only the .js/.js.map files that correspond to a .ts file
                return fs.existsSync(data.path.replace(/\.js(\.map)?$/, '.ts')) ? data : undefined;
            }));
    return es.merge(distContents, generatedJs).pipe(clean());
});

gulp.task('default', ['html', 'js', 'css'], function(callback) {
    callback();
    console.log('\nPlaced optimized files in ' + chalk.magenta('dist/\n'));
});
