const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const rename = require('gulp-rename');
const sequence = require('gulp-sequence');
const ts = require('gulp-typescript');

const packages = {
    'addon-demo': ts.createProject('src/addon-demo/tsconfig.json'),
    authentication: ts.createProject('src/authentication/tsconfig.json'),
    backend: ts.createProject('src/backend/tsconfig.json'),
    'backend-mix': ts.createProject('src/backend-mix/tsconfig.json'),
    configuration: ts.createProject('src/configuration/tsconfig.json'),
    core: ts.createProject('src/core/tsconfig.json'),
    'extension-demo': ts.createProject('src/extension-demo/tsconfig.json'),
    injection: ts.createProject('src/injection/tsconfig.json'),
    logger: ts.createProject('src/logger/tsconfig.json'),
    server: ts.createProject('src/server/tsconfig.json'),
    setting: ts.createProject('src/setting/tsconfig.json'),
    user: ts.createProject('src/user/tsconfig.json'),
    websocket: ts.createProject('src/websocket/tsconfig.json'),
};

const modules = Object.keys(packages).concat([
    'react-scripts'
]);
const source = 'src';
const distId = process.argv.indexOf('--dist');
const dist = distId < 0 ? 'node_modules/@notadd' : process.argv[distId + 1];

gulp.task('default', function () {
    tasks();
    nodemon({
        script: 'node_modules/@notadd/server/bootstrap.js',
        watch: [
            "ormconfig.yml",
            "packages/",
        ],
        ext: 'js'
    });
});

gulp.task('backend-mix-server', function () {
    tasks();
    nodemon({
        script: 'node_modules/@notadd/react-scripts/bin/react-scripts.js',
        args: [
            'start',
            '--index',
            'node_modules/@notadd/backend-mix/index.js',
        ],
        watch: [
            'node_modules/@notadd/react-scripts/bin/react-scripts.js',
            'node_modules/@notadd/backend-mix/package.json',
        ],
    });
});

modules.forEach(module => {
    gulp.task(module, () => {
        if (module === 'react-scripts') {
            return gulp.src([
                `${source}/${module}/**/*.js`,
                `${source}/${module}/*.js`,
            ]).pipe(gulp.dest(`${dist}/${module}`));
        } else {
            gulp.src([
                `${source}/${module}/**/*.graphql`,
                `${source}/${module}/*.graphql`,
            ]).pipe(rename(function (path) {
                path.basename = path.basename.replace('.original', '.types');
            })).pipe(gulp.dest(`${dist}/${module}`));

            return packages[module]
                .src()
                .pipe(packages[module]())
                .pipe(gulp.dest(`${dist}/${module}`));
        }
    });
});

gulp.task('build', function (cb) {
    sequence('authentication', modules.filter((module) => module !== 'common'), cb);
});

gulp.task('watch', function () {
    tasks();
});

function tasks() {
    modules.forEach(module => {
        if (module === 'react-scripts') {
            watchAny(source, module);
        } else if (module === 'backend-mix') {
            watchMedia(source, module);
            watchTypescript(source, module);
        } else {
            watchGraphql(source, module);
            watchTypescript(source, module);
        }
    });
}

function watchAny(source, module) {
    gulp.watch(
        [
            `${source}/${module}/**/*.*`,
            `${source}/${module}/*.*`,
        ],
        [
            module,
        ]
    ).on('change', function (event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
        gulp.src([
            `${source}/${module}/**/*.*`,
            `${source}/${module}/*.*`,
        ]).pipe(gulp.dest(`${dist}/${module}`));
    });
}

function watchGraphql(source, module) {
    gulp.watch(
        [
            `${source}/${module}/**/*.graphql`,
            `${source}/${module}/*.graphql`,
        ],
        [
            module,
        ]
    ).on('change', function (event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
        gulp.src([
            `${source}/${module}/**/*.graphql`,
            `${source}/${module}/*.graphql`,
        ]).pipe(gulp.dest(`${dist}/${module}`));
    });
}

function watchMedia(source, module) {
    gulp.watch(
        [
            `${source}/${module}/**/*.css`,
            `${source}/${module}/*.css`,
            `${source}/${module}/**/*.eot`,
            `${source}/${module}/*.eot`,
            `${source}/${module}/**/*.ijmap`,
            `${source}/${module}/*.ijmap`,
            `${source}/${module}/**/*.jpg`,
            `${source}/${module}/*.jpg`,
            `${source}/${module}/**/*.jpeg`,
            `${source}/${module}/*.jpeg`,
            `${source}/${module}/**/*.png`,
            `${source}/${module}/*.png`,
            `${source}/${module}/**/*.svg`,
            `${source}/${module}/*.svg`,
            `${source}/${module}/**/*.ttf`,
            `${source}/${module}/*.ttf`,
            `${source}/${module}/**/*.woff2`,
            `${source}/${module}/*.woff2`,
        ],
        [
            module,
        ]
    ).on('change', function (event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
        gulp.src([
            `${source}/${module}/**/*.css`,
            `${source}/${module}/*.css`,
            `${source}/${module}/**/*.jpg`,
            `${source}/${module}/*.jpg`,
            `${source}/${module}/**/*.jpeg`,
            `${source}/${module}/*.jpeg`,
            `${source}/${module}/**/*.png`,
            `${source}/${module}/*.png`,
            `${source}/${module}/**/*.svg`,
            `${source}/${module}/*.svg`,
        ]).pipe(gulp.dest(`${dist}/${module}`));
    });
}

function watchTypescript(source, module) {
    gulp.watch(
        [
            `${source}/${module}/**/*.ts`,
            `${source}/${module}/**/*.tsx`,
            `${source}/${module}/*.ts`,
            `${source}/${module}/*.tsx`,
        ],
        [
            module,
        ]
    ).on('change', function (event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
}
