/*
 * This is a starter gulpfile.
 * The ucomm/local docker image will run it by default on `docker-compose up`.
 */

const gulp = require('gulp');
const browserSync = require('browser-sync');
const jshint = require('jshint');
const stylish = require('jshint-stylish');
const pluginOptions = {
  DEBUG: true,
  camelize: true,
  lazy: true
};

// Format for using `gulp-load-plugins` is plugins.name (e.g. plugins.sourcemaps or plugins.sass).
// This just saves on having to re-declare them as constants.
const plugins = require('gulp-load-plugins')(pluginOptions);

// Basic error handling function
const onError = (err) => {
  console.log(`Error = ${err}`);
}


// Example gulp tasks
// These are a starting point. Please update them according to the project needs.

/*
 *
 * This task will allow for the following workflow
 * - Output will go to ./build
 * - Basic gulp error handling
 * - use sass/scss syntax and turn it into css
 * - compress the output
 * - include vendor prefixes
 * - Sourcemaps will be included in ./build 
 * - The output should not be called style.css. 
 *   Reserve this for the main wordpress stylesheet.
 */

gulp.task('sass', () => {
  return gulp.src('./src/sass/main.scss')
    .pipe(plugins.plumber({
      errorHandler: onError()
    }))
    .pipe(plugins.sourcemaps.init())
      .pipe(plugins.sass({
        outputStyle: 'compressed'
      }))
      .pipe(plugins.autoprefixer({
        browsers: ['last 2 versions']
      }))
    .pipe(plugins.sourcemaps.write('.'))
    .pipe(gulp.dest('build', {
      overwrite: true
    }))
    .pipe(browserSync.stream());
});

/*
 *
 * This task will allow for the following workflow
 * - Output will go to ./build
 * - Basic gulp error handling
 * - All files in the root js directory will be
 *   - concatenated
 *   - able to use ES6 syntax via babel
 *   - minified/uglified
 * - Sourcemaps will be included in ./build 
 *
 */
gulp.task('js', () => {
  return gulp.src('./src/js/**/*.js')
    .pipe(plugins.plumber({
      errorHandler: onError()
    }))
    .pipe(plugins.sourcemaps.init())
      .pipe(plugins.concat('index.js'))
      .pipe(plugins.babel({
        presets: ['env']
      }))
      .pipe(plugins.uglify())
    .pipe(plugins.sourcemaps.write('.'))
    .pipe(gulp.dest('build', {
      overwrite: true
    }))
    .pipe(browserSync.stream());
});

gulp.task('watch', ['sass', 'js'], () => {
  console.log('watching files');
  const files = [
    './src/js/**/*.js',
    './src/sass/**/*.scss'
  ];
  // start browsersync and connect it to the web server on port 80.
  // the actual live reload will happen on localhost:3000
  browserSync.init(files, {
    proxy: "web:80",
    notify: true,
    open: false
  });
  gulp.watch(['./sass/**/*.scss'], ['sass']);
  gulp.watch(['./js/**/*.js'], ['js']);
});

gulp.task('default', () => {
  console.log('The default gulp task ran!\n Once you\'re ready, please change this task to build your project.\n To restart, change the docker-compose file to use `entrypoint: ["gulp", "watch"]`.\n Then use the command `docker-compose restart {image name}`');
});