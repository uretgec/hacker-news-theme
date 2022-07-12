const { src, dest, watch, series, parallel } = require('gulp');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const del = require('del');
const cleanCss = require('gulp-clean-css');
const mocha = require("gulp-mocha");

const fs = require('fs');

const Configs = {
    HERE: './',
    DIST: 'dist/',
    ASSETS: 'assets/',
    CSS: 'assets/css/',
    TEMPLATES: 'templates/',
};

/*const TemplateEngines = {
    STATIC: 'static',
    TWIG_JS: 'twigjs',
    TWIG_PHP: 'twigphp',
    TEMPLATE_GO: 'templatego',
}*/

function clean() {
    return del([
        Configs.HERE + Configs.DIST + '**',
        '!' + Configs.HERE + Configs.DIST + '.gitkeep'
      ]);
  }

function cssMinify() {
    return src(Configs.HERE + Configs.CSS + '*.css')
        .pipe(concat("style.css"))
        .pipe(cleanCss())
        .pipe(rename({ extname: '.min.css' }))
        .pipe(dest(Configs.HERE + Configs.DIST + Configs.CSS));
}

function templatesMove() {
    return src(Configs.HERE + Configs.TEMPLATES + '**')
        .pipe(dest(Configs.HERE + Configs.DIST + Configs.TEMPLATES));
}

function assetsMove() {
    return src([Configs.HERE + Configs.ASSETS + '**', '!' + Configs.HERE + Configs.CSS + '**'])
        .pipe(dest(Configs.HERE + Configs.DIST + Configs.ASSETS));
}

function watchTemplates() {
    return watch([Configs.HERE + Configs.TEMPLATES + '**/**'], series(
        clean,
        parallel(cssMinify, templatesMove, assetsMove),
    ));
}

function build() {
    return series(
        clean,
        parallel(cssMinify, templatesMove, assetsMove),
    )
}

function runTests(cb) {
    return src(['**/*.test.js'])
        .pipe(mocha())
        .on('error', function() {
            cb(new Error('Test failed'));
        })
        .on('end', function() {
            cb();
        });
}

exports.buildMe = build;
exports.watchMe = watchTemplates;
exports.testMe = runTests;