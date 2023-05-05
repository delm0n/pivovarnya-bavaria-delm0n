const gulp = require("gulp");
const { src, series, parallel, dest } = require("gulp");
const concat = require("gulp-concat");
const terser = require("gulp-terser"); // минифицирует js

const gcmq = require("gulp-group-css-media-queries"); // сливает однинаковые media
const autoprefixer = require("gulp-autoprefixer"); // расставляет префиксы  // сливает однинаковые media
const cleancss = require("gulp-clean-css"); // минифицирует css
const modifyCssUrls = require("gulp-modify-css-urls"); // меняет пути изображений в css

const imagemin = require("gulp-imagemin"); // оптимизирует изображения
const pngquant = require("imagemin-pngquant"); // качественно сжимает png
const webp = require("gulp-webp"); // конвертирует изображения в webp

const clean = require("gulp-clean");
const webpack = require("webpack-stream");
const { VueLoaderPlugin } = require("vue-loader");
const babel = require("gulp-babel");
var gulpif = require("gulp-if");

// менять вручную для вебпака
// true для разработки (без минификации и babel)
//false на продакшен
const isDev = !true;

//сборка webpack
const configWebpack = {
  output: {
    filename: "main.js",
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
    ],
  },
  optimization: {
    minimize: false,
  },
  plugins: [new VueLoaderPlugin()],
  // mode: "development",
  mode: isDev ? "development" : "production",
};

// пути к файлам
const paths = {
  styles: {
    src: [
      "src/styles/header-style.css",
      "src/styles/main-style.css",
      "src/styles/opt-style.css",
    ],
    dest: "build/styles",
  },
  images: {
    src: "src/images/**.*",
    dest: "build/images",
  },
  vue: {
    src: "src/vue/main.js",
    dest: "build/vue",
  },
};

// сборка стилей
function cssTask() {
  return (
    src(paths.styles.src)
      // .pipe(concat("style.min.css"))
      .pipe(gcmq())
      .pipe(autoprefixer())
      .pipe(
        modifyCssUrls({
          modify: function (url, filePath) {
            return url.replace("/build", "../../build");
          },
        })
      )
      .pipe(
        modifyCssUrls({
          modify: function (url, filePath) {
            return url.replace("/static", "../../static");
          },
        })
      )
      .pipe(
        cleancss({
          level: {
            1: {
              specialComments: 0,
            },
          },
        })
      )
      .pipe(dest(paths.styles.dest))
  );
}
// сборка стилей

//сборка шаблонов vue
function vueTask() {
  return src(paths.vue.src)
    .pipe(webpack(configWebpack))
    .pipe(
      gulpif(
        !isDev,
        babel({
          presets: ["@babel/env"],
        })
      )
    )
    .pipe(gulpif(!isDev, terser()))
    .pipe(dest(paths.vue.dest));
}
function vueWatch() {
  gulp.watch(
    ["src/vue/components/*.vue", "src/vue/helpers/*.vue", "src/vue/store.js"],
    gulp.series(vueTask)
  );
}

function vueClean() {
  return gulp.src("build/vue/*", { read: false }).pipe(clean());
}
//сборка шаблонов vue

// оптимизация изображений
function imgTask() {
  return src(paths.images.src)
    .pipe(
      imagemin([
        imagemin.mozjpeg({ quality: 80, progressive: true }),
        pngquant({ quality: [0.8, 0.8] }),
      ])
    )
    .pipe(gulp.dest(paths.images.dest));
}
function webpTask() {
  return src(paths.images.src).pipe(webp()).pipe(gulp.dest(paths.images.dest));
}
function imgClean() {
  return gulp.src("build/images/*", { read: false }).pipe(clean());
}
// оптимизация изображений

// на случай минификации скрипта
// function jsTask() {
//   return src("static/scripts/smoothScroll.js")
//     .pipe(concat("smoothScroll.min.js"))
//     .pipe(terser())
//     .pipe(dest("static/scripts"));
// }
// exports.js = jsTask;
// на случай минификации скрипта

function buildClean() {
  return gulp.src("build/*", { read: false }).pipe(clean());
}

exports.css = series(parallel(cssTask));
exports.img = series(parallel(imgClean, imgTask, webpTask));
exports.vue = series(vueClean, vueTask);
exports.watch = vueWatch;

exports.build = series(
  buildClean,
  parallel(imgTask, webpTask, cssTask, vueTask)
);
