import * as weblog from  "webpack-log";

export function ctx(compiler, options) {
    const context = {
        state: false,
        webpackStats: null,
        callbacks: [],
        options,
        compiler,
        watching: null,
        forceRebuild: false,
        log: {
            error: Function,
        },
        rebuild: () => {},
    };
    if (options.logger) {
        context.log = options.logger;
    } else {
        context.log = weblog({
            level: options.logLevel || 'info',
            name: 'wdm',
            timestamp: options.logTime
        });
    }
    const { log } = context;
    function done(stats) {
        context.state = true;
        context.webpackStats = stats;
        process.nextTick(() => {
            if (!context.state) {
                return;
            }
            context.options.reporter(context.options, {
                log,
                state: true,
                stats
            });
            const cbs = context.callbacks;
            context.callbacks = [];
            cbs.forEach((cb) => {
                cb(stats);
            });
        });
        if (context.forceRebuild) {
            context.forceRebuild = false;
            rebuild();
        }
    }
    function invalid(callback) {
        if (context.state) {
            context.options.reporter(context.options, {
                log,
                state: false
            });
        }
        context.state = false;
        if (callback && typeof callback === 'function') {
            callback();
        }
    }
    function rebuild() {
        if (context.state) {
            context.state = false;
            context.compiler.run((err) => {
                if (err) {
                    log.error(err.stack || err);
                    if (err.details) {
                        log.error(err.details);
                    }
                }
            });
        } else {
            context.forceRebuild = true;
        }
    }

    context.rebuild = rebuild;
    context.compiler.hooks.invalid.tap('WebpackDevMiddleware', invalid);
    context.compiler.hooks.run.tap('WebpackDevMiddleware', invalid);
    context.compiler.hooks.done.tap('WebpackDevMiddleware', done);
    context.compiler.hooks.watchRun.tap('WebpackDevMiddleware', (comp, callback) => {
        invalid(callback);
    });

    return context;
}