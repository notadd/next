"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const querystring = require("querystring");
const urlJoin = require("url-join");
const get_paths_utility_1 = require("./get-paths.utility");
const url_1 = require("url");
function getFilenameFromUrl(pubPath, compiler, url) {
    const { outputPath, publicPath } = get_paths_utility_1.getPaths(pubPath, compiler, url);
    const localPrefix = url_1.parse(publicPath || "/", false, true);
    const urlObject = url_1.parse(url);
    let filename;
    if (localPrefix.hostname !== null && urlObject.hostname !== null &&
        localPrefix.hostname !== urlObject.hostname) {
        return "";
    }
    if (publicPath && localPrefix.hostname === urlObject.hostname &&
        url.indexOf(publicPath) !== 0) {
        return "";
    }
    if (urlObject
        && urlObject.pathname
        && localPrefix.pathname
        && urlObject.pathname.indexOf(localPrefix.pathname) === 0) {
        filename = urlObject.pathname.substr(localPrefix.pathname.length);
    }
    if (!urlObject.hostname && localPrefix.hostname &&
        url.indexOf(localPrefix.path) !== 0) {
        return "";
    }
    let uri = outputPath;
    if (filename) {
        uri = urlJoin((outputPath || ""), filename);
        if (!uri.startsWith("/")) {
            uri = `/${uri}`;
        }
    }
    return querystring.unescape(uri);
}
exports.getFilenameFromUrl = getFilenameFromUrl;
