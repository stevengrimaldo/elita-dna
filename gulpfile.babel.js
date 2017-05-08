import gulp from 'gulp';
import autoprefixer from 'autoprefixer';
import browserify from 'browserify';
import watchify from 'watchify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import eslint from 'gulp-eslint';
import babelify from 'babelify';
import uglify from 'gulp-uglify';
import rimraf from 'rimraf';
import notify from 'gulp-notify';
import browserSync, { reload } from 'browser-sync';
import sourcemaps from 'gulp-sourcemaps';
import postcss from 'gulp-postcss';
import rename from 'gulp-rename';
import nested from 'postcss-nested';
import inline from 'postcss-strip-inline-comments';
import cssnano from 'gulp-cssnano';
import imagemin from 'gulp-imagemin';
import pngquant from 'imagemin-pngquant';
import runSequence from 'run-sequence';
import eStream from 'event-stream';
import factor from 'factor-bundle';
import assemble from 'assemble';
import scss from 'postcss-scss';
import handlebarsHelpers from 'handlebars-helpers';
import prettify from 'gulp-prettify';
import sass from 'gulp-sass';
import csswring from 'csswring';

const app = assemble();

const paths = {
  bundle: 'app.js',
  entry: './src/global/app.js',
  srcCss: './src/scss/**/**/*.scss',
  srcImg: './src/media/img/**/*',
  srcLint: ['./src/js/polymap.js'],
  build: './build',
  buildJs: './build/js',
  buildImg: './build/media/img',
  buildDeploy: './build/**/*'
};

const entries = [
  './src/global/app.js',
  './src/components/accordion/accordion.js',
  './src/components/articles/articles.js',
  './src/components/documents/documents.js',
  './src/components/featured-content/featured-content.js',
  './src/components/hero/hero.js',
  './src/components/locations/locations.js',
  './src/components/profile/profile.js',
  './src/components/resources/resources.js',
  './src/components/reviews/reviews.js',
  './src/components/solutions/solutions.js',
  './src/components/split-content/split-content.js',
  './src/components/team/team.js',
  './src/components/tools/tools.js',
  './src/components/form/form.js'
];

const output = [
  './build/js/app.js',
  './build/js/components/accordion.js',
  './build/js/components/articles.js',
  './build/js/components/documents.js',
  './build/js/components/featured-content.js',
  './build/js/components/hero.js',
  './build/js/components/locations.js',
  './build/js/components/profile.js',
  './build/js/components/resources.js',
  './build/js/components/reviews.js',
  './build/js/components/solutions.js',
  './build/js/components/split-content.js',
  './build/js/components/team.js',
  './build/js/components/tools.js',
  './build/js/components/form.js'
];

const customOpts = {
  entries: entries,
  debug: true,
  cache: {},
  packageCache: {}
};

const options = {
  locale: 'en-GB',
  timestamp: Date.now(),
  assets: './build/media/img/'
}

const opts = Object.assign({}, watchify.args, customOpts);

gulp.task('clean', cb => {
  rimraf('./build/js/components/*', cb);
});

gulp.task('browserSync', () => {
  browserSync({
    server: {baseDir: './build/'}
  });
});

gulp.task('watchify', () => {
  const bundler = watchify(browserify(opts));

  function rebundle() {
    return bundler.plugin(factor, {o: output})
      .bundle()
      .on('error', notify.onError())
      .pipe(source('common.js'))
      .pipe(gulp.dest(paths.buildJs))
      .pipe(reload({stream: true}));
  }

  bundler.transform(babelify)
  .on('update', rebundle);
  return rebundle();
});

gulp.task('browserify', () => {
  return browserify({entries: entries})
  .plugin(factor, {o: output})
  .bundle()
  .pipe(source('common.js'))
  .pipe(buffer())
  .pipe(uglify())
  .pipe(gulp.dest(paths.buildJs));
});

gulp.task('styles', () => {
  gulp.src('./src/**/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed',
      includePaths: ['node_modules/susy/sass']
    }).on('error', sass.logError))
    .pipe(postcss([autoprefixer({
      browsers: ['> 2%'],
      cascade: false,
      map: true,
      remove: true
    }), csswring({removeAllComments: true})]))
    .pipe(sourcemaps.write('.'))
    .pipe(rename({extname: '.min.css'}))
    .pipe(gulp.dest('./build/css'))
    .pipe(reload({stream: true}));
});

gulp.task('images', () => {
  gulp.src(paths.srcImg)
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    }))
    .pipe(gulp.dest(paths.buildImg))
    .pipe(reload({stream: true}));
});

gulp.task('html', () => {
  // Find layouts and partials
  app.layouts('./src/global/**/*.hbs');
  app.partials('./src/components/**/*.hbs');

  // Add data
  app.data('./src/components/**/*.{json,yml}');
  app.data({imagePath: './build/media/img/'});

  // Add classic helpers
  app.helpers(handlebarsHelpers(), app.helpers);

  // Add options
  app.option('layout', 'layout.hbs');

  // Build templates
  return app.src('./src/pages/*.hbs')
    .pipe(app.renderFile(options))
    .pipe(rename({extname: '.html'}))
    .pipe(prettify({indent_size: 2}))
    .pipe(app.dest('./build/'))
    .pipe(reload({stream: true}));
});

gulp.task('lint', () => {
  gulp.src(paths.srcLint)
  .pipe(eslint())
  .pipe(eslint.format());
});

gulp.task('moveCss', () => {
  gulp.src("./build/css/**/**")
    .pipe(gulp.dest('./drupal/sites/all/themes/elitedna/css'));
});

gulp.task('moveJs', () => {
  gulp.src("./build/js/**/**")
    .pipe(gulp.dest('./drupal/sites/all/themes/elitedna/js'));
});

gulp.task('moveMedia', () => {
  gulp.src("./build/media/**/**")
    .pipe(gulp.dest('./drupal/sites/all/themes/elitedna/media'));
});

gulp.task('watchTask', () => {
  gulp.watch(paths.srcImg, ['images']);
  gulp.watch('./src/**/**/*.scss', ['styles']);
  gulp.watch(paths.srcLint, ['lint']);
  gulp.watch('./src/**/**/*.hbs', ['html']);
  gulp.watch('./src/components/**/*.{json,yml}', ['html']);
});

gulp.task('watch', cb => {
  runSequence('clean', ['browserSync', 'watchTask', 'watchify', 'styles', 'lint', 'html', 'images'], cb);
});

gulp.task('build', cb => {
  runSequence('clean', ['browserify', 'styles', 'lint', 'html', 'images'], cb);
});

gulp.task('move', cb => {
  runSequence('build', ['moveCss', 'moveJs', 'moveMedia'], cb);
});
