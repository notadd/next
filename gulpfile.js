const gulp = require('gulp');
const ts = require('gulp-typescript');
const gulpSequence = require('gulp-sequence');

const packages = {
    backend: ts.createProject('src/backend/tsconfig.json'),
    common: ts.createProject('src/common/tsconfig.json'),
};

const modules = Object.keys(packages);
const source = 'src';
const distId = process.argv.indexOf('--dist');
const dist = distId < 0 ? 'node_modules/@notadd' : process.argv[distId + 1];

gulp.task('default', function() {
    modules.forEach(module => {
        gulp.watch(
            [`${source}/${module}/**/*.ts`, `${source}/${module}/*.ts`],
            [module]
        );
    });
});

modules.forEach(module => {
    gulp.task(module, () => {
        return packages[module]
            .src()
            .pipe(packages[module]())
            .pipe(gulp.dest(`${dist}/${module}`));
    });
});

gulp.task('build', function(cb) {
    gulpSequence('common', modules.filter((module) => module !== 'common'), cb);
});

gulp.task('move', function() {
    gulp.src(['node_modules/@notadd/**/*']).pipe(
        gulp.dest('examples/01-cats-app/node_modules/@notadd')
    );
});
