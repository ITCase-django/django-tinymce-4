'use strict'

const gulp = require('gulp')
const plugins = require('gulp-load-plugins')({ pattern: ['gulp-*', 'gulp.*'] })

const argv = require('yargs').argv
const map = require('vinyl-map')

const TARGET_CSS = '__tinymce-4.css'
const TARGET_CSS_PATH = './tinymce_4/static/tinymce_4/css/'
const CSS_FILES = [
  './tinymce_4/static/tinymce_4/css/*.css',
  './tinymce_4/static/tinymce_4/css/**/*.css',
  '!tinymce_4/static/tinymce_4/css/__tinymce-4.css'
]

const options = {
  'development': argv.D || argv.dev || argv.develop || argv.development || false,
  'production': argv.P || argv.prod || argv.production || false
}

if (!options.development && !options.production) {
  options.development = true
}

const processors = [
  require('postcss-import'),
  require('postcss-nested'),
  require('postcss-color-function'),
  require('postcss-pxtorem')({
    rootValue: 16,
    unitPrecision: 5,
    propWhiteList: ['font', 'font-size', 'line-height', 'letter-spacing'],
    selectorBlackList: [],
    replace: true,
    mediaQuery: false,
    minPixelValue: 0
  }),
  require('autoprefixer')({
    browsers: [
      'Firefox >= 3',
      'Explorer >= 6',
      'Opera >= 9',
      'Chrome >= 15',
      'Safari >= 4',
      '> 1%'
    ],
    cascade: false
  }),
  require('postcss-custom-properties'),
  require('postcss-opacity'),
  require('postcss-reporter')({
    clearMessages: true
  })
]

gulp.task('css', () => {
  return gulp.src(CSS_FILES)
    .pipe(plugins.plumber({
      errorHandler: (err) => {
        plugins.util.log(
          plugins.util.colors.red('gulp-css:'),
          plugins.util.colors.yellow(err.message))
      }
    }))
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.postcss(processors))
    .pipe(plugins.concat(TARGET_CSS))
    .pipe(plugins.if(options.development,
      plugins.sourcemaps.write('.')))
    .pipe(plugins.if(options.production,
      plugins.cssnano({
        colormin: true,
        convertValues: true,
        discardComments: { removeAll: true },
        discardDuplicates: true,
        discardEmpty: true,
        mergeIdents: true,
        mergeLonghand: true,
        mergeRules: true,
        minifyFontValues: true,
        minifyGradients: true,
        minifySelectors: true,
        normalizeCharset: true,
        normalizeUrl: true,
        reduceTransforms: true,
        zindex: false
      })))
    .pipe(gulp.dest(TARGET_CSS_PATH))
    .pipe(plugins.filter('**/*.css'))
    .pipe(map((code, filename) => {
      plugins.util.log('CSS: ' +
      plugins.util.colors.green(filename))
    }))
})

gulp.task('watch', () => {
  plugins.watch(CSS_FILES, { verbose: true },
    plugins.batch((cb) => {
      gulp.series('css')()
      cb()
    }))
})

gulp.task('default',
  gulp.series('css')
)
