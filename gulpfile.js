const gulp = require("gulp");
const nodemon = require("gulp-nodemon");
const rename = require("gulp-rename");
const sequence = require("gulp-sequence");
const sourcemaps = require('gulp-sourcemaps');
const ts = require("@notadd/gulp-typescript");
const tslint = require("gulp-tslint");

const packages = {
    authentication: ts.createProject("src/authentication/tsconfig.json"),
    backend: ts.createProject("src/backend/tsconfig.json"),
    core: ts.createProject("src/core/tsconfig.json"),
    graphql: ts.createProject("src/graphql/tsconfig.json"),
    injection: ts.createProject("src/injection/tsconfig.json"),
    internationalization: ts.createProject("src/internationalization/tsconfig.json"),
    logger: ts.createProject("src/logger/tsconfig.json"),
    rpc: ts.createProject("src/rpc/tsconfig.json"),
    server: ts.createProject("src/server/tsconfig.json"),
    setting: ts.createProject("src/setting/tsconfig.json"),
    websocket: ts.createProject("src/websocket/tsconfig.json"),
    workflow: ts.createProject("src/workflow/tsconfig.json"),
};

const modules = Object.keys(packages);
const source = "src";
const distId = process.argv.indexOf("--dist");
const dist = distId < 0 ? "node_modules/@notadd" : process.argv[distId + 1];

gulp.task("default", function () {
    tasks();
    nodemon({
        script: "node_modules/@notadd/server/bootstrap.js",
        watch: [
            "ormconfig.yml",
            "packages/",
            "storages/caches/addon.json",
            "storages/caches/graphql.json",
            "storages/caches/module.json",
        ],
        ext: "js",
    });
});

modules.forEach(module => {
    gulp.task(module, () => {
        gulp.src([
            `${source}/${module}/**/*.graphql`,
            `${source}/${module}/*.graphql`,
        ]).pipe(rename(function (path) {
            path.basename = path.basename.replace(".original", ".types");
        })).pipe(gulp.dest(`${dist}/${module}`));

        return packages[module]
            .src()
            .pipe(tslint({
                formatter: "verbose",
            }))
            .pipe(tslint.report({
                emitError: false,
                summarizeFailureOutput: true,
            }))
            .pipe(sourcemaps.init())
            .pipe(packages[module]())
            .pipe(sourcemaps.write("."))
            .pipe(gulp.dest(`${dist}/${module}`));
    });
});

gulp.task("build", function (cb) {
    sequence("authentication", modules.filter((module) => module !== "common"), cb);
});

gulp.task("watch", function () {
    tasks();
});

function tasks() {
    modules.forEach(module => {
        watchGraphql(source, module);
        watchTypescript(source, module);
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
    ).on("change", function (event) {
        console.log("File " + event.path + " was " + event.type + ", running tasks...");
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
    ).on("change", function (event) {
        console.log("File " + event.path + " was " + event.type + ", running tasks...");
    });
}
