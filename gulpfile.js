const { src, dest, series, watch } = require("gulp");
const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const csso = require("gulp-csso");
const include = require("gulp-file-include");
const htmlmin = require("gulp-htmlmin");
const del = require("del");
const concat = require("gulp-concat");
const autoprefixer = require("gulp-autoprefixer");
const sync = require("browser-sync").create();
const minify = require("gulp-minify");
const imageminJpegtran = require("imagemin-jpegtran");
const webp = require("gulp-webp");
const jeditor = require("gulp-json-editor");

function html() {
  return src("src/**.html")
    .pipe(
      include({
        prefix: "@@",
      })
    )
    .pipe(
      htmlmin({
        collapseWhitespace: true,
        removeComments: true,
      })
    )
    .pipe(dest("ready"));
}

function scss() {
  return src("src/styles/**.scss")
    .pipe(sass())
    .pipe(autoprefixer("last 2 versions"))
    .pipe(csso())
    .pipe(concat("style.css"))
    .pipe(dest("ready"));
}

function pic() {
  return src("src/img/**.{jpeg,jpg,gif,png}").pipe(dest("ready/img"));
}
function fotoFailai() {
  return src("src/fotoFailai/**.{jpeg,jpg,gif,png}").pipe(
    dest("ready/fotoFailai")
  );
}

function json() {
  return src("src/js/**.json").pipe(dest("ready/js"));
}

function jsmini() {
  return src("src/js/*.js", "src/js/*.mjs")
    .pipe(
      minify({
        noSource: true,
      })
    )
    .pipe(dest("ready/js"));
}

async function clear() {
  del("ready");
}

function serve() {
  sync.init({
    server: "./ready",
  });

  watch("src/**.html", series(html)).on("change", sync.reload);
  watch("src/parts/**.html", series(html)).on("change", sync.reload);
  watch("src/styles/**.scss", series(scss)).on("change", sync.reload);
  watch("src/img/**.{jpeg,jpg,gif}", series(pic)).on("change", sync.reload);
  watch("src/js/**.js", series(jsmini)).on("change", sync.reload);
  watch("src/js/**.json", series(json)).on("change", sync.reload);
}

exports.start = series(clear, html, jsmini, fotoFailai, json, scss, pic, serve);

exports.reload = series(html, scss, jsmini, fotoFailai, json, pic, serve);

exports.delete = series(clear);
