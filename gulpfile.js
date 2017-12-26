const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const sequence = require('gulp-sequence');
const ts = require('gulp-typescript');

const packages = {
    backend: ts.createProject('src/backend/tsconfig.json'),
    'backend-mix': ts.createProject('src/backend-mix/tsconfig.json'),
    common: ts.createProject('src/common/tsconfig.json'),
    core: ts.createProject('src/core/tsconfig.json'),
    server: ts.createProject('src/server/tsconfig.json'),
    user: ts.createProject('src/user/tsconfig.json'),
};

const modules = Object.keys(packages);
const source = 'src';
const distId = process.argv.indexOf('--dist');
const dist = distId < 0 ? 'node_modules/@notadd' : process.argv[distId + 1];

gulp.task('default', function () {
    modules.forEach(module => {
        gulp.watch(
            [`${source}/${module}/**/*.ts`, `${source}/${module}/*.ts`],
            [module]
        ).on('change', function (event) {
            console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
        });
    });
    nodemon({
        script: 'node_modules/@notadd/server/bootstrap.js',
        watch: [
            "packages/",
            "main.js",
        ],
        ext: 'js'
    })
});

modules.forEach(module => {
    gulp.task(module, () => {
        return packages[module]
            .src()
            .pipe(packages[module]())
            .pipe(gulp.dest(`${dist}/${module}`));
    });
});

gulp.task('build', function (cb) {
    sequence('common', modules.filter((module) => module !== 'common'), cb);
});
